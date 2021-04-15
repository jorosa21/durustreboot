import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PayrollRatesManagementService } from '../../../../services/PayrollRatesManagementService/payrollRatesManagement.service';
import { TenantMasterService } from '../../../../services/TenantMasterService/tenantMaster.service';
import { UserManagementService } from '../../../../services/UserManagementService/userManagement.service';

@Component({
  selector: 'app-allowance-deduction-view',
  templateUrl: './allowance-deduction-view.component.html',
  styleUrls: ['./allowance-deduction-view.component.css']
})
export class AllowanceDeductionViewComponent implements OnInit {
  isLoading: boolean = false;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  table = [];
  constructor(private ratesManagementService: PayrollRatesManagementService, private router: Router,
    private userManagementService: UserManagementService, private tenantMasterService: TenantMasterService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
    this.ratesManagementService.adView(0).subscribe(data => { 
      this.userManagementService.employeeView(0).subscribe(emp => { 
        this.tenantMasterService.dropdownList(26).subscribe(master => { 
          for (var i = 0; i < data.length; i++) {
            var selected =  emp.filter(x => x.employee_id ===  data[i].created_by)[0]
            this.table.push({
              active: data[i].active === false ? "No" : "Yes",
              created_by: data[i].created_by,
              created_desc: selected.display_name,
              date_created: data[i].date_created,
              recurring_code: data[i].recurring_code,
              recurring_name: data[i].recurring_name,
              recurring_type: master.filter(x => x.id === data[i].recurring_type)[0].description,
              taxable: data[i].taxable === false ? "No" : "Yes",
              recurring_id: data[i].recurring_id,
            })
          }
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
    },
    (error:HttpErrorResponse) => {
      console.log(error.error);
      this.isLoading = false;
    })   
  }

  viewAD(e){
    this.router.navigate(["/layout/administration/allowance-deduction-detail", e]);
  }
}
