import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { UserManagementService } from '../../../services/UserManagementService/userManagement.service';
import Swal from 'sweetalert2';
import { AttendanceManagementService } from '../../../services/AttendanceManagementService/attendanceManagement.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attendance-log',
  templateUrl: './attendance-log.component.html',
  styleUrls: ['./attendance-log.component.css']
})
export class AttendanceLogComponent implements OnInit {
  attendanceForm: FormGroup
  isLoading: boolean = true
  employeeList = []
  uploadedList = []
  dateToday = {
    day: new Date(new Date()).getDate(),
    month: new Date(new Date()).getMonth() + 1,
    year: new Date(new Date()).getFullYear()
  }
  @ViewChild('uploadModal') uploadModal: ElementRef
  type = [{
    id: 0,
    description: 'In'
  },{
    id: 1,
    description: 'Out'
  }]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  
  constructor(private modalService: NgbModal, private userManagementService: UserManagementService, 
    private ttendanceManagementService: AttendanceManagementService, private fb: FormBuilder, 
    private attendanceManagementService: AttendanceManagementService) { }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };

    this.attendanceForm = this.fb.group({
      dateFrom: this.dateToday,
      dateTo: this.dateToday,
      selectedEmployee: null,
    })

    this.userManagementService.employeeView("0").subscribe(data => { 
      this.employeeList = data
      
      this.isLoading = false
      setTimeout(()=>{
        this.dtTrigger.next();
      }, 100);
    },
      (error:HttpErrorResponse) => {
      console.log(error.error);
      this.isLoading = false;
    }) 
    
  }

  public uploadFinished = (event) => {
    this.uploadedList = []
    for (var i = 0; i < event.length; i++) {
      var selected = this.employeeList.filter(x => x.bio_id == event[i].bio_id)[0]
      this.uploadedList.push({
        employeeCode: selected.employee_code,
        displayName: selected.display_name,
        logs: event[i].date_time,
        type: event[i].in_out === 0 ? "In" : "Out",
      })
    }
    $('#modalTable').DataTable({
      "data": this.uploadedList,
      "columns": [
        { "data": "employeeCode" },
        { "data": "displayName" },
        { "data": "logs" },
        { "data": "type" },
    ]});
  }

  exportTemplate(){

  }

  openLogModal(content, id) {
    this.modalService.open(content)
  }

  openUploadModal(){
    this.modalService.open(this.uploadModal, {size: 'lg'})
  }

  search(){
    this.attendanceManagementService.attendanceView(
      this.attendanceForm.get("dateFrom").value, 
      this.attendanceForm.get("dateTo").value,
      this.attendanceForm.get("selectedEmployee").value === null ? "" : this.attendanceForm.get("selectedEmployee").value
      ).subscribe(data => { 
      console.log(data)
     
    },
      (error:HttpErrorResponse) => {
      console.log(error.error);
      this.isLoading = false;
    }) 
  }

  openFileBrowser(event: any) {
    event.preventDefault();
    let element: HTMLElement = document.querySelector("#fileUploadInputExample") as HTMLElement;
    element.click();
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleFileInput(event: any) {
    if (event.target.files.length) {
      let element: HTMLElement = document.querySelector("#fileUploadInputExample + .input-group .file-upload-info") as HTMLElement;
      let fileName = event.target.files[0].name;
      element.setAttribute( 'value', fileName)
    }
  }

  submitUpload(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Please Wait !',
          allowOutsideClick: false,
          onBeforeOpen: () => {
              Swal.showLoading()
              var obj = {
                created_by: sessionStorage.getItem('u'),
                series_code: sessionStorage.getItem('sc'),
              }
              console.log(JSON.stringify(obj))
              this.ttendanceManagementService.attendanceI(obj).subscribe(data => { 
                if(data === 0){
                   Swal.fire("Failed!", "Transaction failed!", "error");  
                }
                else{
                  Swal.fire("Ok!", "Transaction successful!", "success");
                }
              },
              (error:HttpErrorResponse) => {
                console.log(error.error);
                Swal.fire("Failed!", "Transaction failed!", "error");  
              });
          },
      });
      }
    })
  }

}
