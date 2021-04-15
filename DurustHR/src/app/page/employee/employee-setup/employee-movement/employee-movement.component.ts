import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TenantMasterService } from '../../../../services/TenantMasterService/tenantMaster.service';
import { UserManagementService } from '../../../../services/UserManagementService/userManagement.service';

@Component({
  selector: 'app-employee-movement',
  templateUrl: './employee-movement.component.html',
  styleUrls: ['./employee-movement.component.css']
})
export class EmployeeMovementComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  isLoading: boolean = true;
  movement = [];
  employee = [];
  isSearch: boolean = false
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  selectedEmployee: number;
  selectedMovement: number;
  dateFrom: any;
  dateTo: any;
  pipe = new DatePipe('en-US');
  dateToday = {
    day: new Date(new Date()).getDate(),
    month: new Date(new Date()).getMonth() + 1,
    year: new Date(new Date()).getFullYear()
  }
  table = [];
  constructor(private tenantMasterService: TenantMasterService, private userManagement: UserManagementService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    };

    this.tenantMasterService.dropdownList("51").subscribe(data => { 
      this.movement = data
      
      this.userManagement.employeeList().subscribe(emp => { 
        this.employee = emp
        
        this.dateFrom = this.dateToday
        this.dateTo = this.dateToday
        this.isLoading = false;
        setTimeout(()=>{
          this.dtTrigger.next();
        }, 100);
      },
      (error:HttpErrorResponse) => {
        console.log(error.error);
        this.isLoading = false;
      }) 
    },
    (error:HttpErrorResponse) => {
      console.log(error.error);
      this.isLoading = false;
    })   
  }

  dateChange(){
    this.dateFrom = this.dateFrom === null || this.dateFrom === undefined ? this.dateFrom = this.dateToday : this.dateFrom
    this.dateTo = this.dateTo === null || this.dateTo === undefined ? this.dateTo = this.dateTo : this.dateTo
  }

  search(){
    this.isSearch = true
    this.table = []
    let m = this.selectedMovement === null || this.selectedMovement === undefined ? 0 : this.selectedMovement
    let e = this.selectedEmployee === null || this.selectedEmployee === undefined ? 0 : this.selectedEmployee    
    let df = this.pipe.transform(this.dateFrom.year + "/" + this.dateFrom.month + "/" + this.dateFrom.day + "", 'MM/dd/yyyy')
    let dt = this.pipe.transform(this.dateTo.year + "/" + this.dateTo.month + "/" + this.dateTo.day + "", 'MM/dd/yyyy')
    this.userManagement.movementView(e, m, df, dt).subscribe(data => { 
      for (var i = 0; i < data.length; i++) {
        var selected =  this.movement.filter(x => x.id ===  data[i].movement_type)[0]
        this.table.push({
         employeeCode: data[i].employee_code,
         displayName: data[i].display_name,
         movementType: selected.description,
         description: data[i].description,
         dateCreated: this.pipe.transform(data[i].date_created, 'MM/dd/yyyy'),
         createdBy: data[i].created_by,
        })
      }
      this.rerender()
      this.isSearch = false
    },
    (error:HttpErrorResponse) => {
      console.log(error.error);
      this.isSearch = false
    }) 
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.clear().draw(); 
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
