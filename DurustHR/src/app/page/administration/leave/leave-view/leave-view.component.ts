import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LeaveManagementService } from '../../../../services/LeaveManagementService/leaveManagement.service';
import { TenantMasterService } from '../../../../services/TenantMasterService/tenantMaster.service';
import { UserManagementService } from '../../../../services/UserManagementService/userManagement.service';


@Component({
  selector: 'app-leave-view',
  templateUrl: './leave-view.component.html',
  styleUrls: ['./leave-view.component.css']
})
export class LeaveViewComponent implements OnInit {
  isLoading: boolean = true
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  table = [];
  constructor(private userManagementService: UserManagementService, private leaveManagementService: LeaveManagementService, 
    private router: Router, private tenantMasterSetupService: TenantMasterService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };

    this.leaveManagementService.leaveView(0).subscribe(data => { 
      this.userManagementService.employeeView(0).subscribe(emp => { 
        this.tenantMasterSetupService.dropdownList(0).subscribe(mas => { 
          var master = mas.filter(x => x.type_id === 44)
          for (var i = 0; i < data.length; i++) {
            var selected =  emp.filter(x => x.employee_id ===  data[i].created_by)[0]
            this.table.push({
              active: data[i].active,
              created_by: data[i].created_by,
              created_desc: selected.display_name,
              date_created: data[i].date_created,
              leave_type_code: data[i].leave_type_code,
              leave_name: data[i].leave_name,
              description: data[i].description,
              total_leaves: data[i].total_leaves,
              filed_by: master.filter(x => x.id === data[i].filed_by)[0].description,
              leave_type_id: data[i].leave_type_id,
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

  viewLeave(e){
    this.router.navigate(["/layout/administration/leave-detail", e]);
  }

}
