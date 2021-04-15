import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { TenantDefaultService } from '../../../services/TenantDefaultService/tenantDefault.service';
import { TenantMasterService } from '../../../services/TenantMasterService/tenantMaster.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-dropdown-settings',
  templateUrl: './dropdown-settings.component.html',
  styleUrls: ['./dropdown-settings.component.css']
})
export class DropdownSettingsComponent implements OnInit {
  isLoading:boolean = false;
  disSubmit: boolean = false;
  submitText: string = "Proceed";
  selectedModule: number;
  dropdownForm: FormGroup
  moduleType = [];
  moduleList = [];
  table = [];
  constructor(private tenantMasterService: TenantMasterService, private tenantDefaultService: TenantDefaultService, private fb: FormBuilder) { }

  ngOnInit() {
    this.dropdownForm = this.fb.group({
      description: [''],
      selectedModule: [null],
      createdBy: sessionStorage.getItem('user')
    });
    this.tenantMasterService.dropdownFixType().subscribe(data => { 
      this.moduleType = data;
      this.tenantDefaultService.dropdownTAList("0").subscribe(data => { 
        this.moduleList = data;
        this.isLoading = false;
      },
      (error:HttpErrorResponse) => {
        console.log(error.error);
        this.isLoading = false;
      });
    },
    (error:HttpErrorResponse) => {
      console.log(error.error);
      this.isLoading = false;
    });
  }

  moduleChange(){
    this.table = [];
    this.table = this.moduleList.filter(x => x.type_id === this.dropdownForm.get('selectedModule').value)
  }

  checkChange(e){
    var selected = this.moduleList.filter(x => x.id == e.target.value)[0]
    var obj = {
      dropdown_id: selected['id'],
      dropdown_type_id: selected['type_id'],
      dropdown_description: selected['description'],
      created_by: sessionStorage.getItem('u'),
      active: e.target.checked,
      series_code: sessionStorage.getItem('sc'),
      company_id: sessionStorage.getItem('ci'),  
    }
    this.tenantDefaultService.dropdownIU(obj).subscribe(data => { 
    },
    (error:HttpErrorResponse) => {
      console.log(error.error);
      Swal.fire("Failed!", "Transaction failed!", "error");  
    });
  }

  submit(){
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
              let selected =  this.moduleType.filter(x => x.id === this.dropdownForm.get('selectedModule').value)[0];
              var obj = {
                dropdown_id: "0",
                dropdown_type_id: selected.id,
                dropdown_description: this.dropdownForm.get('description').value,
                active: true,
                series_code: sessionStorage.getItem('sc'),
                company_id: sessionStorage.getItem('ci'),  
                created_by: sessionStorage.getItem('u'),    
              }
              console.log(JSON.stringify(obj));
              this.tenantDefaultService.dropdownIU(obj).subscribe(data => { 
                if(data.dropdown_id === "0"){
                  Swal.fire("Failed!", "Transaction failed!", "error");  
                }
                else{
                  Swal.fire("Ok!", "Transaction successful!", "success");
                  this.tenantDefaultService.dropdownTAList("0").subscribe(data => { 
                    this.moduleList = [];
                    this.moduleList = data;
                    this.table = [];
                    this.table = this.moduleList.filter(x => x.type_id === this.dropdownForm.get('selectedModule').value)
                    this.dropdownForm.reset();
                  });
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
