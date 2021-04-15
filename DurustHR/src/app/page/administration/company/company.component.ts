import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { JsonPipe } from '@angular/common';
import { TenantMasterService } from '../../../services/TenantMasterService/tenantMaster.service';
import { AccountManagementService } from '../../../services/AccountManagementService/accountManagement.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  isLoading: boolean = true;
  viewForm = [];
  companyForm: FormGroup
  companyCity = [];
  region = [];
  dropdown = [];
  country = [];
  errCompanyName = false;
  errCompanyCode = false;
  errZipCode = false;
  errMunicipality = false;
  errCity = false;
  errRegion = false;
  errCountry = false;

  url = "https://via.placeholder.com/200x150";
  constructor(private fb: FormBuilder, private accountManagementService: AccountManagementService,  private tenantMasterService: TenantMasterService) { }

  ngOnInit() {
    this.companyForm = this.fb.group({
      companyID: [0],
      companyName: [''],
      companyCode: [''],
      selectedCompanyCountry: [null],
      img: [null],
      zipCode: [''],
      unit: [''],
      building: [''],
      street: [''],
      barangay: [''],
      municipality: [''],
      selectedCity: [null],
      selectedRegion: [null],
      createdBy: sessionStorage.getItem('u'),
    });
    this.tenantMasterService.dropdownList(0).subscribe(data => { 
     
      this.country = data.filter(x => x.type_id === 3)
      this.region = data.filter(x => x.type_id === 10)

      this.tenantMasterService.dropdownEntitlement().subscribe(data => { 
        this.dropdown = data
       
        this.accountManagementService.companyView().subscribe(data => { 
          this.viewForm = data[0]
          this.companyCity = [];
          this.companyCity = this.dropdown.filter(x => x.id === this.viewForm['selectedRegion'])
          this.companyForm.setValue({
            companyID: this.viewForm['companyID'],
            companyName: this.viewForm['companyName'],
            companyCode: this.viewForm['companyCode'],
            selectedCompanyCountry: this.viewForm['selectedCompanyCountry'],
            img: this.viewForm['img'],
            zipCode: this.viewForm['zipCode'],
            unit: this.viewForm['unit'],
            building: this.viewForm['building'],
            street: this.viewForm['street'],
            barangay: this.viewForm['barangay'],
            municipality: this.viewForm['municipality'],
            selectedCity: this.viewForm['selectedCity'],
            selectedRegion: this.viewForm['selectedRegion'],
            createdBy: sessionStorage.getItem('u'),
          });
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
    },
    (error:HttpErrorResponse) => {
      console.log(error.error);
      this.isLoading = false;
    });
  }

  selectRegion(){
    this.companyForm.get('selectedCity').reset();
    this.companyCity = [];
    this.companyCity = this.dropdown.filter(x => x.id === this.companyForm.get('selectedRegion').value)
  }

  openFileBrowser(event: any) {
    event.preventDefault();
    let element: HTMLElement = document.querySelector("#fileUploadInputExample") as HTMLElement;
    element.click();
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.companyForm.patchValue({
        img: event.target.files[0].name
      });
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        this.url = event.target.result as string;
      }
    }
  }

  handleFileInput(event: any) {
    if (event.target.files.length) {
      let element: HTMLElement = document.querySelector("#fileUploadInputExample + .input-group .file-upload-info") as HTMLElement;
      let fileName = event.target.files[0].name;
      element.setAttribute( 'value', fileName)
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        this.companyForm.patchValue({
          img: event.target.files[0].name
        });
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => { 
          this.url = event.target.result  as string;
        }
      }
    }
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
              this.accountManagementService.tenantUpdate(this.companyForm.value).subscribe(data => { 
                if(data.companyID === "0"){
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
