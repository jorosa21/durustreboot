import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeahterIconModule } from '../../core/feather-icon/feather-icon.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from '../dateformat';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { EmployeeCategoryDetailComponent } from './employee-setup/employee-category/employee-category-detail/employee-category-detail.component';
import { EmployeeCategoryListComponent } from './employee-setup/employee-category/employee-category-list/employee-category-list.component';
import { ArchwizardModule } from 'angular-archwizard';
import { DataTablesModule } from 'angular-datatables';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EmployeeMovementComponent } from './employee-setup/employee-movement/employee-movement.component';
import { EmployeeDetailsComponent } from './employee-setup/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-setup/employee-list/employee-list.component';
import { EmployeeScheduleComponent } from './employee-maintenance/employee-schedule/employee-schedule.component';
import { LeaveEntitlementComponent } from './employee-maintenance/leave-entitlement/leave-entitlement.component';
const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        redirectTo: 'employee-list',
        pathMatch: 'full'
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent
      },
      {
        path: 'employee-details',
        redirectTo: "employee-details/",
        pathMatch: 'full'
      },
      {
        path: 'employee-details/:id',
        component: EmployeeDetailsComponent
      },
      {
        path: 'employee-category-list',
        component: EmployeeCategoryListComponent
      },
      {
        path: 'employee-category-detail',
        redirectTo: "employee-category-detail/",
        pathMatch: 'full'
      },
      {
        path: 'employee-category-detail/:id',
        component: EmployeeCategoryDetailComponent
      },

      {
        path: 'employee-movement',
        component: EmployeeMovementComponent
      },
      {
        path: 'employee-schedule',
        component: EmployeeScheduleComponent
      },
      {
        path: 'leave-entitlement',
        component: LeaveEntitlementComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    EmployeeComponent, 
    EmployeeListComponent, 
    EmployeeDetailsComponent, 
    EmployeeCategoryDetailComponent,
    EmployeeCategoryListComponent,
    EmployeeMovementComponent,
    EmployeeScheduleComponent,
    LeaveEntitlementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FeahterIconModule,
    NgSelectModule,
    PopoverModule.forRoot(),
    NgbModule,
    FeahterIconModule,
    ArchwizardModule,
    DataTablesModule,
    PerfectScrollbarModule,
  ],
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}],
  bootstrap: [EmployeeDetailsComponent]
})
export class EmployeeModule { }
