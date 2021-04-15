import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TenantDefaultService } from '../../../../services/TenantDefaultService/tenantDefault.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TenantMasterService } from '../../../../services/TenantMasterService/tenantMaster.service';
import { BranchManagementService } from '../../../../services/BranchManagementService/branchManagement.service';
import { UserManagementService } from '../../../../services/UserManagementService/userManagement.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeCategoryManagementService } from '../../../../services/EmployeeCategoryManagementService/employeeCategoryManagement.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeForm: FormGroup;
  isLoading = true;
  defaultNavActiveId = 1;
  id: string;
  pipe = new DatePipe('en-US');
  salutation = [];
  suffix = [];
  gender = [];
  nationality = [];
  civilstatus = [];
  bloodtype = [];
  religion = [];
  branch = [];
  employeestatus = [];
  occupation = [];
  supervisor = [];
  department = [];
  costcenter = [];
  category = [];
  division = [];
  payrolltype = [];
  bank = [];
  confidential = [];
  errSalutation = false;
  errDisplayName = false;
  errFirstName = false;
  errMiddleName = false;
  errLastName = false;
  errNickname = false;
  errGender = false;
  errNationality = false;
  errBirthday = false;
  errBirthplace = false;
  errCivilstatus = false;
  errReligion = false;
  errMobile = false;
  errEmail = false;
  errPresentAddress = false;
  errPermanentAddress = false;
  errBiometrics = false;
  errEmployeeCode = false;
  errBranch = false;
  errEmployeeStatus = false;
  errOccupation = false;
  errDepartment = false;
  errDateHired = false;
  errCategory = false;
  errPayrollType = false;
  errMonthlyRate = false;
  errSemiMonthlyRate = false;
  errFactorRate = false;
  errDailyRate = false;
  errHourlyRate = false;
  errBank = false;
  errBankAccount = false;
  errConfidential = false;
  display_name: string
  img_path: string
  constructor(private router: Router, private route: ActivatedRoute, private tenantDefault: TenantDefaultService,
    private tenantMasterService: TenantMasterService, private branchManagement: BranchManagementService,
    private userManagement: UserManagementService, private fb: FormBuilder, private readonly changeDetectorRef: ChangeDetectorRef,
    private employeeCategory: EmployeeCategoryManagementService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.employeeForm = this.fb.group({
      selectedSalutation: null,
      displayName: '',
      firstName: [''],
      middleName: [''],
      lastName: [''],
      selectedSuffix: null,
      nickname: [''],
      selectedGender: null,
      selectedNationality: null,
      selectedDate: [''],
      birthplace: [''],
      selectedCivilStatus: null,
      height: [''],
      weight: [''],
      selectedBloodType: null,
      selectedReligion: null,
      mobile: [''],
      phone: [''],
      office: [''],
      personalemail: [''],
      companyemail: [''],
      alternatenumber: [''],
      presentaddress: [''],
      permamentaddress: [''],
      biometricsID: [''],
      employeeID: [''],
      selectedBranch: null,
      selectedEmployeeStatus: null,
      selectedOccupation: null,
      selectedSupervisor: null,
      selectedDepartment: null,
      dateHired: [''],
      regularizationDate: [''],
      selectedCostCenter: null,
      selectedCategory: null,
      selectedDivision: null,
      selectedPayrollType: null,
      monthlyRate: 0,
      semiMonthlyRate: 0,
      factorRate: 0,
      dailyRate: 0,
      hourlyRate: 0,
      selectedBank: null,
      bankAccount: [''],
      selectedConfidential: null,
    });
    
    this.tenantDefault.dropdownTList("29, 30, 31, 33, 34, 35, 37, 38, 39, 40, 2,").subscribe(data => { 
      this.salutation = data.filter(x => x.type_id === 29)
      this.suffix = data.filter(x => x.type_id === 30)
      this.gender = data.filter(x => x.type_id === 31)
      this.civilstatus = data.filter(x => x.type_id === 33)
      this.bloodtype = data.filter(x => x.type_id === 34)
      this.religion = data.filter(x => x.type_id === 35);
      this.occupation = data.filter(x => x.type_id === 37);
      this.department = data.filter(x => x.type_id === 38);
      this.costcenter = data.filter(x => x.type_id === 39);
      this.division = data.filter(x => x.type_id === 40);
      this.bank = data.filter(x => x.type_id === 2)

      this.tenantMasterService.dropdownList("32, 36, 41, 42,").subscribe(data => { 
        this.nationality = data.filter(x => x.type_id === 32)
        this.employeestatus =  data.filter(x => x.type_id === 36)
        this.payrolltype =  data.filter(x => x.type_id === 41)
        this.confidential =  data.filter(x => x.type_id === 42)
        
        this.branchManagement.branchList().subscribe(data => { 
          this.branch = data
          
          this.userManagement.employeeView("0").subscribe(employee => { 
            this.supervisor = employee.filter(x => x.active === true)
            
            this.tenantDefault.seriesNext(17).subscribe(data => { 
              this.employeeForm.get('employeeID').setValue(data[0]['series_code']);
           
              this.employeeCategory.categoryList(0).subscribe(data => { 
                this.category = data
                
                if(this.id !== ""){
                  let selected = employee.filter(x => x.encrypt_employee_id === this.id)[0]
                  this.employeeForm.setValue({
                    selectedSalutation: selected.salutation_id,
                    displayName: selected.display_name,
                    firstName: selected.first_name,
                    middleName: selected.middle_name,
                    lastName: selected.last_name,
                    selectedSuffix: selected.suffix_id === 0 ? null : selected.suffix_id,
                    nickname: selected.nick_name,
                    selectedGender: selected.gender_id === 0 ? null : selected.gender_id,
                    selectedNationality: selected.nationality_id === 0 ? null : selected.nationality_id,
                    selectedDate: {
                      day: new Date(selected.birthday).getDate(),
                      month: new Date(selected.birthday).getMonth() + 1,
                      year: new Date(selected.birthday).getFullYear()
                    },
                    birthplace: selected.birth_place,
                    selectedCivilStatus: selected.civil_status_id === 0 ? null : selected.civil_status_id,
                    height: selected.height,
                    weight: selected.weight,
                    selectedBloodType: selected.blood_type_id === 0 ? null : selected.blood_type_id,
                    selectedReligion: selected.religion_id === 0 ? null : selected.religion_id,
                    mobile: selected.mobile,
                    phone: selected.phone,
                    office: selected.office,
                    personalemail: selected.personal_email_address,
                    companyemail: selected.email_address,
                    alternatenumber: selected.alternate_number,
                    presentaddress: selected.present_address,
                    permamentaddress: selected.permanent_address,
                    biometricsID: selected.bio_id,
                    employeeID: selected.employee_code,
                    selectedBranch: selected.branch_id === 0 ? null : selected.branch_id,
                    selectedEmployeeStatus: selected.employee_status_id === 0 ? null : selected.employee_status_id,
                    selectedOccupation: selected.occupation_id === 0 ? null : selected.occupation_id,
                    selectedSupervisor: selected.supervisor_id === 0 ? null : selected.supervisor_id,
                    selectedDepartment: selected.department_id === 0 ? null : selected.department_id,
                    dateHired: {
                      day: new Date(selected.date_hired).getDate(),
                      month: new Date(selected.date_hired).getMonth() + 1,
                      year: new Date(selected.date_hired).getFullYear()
                    },
                    regularizationDate: selected.date_regularized === "" ? null :  {
                      day: new Date(selected.date_regularized).getDate(),
                      month: new Date(selected.date_regularized).getMonth()  + 1,
                      year: new Date(selected.date_regularized).getFullYear()
                    },
                    selectedCostCenter: selected.cost_center_id === 0 ? null : selected.cost_center_id,
                    selectedCategory: selected.category_id === 0 ? null : selected.category_id,
                    selectedDivision: selected.division_id === 0 ? null : selected.division_id,
                    selectedPayrollType: selected.payroll_type_id === 0 ? null : selected.payroll_type_id,
                    monthlyRate: selected.monthly_rate,
                    semiMonthlyRate: selected.semi_monthly_rate,
                    factorRate: selected.factor_rate,
                    dailyRate: selected.daily_rate,
                    hourlyRate: selected.hourly_rate,
                    selectedBank: selected.bank_id === 0 ? null : selected.bank_id,
                    bankAccount: selected.bank_account,
                    selectedConfidential: selected.confidentiality_id === 0 ? null : selected.confidentiality_id,
                  });
                  this.display_name = selected.display_name
                  this.img_path = selected.image_path
                }
                else{
                  this.id = "0"
                  this.display_name = "Your Name"
                  this.img_path = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                }
                setTimeout(()=>{
                  this.isLoading = false;
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

  resetError(e){
    this.errSalutation = e;
    this.errDisplayName = e;
    this.errFirstName = e;
    this.errMiddleName = e;
    this.errLastName = e;
    this.errNickname = e;
    this.errGender = e;
    this.errNationality = e;
    this.errBirthday = e;
    this.errBirthplace = e;
    this.errCivilstatus = e;
    this.errReligion = e;
    this.errMobile = e;
    this.errEmail = e;
    this.errPresentAddress = e;
    this.errPermanentAddress = e;
    this.errBiometrics = e;
    this.errEmployeeCode = e;
    this.errBranch = e;
    this.errEmployeeStatus = e;
    this.errOccupation = e;
    this.errDepartment = e;
    this.errDateHired = e;
    this.errCategory = e;
    this.errPayrollType = e;
    this.errMonthlyRate = e;
    this.errSemiMonthlyRate = e;
    this.errFactorRate = e;
    this.errDailyRate = e;
    this.errHourlyRate = e;
    this.errBank = e;
    this.errBankAccount = e;
    this.errConfidential = e;
  }

  onChange(){
    setTimeout(()=>{
      debugger
      if(this.employeeForm.get('displayName').value === null || this.employeeForm.get('displayName').value === ""){
        this.display_name = 'Your Name'
      }
      else{
        this.display_name = this.employeeForm.get('displayName').value
      }
    }, 100);
  }

  onChangeName(){
    var display = "";
    var first = this.employeeForm.get('firstName').value === null || this.employeeForm.get('firstName').value === "" ? "" : this.employeeForm.get('firstName').value
    var middle = this.employeeForm.get('middleName').value === null || this.employeeForm.get('middleName').value === "" ? "" : this.employeeForm.get('middleName').value
    var last = this.employeeForm.get('lastName').value === null || this.employeeForm.get('lastName').value === "" ? "" : this.employeeForm.get('lastName').value
    if(first !== "" && middle !== "" && last !== ""){
      display = last[0].toUpperCase() + last.slice(1) + ", " + first[0].toUpperCase() + first.slice(1) + " " + middle.substring(0,1)[0].toUpperCase() + middle.substring(0,1).slice(1)  + "."
      this.display_name = display
      this.employeeForm.get('displayName').setValue(display)
    }
  }

  validation(){
    var flag = true
    this.resetError(false)
    let active = 1
    if(this.employeeForm.get('selectedSalutation').value === "" || this.employeeForm.get('selectedSalutation').value === null){
      flag = false;
      this.errSalutation = true;
    }
    if(this.employeeForm.get('displayName').value === "" || this.employeeForm.get('displayName').value === null){
      flag = false;
      this.errDisplayName = true;
    }
    if(this.employeeForm.get('firstName').value === "" || this.employeeForm.get('firstName').value === null){
      flag = false;
      this.errFirstName = true;
    }
    if(this.employeeForm.get('middleName').value === "" || this.employeeForm.get('middleName').value === null){
      flag = false;
      this.errMiddleName = true;
    }
    if(this.employeeForm.get('lastName').value === "" || this.employeeForm.get('lastName').value === null){
      flag = false;
      this.errLastName = true;
    }
    if(this.employeeForm.get('nickname').value === "" || this.employeeForm.get('nickname').value === null){
      flag = false;
      this.errNickname = true;
    }
    if(this.employeeForm.get('selectedGender').value === "" || this.employeeForm.get('selectedGender').value === null){
      flag = false;
      this.errGender = true;
    }
    if(this.employeeForm.get('selectedNationality').value === "" || this.employeeForm.get('selectedNationality').value === null){
      flag = false;
      this.errNationality = true;
    }
    if(this.employeeForm.get('selectedDate').value === "" || this.employeeForm.get('selectedDate').value === null){
      flag = false;
      this.errBirthday = true;
    }
    if(this.employeeForm.get('birthplace').value === "" || this.employeeForm.get('birthplace').value === null){
      flag = false;
      this.errBirthplace = true;
    }
    if(this.employeeForm.get('selectedCivilStatus').value === "" || this.employeeForm.get('selectedCivilStatus').value === null){
      flag = false;
      this.errCivilstatus = true;
    }
    if(this.employeeForm.get('selectedReligion').value === "" || this.employeeForm.get('selectedReligion').value === null){
      flag = false;
      this.errReligion = true;
    }
    if(this.employeeForm.get('mobile').value === "" || this.employeeForm.get('mobile').value === null){
      flag = false;
      this.errMobile = true;
    }
    if(this.employeeForm.get('companyemail').value === "" || this.employeeForm.get('companyemail').value === null){
      flag = false;
      this.errEmail = true;
    }
    if(this.employeeForm.get('presentaddress').value === "" || this.employeeForm.get('presentaddress').value === null){
      flag = false;
      this.errPresentAddress = true;
    }
    if(this.employeeForm.get('permamentaddress').value === "" || this.employeeForm.get('permamentaddress').value === null){
      flag = false;
      this.errPermanentAddress = true;
    }
    if(this.employeeForm.get('companyemail').value === "" || this.employeeForm.get('companyemail').value === null){
      flag = false;
      this.errEmail = true;
    }
    if(flag === true){
      active = 2
      if(this.employeeForm.get('biometricsID').value === "" || this.employeeForm.get('biometricsID').value === null){
        flag = false;
        this.errBiometrics = true;
      }
      if(this.employeeForm.get('employeeID').value === "" || this.employeeForm.get('employeeID').value === null){
        flag = false;
        this.errEmployeeCode = true;
      }
      if(this.employeeForm.get('selectedBranch').value === "" || this.employeeForm.get('selectedBranch').value === null){
        flag = false;
        this.errBranch = true;
      }
      if(this.employeeForm.get('selectedEmployeeStatus').value === "" || this.employeeForm.get('selectedEmployeeStatus').value === null){
        flag = false;
        this.errEmployeeStatus = true;
      }
      if(this.employeeForm.get('selectedOccupation').value === "" || this.employeeForm.get('selectedOccupation').value === null){
        flag = false;
        this.errOccupation = true;
      }
      if(this.employeeForm.get('selectedDepartment').value === "" || this.employeeForm.get('selectedDepartment').value === null){
        flag = false;
        this.errDepartment = true;
      }
      if(this.employeeForm.get('dateHired').value === "" || this.employeeForm.get('dateHired').value === null){
        flag = false;
        this.errDateHired = true;
      }
      if(this.employeeForm.get('selectedCategory').value === "" || this.employeeForm.get('selectedCategory').value === null){
        flag = false;
        this.errCategory = true;
      }
    }
    if(flag === true){
      active = 3
      if(this.employeeForm.get('selectedPayrollType').value === "" || this.employeeForm.get('selectedPayrollType').value === null){
        flag = false;
        this.errPayrollType = true;
      }
      if(this.employeeForm.get('monthlyRate').value === "" || this.employeeForm.get('monthlyRate').value === null){
        flag = false;
        this.errMonthlyRate = true;
      }
      if(this.employeeForm.get('semiMonthlyRate').value === "" || this.employeeForm.get('semiMonthlyRate').value === null){
        flag = false;
        this.errSemiMonthlyRate = true;
      }
      if(this.employeeForm.get('factorRate').value === "" || this.employeeForm.get('factorRate').value === null){
        flag = false;
        this.errFactorRate = true;
      }
      if(this.employeeForm.get('dailyRate').value === "" || this.employeeForm.get('dailyRate').value === null){
        flag = false;
        this.errDailyRate = true;
      }
      if(this.employeeForm.get('hourlyRate').value === "" || this.employeeForm.get('hourlyRate').value === null){
        flag = false;
        this.errHourlyRate = true;
      }
      if(this.employeeForm.get('selectedBank').value === "" || this.employeeForm.get('selectedBank').value === null){
        flag = false;
        this.errBank = true;
      }
      if(this.employeeForm.get('bankAccount').value === "" || this.employeeForm.get('bankAccount').value === null){
        flag = false;
        this.errBankAccount = true;
      }
      if(this.employeeForm.get('selectedConfidential').value === "" || this.employeeForm.get('selectedConfidential').value === null){
        flag = false;
        this.errConfidential = true;
      }
    }
    if(flag == false){
      this.defaultNavActiveId = active
    }
    return flag
  }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  submit(i){
    if(this.validation()){
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
                employee_id: 0,
                encrypt_employee_id: this.id,
                display_name: this.employeeForm.get('displayName').value,     
                employee_code: this.employeeForm.get('employeeID').value,       
                user_name: "",   
                user_hash: "",   
                image_path: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
                salutation_id: this.employeeForm.get('selectedSalutation').value,       
                first_name: this.employeeForm.get('firstName').value,  
                middle_name: this.employeeForm.get('middleName').value, 
                last_name: this.employeeForm.get('lastName').value,   
                suffix_id: this.employeeForm.get('selectedSuffix').value === null ? 0 : this.employeeForm.get('selectedSuffix').value,   
                nick_name: this.employeeForm.get('nickname').value,   
                gender_id: this.employeeForm.get('selectedGender').value,   
                nationality_id: this.employeeForm.get('selectedNationality').value,      
                birthday: this.pipe.transform(this.employeeForm.get('selectedDate').value.year + "/" + this.employeeForm.get('selectedDate').value.month + "/" + this.employeeForm.get('selectedDate').value.day + "", 'MM/dd/yyyy'),    
                birth_place: this.employeeForm.get('birthplace').value, 
                civil_status_id: this.employeeForm.get('selectedCivilStatus').value,     
                height: this.employeeForm.get('height').value,      
                weight: this.employeeForm.get('weight').value,      
                blood_type_id: this.employeeForm.get('selectedBloodType').value === null ? 0 : this.employeeForm.get('selectedBloodType').value,       
                religion_id: this.employeeForm.get('selectedReligion').value, 
                mobile: this.employeeForm.get('mobile').value,      
                phone: this.employeeForm.get('phone').value,       
                office: this.employeeForm.get('office').value,      
                email_address: this.employeeForm.get('companyemail').value,       
                personal_email_address: this.employeeForm.get('personalemail').value, 
                alternate_number: this.employeeForm.get('alternatenumber').value,    
                present_address: this.employeeForm.get('presentaddress').value,     
                permanent_address: this.employeeForm.get('permamentaddress').value,   
                created_by: sessionStorage.getItem('u'),
                active: true,
                series_code: sessionStorage.getItem('sc'),
                EIRequest: {
                  bio_id: this.employeeForm.get('biometricsID').value,   
                  branch_id: this.employeeForm.get('selectedBranch').value,   
                  employee_status_id: this.employeeForm.get('selectedEmployeeStatus').value,   
                  occupation_id: this.employeeForm.get('selectedOccupation').value,        
                  supervisor_id: this.employeeForm.get('selectedSupervisor').value === null ? "0" : this.employeeForm.get('selectedSupervisor').value,        
                  department_id: this.employeeForm.get('selectedDepartment').value,        
                  date_hired: this.pipe.transform(this.employeeForm.get('dateHired').value.year + "/" + this.employeeForm.get('dateHired').value.month + "/" + this.employeeForm.get('dateHired').value.day + "", 'MM/dd/yyyy'),     
                  date_regularized: this.employeeForm.get('regularizationDate').value === null || this.employeeForm.get('regularizationDate').value === "" ? "" : this.pipe.transform(this.employeeForm.get('regularizationDate').value.year + "/" + this.employeeForm.get('regularizationDate').value.month + "/" + this.employeeForm.get('regularizationDate').value.day + "", 'MM/dd/yyyy'),  
                  cost_center_id: this.employeeForm.get('selectedCostCenter').value === null ? 0 : this.employeeForm.get('selectedCostCenter').value,       
                  category_id: this.employeeForm.get('selectedCategory').value,          
                  division_id: this.employeeForm.get('selectedDivision').value === null ? 0 : this.employeeForm.get('selectedDivision').value,          
                  payroll_type_id: this.employeeForm.get('selectedPayrollType').value,      
                  monthly_rate: this.employeeForm.get('monthlyRate').value,         
                  semi_monthly_rate: this.employeeForm.get('semiMonthlyRate').value,    
                  factor_rate: this.employeeForm.get('factorRate').value,          
                  daily_rate: this.employeeForm.get('dailyRate').value,           
                  hourly_rate: this.employeeForm.get('hourlyRate').value,          
                  bank_id: this.employeeForm.get('selectedBank').value,     
                  bank_account: this.employeeForm.get('bankAccount').value,         
                  confidentiality_id: this.employeeForm.get('selectedConfidential').value === null ? 0 : this.employeeForm.get('selectedConfidential').value,   
                }
              }
              console.log(JSON.stringify(obj))
              this.userManagement.employeeIU(obj).subscribe(data => { 
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
}
