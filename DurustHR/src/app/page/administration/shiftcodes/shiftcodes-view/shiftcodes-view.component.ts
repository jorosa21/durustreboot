import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ShiftcodeManagementService } from '../../../../services/ShiftCodeManagementService/shiftcodeManagement.service';
import { UserManagementService } from '../../../../services/UserManagementService/userManagement.service';

@Component({
  selector: 'app-shiftcodes-view',
  templateUrl: './shiftcodes-view.component.html',
  styleUrls: ['./shiftcodes-view.component.css']
})
export class ShiftcodesViewComponent implements OnInit {
  isLoading: boolean = false;
  table = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private shiftcodeManagementService: ShiftcodeManagementService, private router: Router,
    private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };

    this.shiftcodeManagementService.shiftView(0).subscribe(data => { 
      this.userManagementService.employeeView(0).subscribe(emp => { 
        for (var i = 0; i < data.length; i++) {
          var selected =  emp.filter(x => x.employee_id ===  data[i].created_by)[0]
          this.table.push({
            active: data[i].active,
            created_by: data[i].created_by,
            created_desc: selected.display_name,
            date_created: data[i].date_created,
            shift_code: data[i].shift_code,
            shift_name: data[i].shift_name,
            time_in: data[i].time_in,
            time_out: data[i].time_out,
            shift_id: data[i].shift_id,
            description: data[i].description,
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
  }

  viewShift(e){
    this.router.navigate(["/layout/administration/shiftcodes-detail", e]);
  }

}
