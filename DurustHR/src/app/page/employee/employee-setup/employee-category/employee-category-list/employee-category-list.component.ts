import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EmployeeCategoryManagementService } from '../../../../../services/EmployeeCategoryManagementService/employeeCategoryManagement.service';
import { UserManagementService } from '../../../../../services/UserManagementService/userManagement.service';

@Component({
  selector: 'app-employee-category-list',
  templateUrl: './employee-category-list.component.html',
  styleUrls: ['./employee-category-list.component.css']
})
export class EmployeeCategoryListComponent implements OnInit {

  isLoading: boolean = true;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  table = [];
  pipe = new DatePipe('en-US');

  constructor(private userManagementService: UserManagementService, private employeeCategoryService: EmployeeCategoryManagementService,
    private router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    };

    this.employeeCategoryService.categoryView(0).subscribe(data => { 
      this.userManagementService.employeeView(0).subscribe(emp => { 
        for (var i = 0; i < data.length; i++) {
          var selected =  emp.filter(x => x.employee_id ===  data[i].created_by)[0]
          this.table.push({
            active: data[i].active,
            created_by: data[i].created_by,
            created_desc: selected.display_name,
            date_created: this.pipe.transform(data[i].date_created, 'MM/dd/yyyy'),
            category_code: data[i].category_code,
            category_description: data[i].category_description,
            category_name: data[i].category_name,
            category_id: data[i].category_id,
            encrypt_category_id: data[i].encrypt_category_id,
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

  viewCategory(e){
    this.router.navigate(["/layout/employee/employee-category-detail", e]);
  }

}
