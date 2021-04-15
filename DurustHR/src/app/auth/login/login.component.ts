import { RegisterService } from './../../services/auth/register/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/auth/login/login.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { TenantMasterService } from '../../services/TenantMasterService/tenantMaster.service';
import { PermissionManagementService } from '../../services/PermissionManagementService/permissionManagement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  disSubmit: boolean = false;
  submitText: string = "Login";
  error = "";
  httperror = "";
  id: string
  loader = true;
  httpvalidate = false;
  
  constructor(private fb: FormBuilder, private permissionManagement:  PermissionManagementService, private tenantMasterService: TenantMasterService, private register: RegisterService, private service: LoginService, private router: Router, private route: ActivatedRoute) {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'company_code': ['', Validators.required]
    })
   }

  ngOnInit() {
    sessionStorage.clear();
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != null){
      let obj = {
        id: this.route.snapshot.paramMap.get('id')
      }
      this.register.verifyUser(obj).subscribe(data => { 
        Swal.fire("Email Verify!", "Email verified. You can now login!", "success");
      })
    }
    this.loader = false;
  }

  login() {
    this.disSubmit = true;
    this.submitText = "Loading ...";
    this.httperror = "";
    console.log(JSON.stringify(this.loginForm.value))
    this.service.authenticateUser(this.loginForm.value).subscribe(logData => { 
      if(logData['id'] === "0"){
        this.httpvalidate = true;
        this.httperror = logData['type'];
        this.disSubmit = false;
        this.submitText = "Login";
      }
      else{
        this.service.saveToken(logData);
        let menuList = [];
        if(logData['routing'] !== '/company-setup')
        {
          this.permissionManagement.accessList().subscribe(accessList => { 
            this.tenantMasterService.menuList().subscribe(data => { 
              let  filtered = accessList.filter(x => x.module_type !== "First-Level");
              for (var i = 0; i < filtered.length; i++) {
                let selected = data.filter(x => x.module_id == filtered[i].module_id + "")[0]
                if(filtered[i].module_type === "Parent"){
                  menuList.push({
                    label: selected.module_name,
                    isTitle: true,
                  })
                }
                if(filtered[i].module_type === "Sub-Parent"){
                  let subList = [];
                  let subSelected = accessList.filter(x => x.parent_module_id == filtered[i].module_id)
                  for (var y = 0; y < subSelected.length; y++) {
                    let child = data.filter(x => x.module_id == subSelected[y].module_id + "")[0]
                    subList.push({
                      label: child.module_name,
                      link: child.link
                    })
                  }
                  if(subSelected.length > 0){
                    menuList.push({
                      label: selected.module_name,
                      icon: selected.classes,
                      
                      subItems: subList,
                    })
                  }
                  else{
                    menuList.push({
                      icon: selected.classes,
                      label: selected.module_name,
                      link: selected.link,
                    })
                  }
                
                }
              };
              localStorage.removeItem('Array');
              sessionStorage.setItem('mn', JSON.stringify(menuList))
              this.router.navigate([logData['routing']]);
              this.disSubmit = false;
              this.submitText = "Login";
            });
          });
        }
        else{
          this.router.navigate([logData['routing']]);
          this.disSubmit = false;
          this.submitText = "Login";
        }
      }
    },
    (error:HttpErrorResponse) => {
      console.log(error.error);
      //-- for future error handling --//
      // if (error.error instanceof ErrorEvent) {
      //   // A client-side or network error occurred. Handle it accordingly.
      //   console.error('An error occurred:', error.error.message);
      // } else {
      //   // The backend returned an unsuccessful response code.
      //   // The response body may contain clues as to what went wrong.
      //   console.error(
      //     `Backend returned code ${error.status}, ` +
      //     `body was: ${error.error}`);
      // }
      this.httperror = "Can't connect on our system.."
      this.disSubmit = false;
      this.submitText = "Login";
    })
  }

  get validate() {
    let ret = false;
    if(this.loginForm.get('username')?.errors && this.loginForm.get('username')?.touched && this.loginForm.get('password')?.errors && this.loginForm.get('password')?.touched){
      ret= true;
      this.error = "Username and Password is required!";
    }
    else if(this.loginForm.get('username')?.errors && this.loginForm.get('username')?.touched){
      ret= true;
      this.error = "Username is required!";
    }
    else if(this.loginForm.get('password')?.errors && this.loginForm.get('password')?.touched){
      ret= true;
      this.error = "Password is required!";
    }
    else{
      this.error = "";
    }
    if(ret === true){
      this.httpvalidate = false;
      this.httperror = "";
    }
    else{
      if(this.httperror === ""){
        this.httpvalidate = false;
      }
      else{
        this.httpvalidate = true;
      }
    }
    return ret;
  }
}
