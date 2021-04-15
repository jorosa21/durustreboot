import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HolidayManagementService } from '../../../../services/HolidayManagementService/holidayManagement.service';
import { UserManagementService } from '../../../../services/UserManagementService/userManagement.service';

@Component({
  selector: 'app-holiday-view',
  templateUrl: './holiday-view.component.html',
  styleUrls: ['./holiday-view.component.css']
})
export class HolidayViewComponent implements OnInit {
  isLoading: boolean = true;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  table = [];
  constructor(private holidayManagementService: HolidayManagementService, private router: Router,
    private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };

    this.holidayManagementService.holidayList(0).subscribe(data => { 
      this.userManagementService.employeeView(0).subscribe(emp => { 
        for (var i = 0; i < data.length; i++) {
          var selected =  emp.filter(x => x.employee_id ===  data[i].created_by)[0]
          this.table.push({
            active: data[i].active,
            created_by: data[i].created_by,
            created_desc: selected.display_name,
            date_created: data[i].date_created,
            holiday_code: data[i].holiday_code,
            holiday_description: data[i].holiday_description,
            holiday_header_name: data[i].holiday_header_name,
            holiday_id: data[i].holiday_id,
            holiday_id_encrypted: data[i].holiday_id_encrypted,
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

  viewHoliday(e){
    this.router.navigate(["/layout/administration/holiday-detail", e]);
  }

}
