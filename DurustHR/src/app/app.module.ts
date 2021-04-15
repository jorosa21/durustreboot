import { TokenInterceptorService } from './services/security/token-interceptor.service';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LayoutModule } from './layout/layout.module';

import { RegisterService } from './services/auth/register/register.service';
import { AuthGuardService } from './services/security/auth-guard.service';
import { LoginService } from './services/auth/login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuListService } from './services/security/menu-list.service';
import { TenantMasterService } from './services/TenantMasterService/tenantMaster.service';
import { MasterTemplateService } from './services/MasterTemplateService/masterTemplate.service';
import { PermissionManagementService } from './services/PermissionManagementService/permissionManagement.service';
import { TenantDefaultService } from './services/TenantDefaultService/tenantDefault.service';
import { BranchManagementService } from './services/BranchManagementService/branchManagement.service';
import { AccountManagementService } from './services/AccountManagementService/accountManagement.service';
import { UserManagementService } from './services/UserManagementService/userManagement.service';
import { HolidayManagementService } from './services/HolidayManagementService/holidayManagement.service';
import { PayrollRatesManagementService } from './services/PayrollRatesManagementService/payrollRatesManagement.service';
import { ShiftcodeManagementService } from './services/ShiftCodeManagementService/shiftcodeManagement.service';
import { LeaveManagementService } from './services/LeaveManagementService/leaveManagement.service';
import { EmployeeCategoryManagementService } from './services/EmployeeCategoryManagementService/employeeCategoryManagement.service';
import { AttendanceManagementService } from './services/AttendanceManagementService/attendanceManagement.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    CommonModule,
  ],
  providers: [
    LoginService,
    AuthGuardService,
    RegisterService,
    MenuListService,
    TenantMasterService,
    MasterTemplateService,
    PermissionManagementService,
    TenantDefaultService,
    BranchManagementService,
    AccountManagementService,
    UserManagementService,
    HolidayManagementService,
    PayrollRatesManagementService,
    ShiftcodeManagementService,
    LeaveManagementService,
    EmployeeCategoryManagementService,
    AttendanceManagementService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
