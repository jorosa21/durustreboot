(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "/UJc":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/company_setup/company_setup.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner-wrapper full-screen\" *ngIf=\"loader\">\n  <div class=\"spinner\"></div>\n</div>\n<div class=\"row w-100 mx-0 auth-page\">\n  <div class=\"col-md-12 col-xl-10 mx-auto\">\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-12 pl-md-0\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h6 class=\"card-title\">{{Title}}</h6>\n          \n                  <aw-wizard #wizardForm>\n                    <aw-wizard-step stepTitle=\"step 1\">\n                      <form [formGroup]=\"companyForm\">\n                        <div class=\"row\">\n                          <div class=\"col-lg-12\">\n                            <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                  <label for=\"exampleInputUsername1\">Company Name</label>\n                                  <input type=\"text\" class=\"form-control\" formControlName=\"companyName\" autocomplete=\"off\" placeholder=\"Company Name\">\n                                  <p class=\"text-danger mt-1\" *ngIf=\"errCompanyName\">Company Name is needed!</p>\n                                </div>\n                                <div class=\"form-group\">\n                                  <label>File upload</label>\n                                  <input (change)=\"handleFileInput($event)\" accept=\".png, .jpg, .jpeg\" type=\"file\" name=\"img[]\" class=\"file-upload-default\" id=\"fileUploadInputExample\">\n                                  <div class=\"input-group col-xs-12\" (click)=\"openFileBrowser($event)\">\n                                    <input type=\"text\" class=\"form-control file-upload-info\" disabled=\"\" placeholder=\"Upload Image\">\n                                    <span class=\"input-group-append\">\n                                      <button class=\"file-upload-browse btn btn-primary\" type=\"button\">Upload</button>\n                                    </span>\n                                  </div>\n                                </div>\n                                <div class=\"form-group\">\n                                  <label for=\"exampleInputUsername1\">Company Code</label>\n                                  <input type=\"text\" class=\"form-control\" formControlName=\"companyCode\" autocomplete=\"off\" placeholder=\"Company Code\">\n                                  <p class=\"text-danger mt-1\" *ngIf=\"errCompanyCode\">Company Code is needed!</p>\n                                </div>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <div class=\"media d-block d-sm-flex\">\n                                  <img [src]=\"url\" height=\"150\" width=\"width\" src=\"https://via.placeholder.com/200x150\" alt=\"...\">\n                                </div>\n                              </div>\n                            </div>\n                            <hr>\n                            <div class=\"card-title\">\n                              <h6>Address</h6>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col-sm-2\">\n                                <div class=\"form-group\">\n                                  <label class=\"control-label\">Zip Code</label>\n                                  <input type=\"text\" formControlName=\"zipCode\" class=\"form-control\" placeholder=\"Zip Code\">\n                                  <p class=\"text-danger mt-1\" *ngIf=\"errZipCode\">Zip Code is needed!</p>\n                                </div>\n                              </div><!-- Col -->\n                              <div class=\"col-sm-1\">\n                                <div class=\"form-group\">\n                                  <label class=\"control-label\">Unit/Flr #</label>\n                                  <input type=\"text\" formControlName=\"unit\" class=\"form-control\" placeholder=\"Unit/Flr #\">\n                                </div>\n                              </div><!-- Col -->\n                              <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"control-label\">Building</label>\n                                  <input type=\"text\" formControlName=\"building\" class=\"form-control\" placeholder=\"Unit/Flr #\">\n                                </div>\n                              </div><!-- Col -->\n                              <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"control-label\">Street</label>\n                                  <input type=\"text\" formControlName=\"street\" class=\"form-control\" placeholder=\"Enter zip code\">\n                                </div>\n                              </div><!-- Col -->\n                              <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"control-label\">Barangay</label>\n                                  <input type=\"text\" formControlName=\"barangay\" class=\"form-control\" placeholder=\"Barangay\">\n                                </div>\n                              </div><!-- Col -->\n                            </div><!-- Row -->\n                            <div class=\"row\">\n                              <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"control-label\">Municipality</label>\n                                  <input type=\"text\" formControlName=\"municipality\" class=\"form-control\" placeholder=\"Municipality\">\n                                  <p class=\"text-danger mt-1\" *ngIf=\"errMunicipality\">Municipality is needed!</p>\n                                </div>\n                              </div><!-- Col -->\n                              <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"control-label\">Region</label>\n                                  <ng-select \n                                  [items]=\"region\"\n                                  name=\"Country\"\n                                  bindLabel=\"description\" \n                                  bindValue=\"id\" \n                                  placeholder=\"Select Country\"\n                                  formControlName=\"selectedRegion\"\n                                  (change)=\"selectRegion()\">\n                                </ng-select>\n                                  <p class=\"text-danger mt-1\" *ngIf=\"errRegion\">Region is needed!</p>\n                                </div>\n                              </div><!-- Col -->\n                              <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"control-label\">City</label>\n                                  <ng-select \n                                  [items]=\"companyCity\"\n                                  name=\"Country\"\n                                  bindLabel=\"to_description\" \n                                  bindValue=\"to_id\" \n                                  placeholder=\"Select Country\"\n                                  formControlName=\"selectedCity\">\n                                </ng-select>\n                                  <p class=\"text-danger mt-1\" *ngIf=\"errCity\">City is needed!</p>\n                                </div>\n                              </div><!-- Col -->\n                              <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"control-label\">Country</label>\n                                  <ng-select \n                                  [items]=\"country\"\n                                  name=\"Country\"\n                                  bindLabel=\"description\" \n                                  bindValue=\"id\" \n                                  placeholder=\"Select Country\"\n                                  formControlName=\"selectedCompanyCountry\">\n                                </ng-select>\n                                  <p class=\"text-danger mt-1\" *ngIf=\"errCountry\">Country is needed!</p>\n                                </div>\n                              </div><!-- Col -->\n                            </div><!-- Row -->\n                        </div>\n                      </div>  \n                      <div class=\"d-flex justify-content-center mt-2\">\n                        <button type=\"button\" class=\"btn btn-secondary mr-2\" (click)=\"reLogin()\">Re-Login</button>\n                        <button class=\"btn btn-primary\" type=\"button\" (click)=\"nextStep(1)\">Continue</button>\n                      </div>\n                    </form>\n                    </aw-wizard-step>\n                    \n                    <aw-wizard-step stepTitle=\"step 2\">\n                      <ng-template #xlModal let-modal>\n                        <div class=\"modal-header\">\n                          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Branch Details</h5>\n                          <button type=\"button\" class=\"close\" #closeModal (click)=\"modal.close('by: close icon')\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n                        </div>\n                        <div class=\"modal-body\">\n                          <form [formGroup]=\"branchForm\">\n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <h6 class=\"card-title\">Branch Information</h6>\n                                  <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                      <div class=\"form-group\">\n                                        <label class=\"control-label\">Branch Name</label>\n                                        <input type=\"text\" formControlName=\"branchName\" class=\"form-control\" placeholder=\"Branch Name\">\n                                        <p class=\"text-danger mt-1\" *ngIf=\"errbranchName\">Branch Name is needed!</p>\n                                      </div>\n                                    </div><!-- Col -->\n                                    <div class=\"col-sm-6\">\n                                      <div class=\"form-group\">\n                                        <label class=\"control-label\">Industry</label>\n                                        <ng-select \n                                        [items]=\"industry\"\n                                        name=\"Industry\"\n                                        bindLabel=\"description\" \n                                        bindValue=\"id\" \n                                        placeholder=\"Select Industry\"\n                                        formControlName=\"selectedIndustry\">\n                                      </ng-select>\n                                      <p class=\"text-danger mt-1\" *ngIf=\"errselectedIndustry\">Industry is needed!</p>\n                                      </div>\n                                    </div><!-- Col -->\n                                  </div><!-- Row -->\n                                  <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                      <div class=\"form-group\">\n                                        <label class=\"control-label\">Bank</label>\n                                        <ng-select \n                                        [items]=\"bank\"\n                                        name=\"Bank\"\n                                        bindLabel=\"description\" \n                                        bindValue=\"id\" \n                                        placeholder=\"Select Bank\"\n                                        formControlName=\"selectedBank\">\n                                      </ng-select>\n                                      <p class=\"text-danger mt-1\" *ngIf=\"errselectedBank\">Bank is needed!</p>\n                                      </div>\n                                    </div><!-- Col -->\n                                    <div class=\"col-sm-6\">\n                                      <div class=\"form-group\">\n                                        <label class=\"control-label\">Bank Account</label>\n                                        <input type=\"text\" formControlName=\"bankAccount\" class=\"form-control\" placeholder=\"Bank Account\">\n                                        <p class=\"text-danger mt-1\" *ngIf=\"errbankAccount\">Bank is needed!</p>\n                                      </div>\n                                    </div><!-- Col -->\n                                  </div><!-- Row -->\n                            </div>\n                          </div>\n                          <hr>\n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <div class=\"card-title\">Branch Address</div>\n                              <div class=\"row\">\n                                <div class=\"col-sm-2\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Zip Code</label>\n                                    <input type=\"text\" formControlName=\"zipCode\" class=\"form-control\" placeholder=\"Zip Code\">\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errBranchZipCode\">Zip Code is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-1\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Unit/Flr #</label>\n                                    <input type=\"text\" formControlName=\"unit\" class=\"form-control\" placeholder=\"Unit/Flr #\">\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-3\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Building</label>\n                                    <input type=\"text\" formControlName=\"building\" class=\"form-control\" placeholder=\"Unit/Flr #\">\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-3\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Street</label>\n                                    <input type=\"text\" formControlName=\"street\" class=\"form-control\" placeholder=\"Enter zip code\">\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-3\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Barangay</label>\n                                    <input type=\"text\" formControlName=\"barangay\" class=\"form-control\" placeholder=\"Barangay\">\n                                  </div>\n                                </div><!-- Col -->\n                              </div><!-- Row -->\n                              <div class=\"row\">\n                                <div class=\"col-sm-3\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Municipality</label>\n                                    <input type=\"text\" formControlName=\"municipality\" class=\"form-control\" placeholder=\"Municipality\">\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errBranchMunicipality\">Municipality is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-3\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Region</label>\n                                    <ng-select \n                                    [items]=\"region\"\n                                    name=\"Country\"\n                                    bindLabel=\"description\" \n                                    bindValue=\"id\" \n                                    placeholder=\"Select Country\"\n                                    formControlName=\"selectedRegion\"\n                                    (change)=\"selectBranchRegion()\">\n                                  </ng-select>\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errBranchRegion\">Region is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-3\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">City</label>\n                                    <ng-select \n                                    [items]=\"branchCity\"\n                                    name=\"Country\"\n                                    bindLabel=\"to_description\" \n                                    bindValue=\"to_id\" \n                                    placeholder=\"Select Country\"\n                                    formControlName=\"selectedCity\">\n                                  </ng-select>\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errBranchCity\">City is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-3\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Country</label>\n                                    <ng-select \n                                    [items]=\"country\"\n                                    name=\"Country\"\n                                    bindLabel=\"description\" \n                                    bindValue=\"id\" \n                                    placeholder=\"Select Country\"\n                                    formControlName=\"selectedBranchCountry\">\n                                  </ng-select>\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errBranchCountry\">Country is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                              </div><!-- Row -->\n                            </div>\n                          </div>\n                          <hr>\n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <div class=\"card-title\">Government Information</div>\n                              <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">SSS</label>\n                                    <input class=\"form-control mb-4 mb-md-0\" formControlName=\"sss\" mask=\"00-0000000-0\" [showMaskTyped]=\"true\" />\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errSSS\">SSS is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-6\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Philhealth</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"philhealth\" mask=\"00-000000000-0\" [showMaskTyped]=\"true\" placeholder=\"Philhealth\">\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errPhilhealth\">Philhealth is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                              </div><!-- Row -->\n                              <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">TIN</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"tin\" mask=\"000-000-000-000\" [showMaskTyped]=\"true\" placeholder=\"TIN\" placeholder=\"TIN\">\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errTIN\">TIN is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-6\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Pagibig</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"pagibig\" mask=\"0000-0000-0000\" [showMaskTyped]=\"true\" placeholder=\"Pagibig\">\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errPagibig\">Pagibig is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-sm-2\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">RDO</label>\n                                    <ng-select \n                                    [items]=\"rdoOffice\"\n                                    name=\"RDO Office\"\n                                    bindLabel=\"description\" \n                                    bindValue=\"id\" \n                                    placeholder=\"Select RDO Office\"\n                                    formControlName=\"selectedRdoOffice\"\n                                    (change)=\"selectRdoOffice()\">\n                                    </ng-select>\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errRDO\">RDO is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-4\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">&nbsp;</label>\n                                    <ng-select \n                                    [items]=\"rdoBranch\"\n                                    name=\"RDO Branch\"\n                                    bindLabel=\"description\" \n                                    bindValue=\"id\" \n                                    placeholder=\"Select RDO Branch\"\n                                    formControlName=\"selectedRdoBranch\"\n                                    (change)=\"selectRdoBranch()\">\n                                    </ng-select>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-2\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Branch</label>\n                                    <ng-select \n                                    [items]=\"pRegion\"\n                                    name=\"Branch\"\n                                    bindLabel=\"description\" \n                                    bindValue=\"id\" \n                                    placeholder=\"Select Branch\"\n                                    formControlName=\"selectedPRegion\"\n                                    (change)=\"selectPBranch()\">\n                                    </ng-select>\n                                    <p class=\"text-danger mt-1\" *ngIf=\"errBranch\">Branch is needed!</p>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-2\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">&nbsp;</label>\n                                    <ng-select \n                                    [items]=\"pCity\"\n                                    name=\"Branch\"\n                                    bindLabel=\"to_description\" \n                                    bindValue=\"to_id\" \n                                    placeholder=\"Select City\"\n                                    formControlName=\"selectedPCity\"\n                                    (change)=\"selectPCity()\">\n                                    </ng-select>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-2\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">&nbsp;</label>\n                                    <input type=\"text\" formControlName=\"selectedPCode\" class=\"form-control\" placeholder=\"Code\">\n                                  </div>\n                                </div><!-- Col -->\n                              </div><!-- Row -->\n                            </div>\n                          </div>\n                          <hr>\n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <div class=\"card-title\">Contact Information</div>\n                              <div class=\"row\">\n                                <div class=\"col-sm-2\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Phone</label>\n                                    <ng-select \n                                    [items]=\"phone\"\n                                    name=\"Bank\"\n                                    bindLabel=\"description\" \n                                    bindValue=\"id\" \n                                    placeholder=\"Select Type\"\n                                    formControlName=\"selectedPhone\">\n                                  </ng-select>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-4\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Number</label>\n                                    <div class=\"row\">\n                                      <div class=\"col-md-10\">\n                                        <input type=\"text\" formControlName=\"phoneNumber\" class=\"form-control\" placeholder=\"Number\">\n                                      </div>\n                                      <div class=\"col-md-2\">\n                                        <button type=\"button\" (click)=\"addPhone($event)\" title=\"Add\" class=\"btn btn-sm btn-primary btn-icon\">\n                                          <i class=\"feather icon-plus\"></i>\n                                        </button>\n                                      </div>\n                                    </div>\n                                    \n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-2\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Email</label>\n                                    <ng-select \n                                    [items]=\"email\"\n                                    name=\"Bank\"\n                                    bindLabel=\"description\" \n                                    bindValue=\"id\" \n                                    placeholder=\"Select Type\"\n                                    formControlName=\"selectedEmail\">\n                                  </ng-select>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-sm-4\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">Address</label>\n                                    <div class=\"row\">\n                                      <div class=\"col-md-10\">\n                                        <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" placeholder=\"@illimitado.com\">\n                                      </div>\n                                      <div class=\"col-md-2\">\n                                        <button type=\"button\" (click)=\"addEmail($event)\" title=\"Add\" class=\"btn btn-sm btn-primary btn-icon\">\n                                          <i class=\"feather icon-plus\"></i>\n                                        </button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div><!-- Col -->\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <div class=\"table-responsive\">\n                                    <table class=\"table\">\n                                      <thead>\n                                        <tr>\n                                          <th>Type</th>\n                                          <th>Number</th>\n                                          <th></th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                          <tr *ngFor=\"let x of phoneList; let i = index\">\n                                            <td>{{x.description}}</td>\n                                            <td>{{x.number}}</td>\n                                            <td> \n                                              <button type=\"button\" (click)=\"removePhone(i)\" title=\"Remove\" class=\"btn btn-sm btn-danger btn-icon\">\n                                                <i class=\"feather icon-trash\"></i>\n                                              </button> \n                                          </td>\n                                          </tr>\n                                      </tbody>\n                                    </table>\n                                  </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                  <div class=\"table-responsive\">\n                                    <table class=\"table\">\n                                      <thead>\n                                        <tr>\n                                          <th>Type</th>\n                                          <th>Address</th>\n                                          <th></th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                          <tr *ngFor=\"let x of emailList; let i = index\">\n                                            <td>{{x.description}}</td>\n                                            <td>{{x.email_address}}</td>\n                                            <td> <button type=\"button\" (click)=\"removeEmail(i)\" title=\"Remove\" class=\"btn btn-sm btn-danger btn-icon\">\n                                              <i class=\"feather icon-trash\"></i>\n                                            </button> </td>\n                                          </tr>\n                                      </tbody>\n                                    </table>\n                                  </div>\n                                </div>\n                              </div>\n                              <hr>\n                              <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label class=\"control-label\">IP Address</label>\n                                    <div class=\"row\">\n                                      <div class=\"col-md-10\">\n                                        <input type=\"text\" formControlName=\"ipAddress\" class=\"form-control\">\n                                      </div>\n                                      <div class=\"col-md-2\">\n                                        <button type=\"button\" (click)=\"addIP($event)\" title=\"Add\" class=\"btn btn-sm btn-primary btn-icon\">\n                                          <i class=\"feather icon-plus\"></i>\n                                        </button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div><!-- Col -->\n                                <div class=\"col-md-3\">\n                                  <div class=\"table-responsive\">\n                                    <table class=\"table\">\n                                      <thead>\n                                        <tr>\n                                          <th>IP</th>\n                                          <th></th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                          <tr *ngFor=\"let x of ipList; let i = index\">\n                                            <td>{{x.description}}</td>\n                                            <td> <button type=\"button\" (click)=\"removeIP(i)\" title=\"Remove\" class=\"btn btn-sm btn-danger btn-icon\">\n                                              <i class=\"feather icon-trash\"></i>\n                                            </button> </td>\n                                          </tr>\n                                      </tbody>\n                                    </table>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          </form>\n                        </div>\n                        <div class=\"modal-footer\">\n                          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close('by: close button')\">Close</button>\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addBranch()\">Save changes</button>\n                        </div>\n                      </ng-template>\n                      <div class=\"table-responsive pt-3\">\n                        <table class=\"table table-bordered\">\n                          <thead>\n                            <tr style=\"width: 5%;\">\n                              <th>\n                                <button type=\"button\" title=\"Add\" (click)=\"openXlModal(xlModal)\" class=\"btn btn-sm btn-primary btn-icon\">\n                                  <i class=\"feather icon-plus\"></i>\n                                </button>\n                              </th>\n                              <th style=\"width: 45%;\">Branch Name</th>\n                              <th style=\"width: 45%;\">Industry</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let x of branchList; let i = index\">\n                              <td>\n                                <button type=\"button\" (click)=\"removeBranch(i)\" title=\"Remove\" class=\"btn btn-sm btn-danger btn-icon\">\n                                  <i class=\"feather icon-trash\"></i>\n                                </button> \n                              </td>\n                              <td>{{x.branchName}}</td>\n                              <td>{{x.industry}}</td>\n                          </tr>\n                          </tbody>\n                        </table>\n                        <p class=\"text-danger mt-1\" *ngIf=\"errBranchList\">Please add atleast one branch!</p>\n                      </div>\n                      <div class=\"d-flex justify-content-center mt-2\">\n                        <button class=\"btn btn-light mr-2\" type=\"button\" (click)=\"prevStep()\">Back</button>\n                        <!-- <button class=\"btn btn-primary\" type=\"button\" (click)=\"nextStep(3)\">Continue</button> -->\n                        <button class=\"btn btn-primary btn-icon-text\" (click)=\"submit($event)\">\n                          <i data-feather=\"save\" class=\"btn-icon-prepend\"></i>  {{submitText}}\n                        </button>\n                        <button hidden [swal]=\"{title: '<strong>HTML <u>example</u></strong>', icon: 'info',\n                          html: '(You can use <b>bold text</b>, <a href=\\'http:\\/\\/github.com\\'>links</a> and other HTML tags)',\n                          showCloseButton: true,\n                          showCancelButton: true,\n                          focusConfirm: false,\n                          confirmButtonText:'<i class=\\'feather icon-thumbs-up\\'></i> Great!',\n                          confirmButtonAriaLabel: 'Thumbs up, great!',\n                          cancelButtonText: '<i class=\\'feather icon-thumbs-down\\'></i>',\n                          cancelButtonAriaLabel: 'Thumbs down'\n                        }\" class=\"btn btn-primary\">\n                          {{submitText}}\n                        </button>\n                      </div>\n                    </aw-wizard-step>\n          \n                    <aw-wizard-step stepTitle=\"finish\">\n                      <div class=\"text-center\">\n                        <i data-feather=\"check-circle\" appFeatherIcon class=\"text-success mt-4 mb-2 icon-xxl\"></i>\n                        <h3 class=\"text-muted mb-3\">Thank you !</h3>\n                        <p class=\"w-75 mx-auto mb-4 text-muted\">We are excited to tell you that you are now part of a powerful HCM system. Please login to proceed to our system.</p>\n                      </div>\n                      <div class=\"d-flex justify-content-center mt-2\">\n                        <button class=\"btn btn-light mr-2\" type=\"button\" (click)=\"prevStep()\">Back</button>\n                        <button class=\"btn btn-primary\" type=\"button\" (click)=\"finishFunction()\">Login</button>\n                      </div>\n                    </aw-wizard-step>\n                  </aw-wizard>\n          \n                </div>\n              </div>\n            </div> \n          \n          </div> \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "H8dG":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9Il19 */");

/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.component.html */ "dlo3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent.ctorParameters = () => [];
AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], AuthComponent);



/***/ }),

/***/ "XgRU":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9Il19 */");

/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_auth_register_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth/register/register.service */ "UIK3");
/* harmony import */ var _services_security_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/security/auth-guard.service */ "PSXT");
/* harmony import */ var _company_setup_company_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company_setup/company_setup.component */ "cGod");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "ZGml");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.component */ "LS6v");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-archwizard */ "mkVx");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");















const routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"],
        children: [
            {
                path: '',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            },
            {
                path: 'login',
                redirectTo: '',
            },
            {
                path: 'login/:id',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
            },
            {
                path: 'company-setup',
                component: _company_setup_company_setup_component__WEBPACK_IMPORTED_MODULE_3__["Company_setupComponent"],
                canActivate: [_services_security_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
            }
        ]
    },
];
let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"], _company_setup_company_setup_component__WEBPACK_IMPORTED_MODULE_3__["Company_setupComponent"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            angular_archwizard__WEBPACK_IMPORTED_MODULE_11__["ArchwizardModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"].forRoot({ validation: true }),
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__["SweetAlert2Module"].forRoot(),
        ],
        providers: [
            _services_auth_register_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
        ]
    })
], AuthModule);



/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "hnEC");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss */ "XgRU");
/* harmony import */ var _services_auth_register_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth/register/register.service */ "UIK3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let RegisterComponent = class RegisterComponent {
    constructor(fb, service, router) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.error = "";
        this.loader = true;
        this.disSubmit = false;
        this.submitText = "Sign Up";
        this.registerForm = this.fb.group({
            'Username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'email_address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'Password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        this.loader = false;
    }
    register() {
        this.disSubmit = true;
        this.submitText = "Loading ...";
        this.service.registerUser(this.registerForm.value).subscribe(data => {
            this.router.navigate(['/login']);
            this.disSubmit = false;
            this.submitText = "Sign Up";
        });
    }
    get validate() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        let ret = false;
        if (((_a = this.registerForm.get('Username')) === null || _a === void 0 ? void 0 : _a.errors) && ((_b = this.registerForm.get('Username')) === null || _b === void 0 ? void 0 : _b.touched) && ((_c = this.registerForm.get('email_address')) === null || _c === void 0 ? void 0 : _c.errors) && ((_d = this.registerForm.get('email_address')) === null || _d === void 0 ? void 0 : _d.touched)
            && ((_e = this.registerForm.get('Password')) === null || _e === void 0 ? void 0 : _e.errors) && ((_f = this.registerForm.get('Password')) === null || _f === void 0 ? void 0 : _f.touched)) {
            ret = true;
            this.error = "Username, Password and Email Address is required!";
        }
        else if (((_g = this.registerForm.get('Username')) === null || _g === void 0 ? void 0 : _g.errors) && ((_h = this.registerForm.get('Username')) === null || _h === void 0 ? void 0 : _h.touched)) {
            ret = true;
            this.error = "Username is required!";
        }
        else if (((_j = this.registerForm.get('email_address')) === null || _j === void 0 ? void 0 : _j.errors) && ((_k = this.registerForm.get('email_address')) === null || _k === void 0 ? void 0 : _k.touched)) {
            ret = true;
            this.error = "Email Address is required!";
        }
        else if (((_l = this.registerForm.get('Password')) === null || _l === void 0 ? void 0 : _l.errors) && ((_m = this.registerForm.get('Password')) === null || _m === void 0 ? void 0 : _m.touched)) {
            ret = true;
            this.error = "Password is required!";
        }
        else {
            this.error = "";
        }
        return ret;
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_auth_register_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "zu2e");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "H8dG");
/* harmony import */ var _services_auth_register_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth/register/register.service */ "UIK3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth/login/login.service */ "u0Dx");








let LoginComponent = class LoginComponent {
    constructor(fb, register, service, router, route) {
        this.fb = fb;
        this.register = register;
        this.service = service;
        this.router = router;
        this.route = route;
        this.disSubmit = false;
        this.submitText = "Login";
        this.error = "";
        this.httperror = "";
        this.loader = true;
        this.httpvalidate = false;
        this.loginForm = this.fb.group({
            'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'company_code': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        sessionStorage.clear();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            let obj = {
                guid: this.route.snapshot.paramMap.get('id')
            };
            this.register.verifyUser(obj).subscribe(data => {
            });
        }
        this.loader = false;
    }
    login() {
        this.disSubmit = true;
        this.submitText = "Loading ...";
        this.httperror = "";
        this.service.authenticateUser(this.loginForm.value).subscribe(data => {
            if (data['id'] === "0") {
                this.httpvalidate = true;
                this.httperror = data['type'];
                this.disSubmit = false;
                this.submitText = "Login";
            }
            else {
                this.service.saveToken(data);
                this.router.navigate([data['routing']]);
                this.disSubmit = false;
                this.submitText = "Login";
            }
        });
    }
    get validate() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let ret = false;
        if (((_a = this.loginForm.get('username')) === null || _a === void 0 ? void 0 : _a.errors) && ((_b = this.loginForm.get('username')) === null || _b === void 0 ? void 0 : _b.touched) && ((_c = this.loginForm.get('password')) === null || _c === void 0 ? void 0 : _c.errors) && ((_d = this.loginForm.get('password')) === null || _d === void 0 ? void 0 : _d.touched)) {
            ret = true;
            this.error = "Username and Password is required!";
        }
        else if (((_e = this.loginForm.get('username')) === null || _e === void 0 ? void 0 : _e.errors) && ((_f = this.loginForm.get('username')) === null || _f === void 0 ? void 0 : _f.touched)) {
            ret = true;
            this.error = "Username is required!";
        }
        else if (((_g = this.loginForm.get('password')) === null || _g === void 0 ? void 0 : _g.errors) && ((_h = this.loginForm.get('password')) === null || _h === void 0 ? void 0 : _h.touched)) {
            ret = true;
            this.error = "Password is required!";
        }
        else {
            this.error = "";
        }
        if (ret === true) {
            this.httpvalidate = false;
            this.httperror = "";
        }
        else {
            if (this.httperror === "") {
                this.httpvalidate = false;
            }
            else {
                this.httpvalidate = true;
            }
        }
        return ret;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_auth_register_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
    { type: _services_auth_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "cGod":
/*!***************************************************************!*\
  !*** ./src/app/auth/company_setup/company_setup.component.ts ***!
  \***************************************************************/
/*! exports provided: Company_setupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company_setupComponent", function() { return Company_setupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_company_setup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./company_setup.component.html */ "/UJc");
/* harmony import */ var _company_setup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company_setup.component.scss */ "tQBG");
/* harmony import */ var _services_auth_register_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth/register/register.service */ "UIK3");
/* harmony import */ var _services_master_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/master/master.service */ "m7hs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__);










let Company_setupComponent = class Company_setupComponent {
    constructor(fb, router, modalService, masterService, registerService) {
        this.fb = fb;
        this.router = router;
        this.modalService = modalService;
        this.masterService = masterService;
        this.registerService = registerService;
        this.loader = true;
        this.isSuccess = false;
        this.errCompanyName = false;
        this.errCompanyCode = false;
        this.errZipCode = false;
        this.errMunicipality = false;
        this.errCity = false;
        this.errRegion = false;
        this.errCountry = false;
        this.errbranchName = false;
        this.errselectedIndustry = false;
        this.errselectedBank = false;
        this.errbankAccount = false;
        this.errBranchZipCode = false;
        this.errBranchMunicipality = false;
        this.errBranchRegion = false;
        this.errBranchCity = false;
        this.errBranchCountry = false;
        this.errSSS = false;
        this.errPhilhealth = false;
        this.errTIN = false;
        this.errPagibig = false;
        this.errRDO = false;
        this.errBranch = false;
        this.errBranchList = false;
        this.Title = "Company Setup";
        this.url = "https://via.placeholder.com/200x150";
        this.branchList = [];
        this.dropdown = [];
        this.bank = [];
        this.industry = [];
        this.country = [];
        this.companyCity = [];
        this.branchCity = [];
        this.region = [];
        this.rdoOffice = [];
        this.rdoBranch = [];
        this.pRegion = [];
        this.pCity = [];
        this.phone = [];
        this.email = [];
        this.phoneList = [];
        this.emailList = [];
        this.ipList = [];
        this.param = [];
        this.submitText = "Submit";
    }
    ngOnInit() {
        this.masterService.dropdownList().subscribe(data => {
            this.industry = data.filter(x => x.type_id === 1);
            this.bank = data.filter(x => x.type_id === 2);
            this.country = data.filter(x => x.type_id === 3);
            this.rdoOffice = data.filter(x => x.type_id === 4);
            this.rdoBranch = data.filter(x => x.type_id === 5);
            this.pRegion = data.filter(x => x.type_id === 6);
            this.region = data.filter(x => x.type_id === 10);
            this.phone = data.filter(x => x.type_id === 11);
            this.email = data.filter(x => x.type_id === 12);
        });
        this.masterService.dropdownEntitlement().subscribe(data => {
            this.dropdown = data;
        });
        this.companyForm = this.fb.group({
            companyID: ['0'],
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
        this.branchForm = this.fb.group({
            branchID: ['0'],
            branchName: [''],
            selectedIndustry: [null],
            selectedBank: [null],
            bankAccount: [''],
            zipCode: [''],
            unit: [''],
            building: [''],
            street: [''],
            barangay: [''],
            municipality: [''],
            sss: [''],
            philhealth: [''],
            tin: [''],
            pagibig: [''],
            selectedCity: [null],
            selectedRegion: [null],
            selectedBranchCountry: [null],
            selectedRdoOffice: [null],
            selectedRdoBranch: [null],
            selectedPRegion: [null],
            selectedPCity: [null],
            selectedPCode: [''],
            selectedPhone: [null],
            phoneNumber: [''],
            selectedEmail: [null],
            emailAddress: [''],
            ipAddress: [''],
            createdBy: sessionStorage.getItem('u'),
        });
        this.loader = false;
    }
    selectRegion() {
        this.companyForm.get('selectedCity').reset();
        this.companyCity = [];
        this.companyCity = this.dropdown.filter(x => x.id === this.companyForm.get('selectedRegion').value);
    }
    selectBranchRegion() {
        this.branchForm.get('selectedCity').reset();
        this.branchCity = [];
        this.branchCity = this.dropdown.filter(x => x.id === this.branchForm.get('selectedRegion').value);
    }
    selectRdoOffice() {
        this.branchForm.get('selectedRdoBranch').reset();
        this.branchForm.get('selectedRdoBranch').setValue(this.dropdown.filter(x => x.id === this.branchForm.get('selectedRdoOffice').value)[0]['to_id']);
    }
    selectRdoBranch() {
        this.branchForm.get('selectedRdoOffice').reset();
        this.branchForm.get('selectedRdoOffice').setValue(this.dropdown.filter(x => x.id === this.branchForm.get('selectedRdoBranch').value)[0]['to_id']);
    }
    selectPBranch() {
        this.branchForm.get('selectedPCity').reset();
        this.pCity = [];
        this.pCity = this.dropdown.filter(x => x.id === this.branchForm.get('selectedPRegion').value && x.id_to === 0);
    }
    selectPCity() {
        this.branchForm.get('selectedPCode').reset();
        this.branchForm.get('selectedPCode').setValue(this.dropdown.filter(x => x.id === this.branchForm.get('selectedPRegion').value && x.id_to === this.branchForm.get('selectedPCity').value)[0]['to_description']);
    }
    addPhone(e) {
        let selected = this.phone.filter(x => x.id === this.branchForm.get('selectedPhone').value)[0];
        let obj = {
            id: selected.id,
            description: selected.description,
            number: this.branchForm.get('phoneNumber').value
        };
        this.phoneList.push(obj);
        this.branchForm.get('selectedPhone').reset();
        this.branchForm.get('phoneNumber').reset();
    }
    removePhone(e) {
        this.phoneList.splice(e, 1);
    }
    addEmail(e) {
        let selected = this.email.filter(x => x.id === this.branchForm.get('selectedEmail').value)[0];
        let obj = {
            id: selected.id,
            description: selected.description,
            email_address: this.branchForm.get('emailAddress').value
        };
        this.emailList.push(obj);
        this.branchForm.get('selectedEmail').reset();
        this.branchForm.get('emailAddress').reset();
    }
    removeEmail(e) {
        this.emailList.splice(e, 1);
    }
    addIP(e) {
        let obj = {
            description: this.branchForm.get('ipAddress').value
        };
        this.ipList.push(obj);
        this.branchForm.get('ipAddress').reset();
    }
    removeIP(e) {
        this.ipList.splice(e, 1);
    }
    openFileBrowser(event) {
        event.preventDefault();
        let element = document.querySelector("#fileUploadInputExample");
        element.click();
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            this.companyForm.patchValue({
                img: event.target.files[0].name
            });
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.url = event.target.result;
            };
        }
    }
    handleFileInput(event) {
        if (event.target.files.length) {
            let element = document.querySelector("#fileUploadInputExample + .input-group .file-upload-info");
            let fileName = event.target.files[0].name;
            element.setAttribute('value', fileName);
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();
                this.companyForm.patchValue({
                    img: event.target.files[0].name
                });
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = (event) => {
                    this.url = event.target.result;
                };
            }
        }
    }
    reLogin() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
    openXlModal(content) {
        this.modalService.open(content, { size: 'xl' }).result.then((result) => {
        }).catch((res) => { });
    }
    validation() {
        let ret = true;
        if (this.branchForm.get('branchName').value === "") {
            ret = false;
            this.errbranchName = true;
        }
        else {
            this.errbranchName = false;
        }
        if (this.branchForm.get('selectedIndustry').value === "" || this.branchForm.get('selectedIndustry').value === null) {
            ret = false;
            this.errselectedIndustry = true;
        }
        else {
            this.errselectedIndustry = false;
        }
        if (this.branchForm.get('selectedBank').value === "" || this.branchForm.get('selectedBank').value === null) {
            ret = false;
            this.errselectedBank = true;
        }
        else {
            this.errselectedBank = false;
        }
        if (this.branchForm.get('bankAccount').value === "") {
            ret = false;
            this.errbankAccount = true;
        }
        else {
            this.errbankAccount = false;
        }
        if (this.branchForm.get('zipCode').value === "") {
            ret = false;
            this.errBranchZipCode = true;
        }
        else {
            this.errBranchZipCode = false;
        }
        if (this.branchForm.get('municipality').value === "") {
            ret = false;
            this.errBranchMunicipality = true;
        }
        else {
            this.errBranchMunicipality = false;
        }
        if (this.branchForm.get('selectedRegion').value === "" || this.branchForm.get('selectedRegion').value === null) {
            ret = false;
            this.errBranchRegion = true;
        }
        else {
            this.errBranchRegion = false;
        }
        if (this.branchForm.get('selectedCity').value === "" || this.branchForm.get('selectedCity').value === null) {
            ret = false;
            this.errBranchCity = true;
        }
        else {
            this.errBranchCity = false;
        }
        if (this.branchForm.get('selectedBranchCountry').value === "" || this.branchForm.get('selectedBranchCountry').value === null) {
            ret = false;
            this.errBranchCountry = true;
        }
        else {
            this.errBranchCountry = false;
        }
        if (this.branchForm.get('sss').value === "") {
            ret = false;
            this.errSSS = true;
        }
        else {
            this.errSSS = false;
        }
        if (this.branchForm.get('philhealth').value === "") {
            ret = false;
            this.errPhilhealth = true;
        }
        else {
            this.errPhilhealth = false;
        }
        if (this.branchForm.get('tin').value === "") {
            ret = false;
            this.errTIN = true;
        }
        else {
            this.errTIN = false;
        }
        if (this.branchForm.get('pagibig').value === "") {
            ret = false;
            this.errPagibig = true;
        }
        else {
            this.errPagibig = false;
        }
        if (this.branchForm.get('selectedRdoOffice').value === "" || this.branchForm.get('selectedRdoOffice').value === null) {
            ret = false;
            this.errRDO = true;
        }
        else {
            this.errRDO = false;
        }
        if (this.branchForm.get('selectedRdoBranch').value === "" || this.branchForm.get('selectedRdoBranch').value === null) {
            ret = false;
            this.errRDO = true;
        }
        else {
            this.errRDO = false;
        }
        if (this.branchForm.get('selectedPRegion').value === "" || this.branchForm.get('selectedPRegion').value === null) {
            ret = false;
            this.errBranch = true;
        }
        else {
            this.errBranch = false;
        }
        if (this.branchForm.get('selectedPCity').value === "" || this.branchForm.get('selectedPCity').value === null) {
            ret = false;
            this.errBranch = true;
        }
        else {
            this.errBranch = false;
        }
        return ret;
    }
    addBranch() {
        this.errBranchList = false;
        let flag = this.validation();
        if (flag) {
            var obj = {
                branchID: "0",
                branchName: this.branchForm.get('branchName').value,
                selectedIndustry: this.branchForm.get('selectedIndustry').value,
                industry: this.industry.filter(x => x.id === this.branchForm.get('selectedIndustry').value)[0].description,
                selectedBank: this.branchForm.get('selectedBank').value,
                bankAccount: this.branchForm.get('bankAccount').value,
                zipCode: this.branchForm.get('zipCode').value,
                unit: this.branchForm.get('unit').value,
                building: this.branchForm.get('building').value,
                street: this.branchForm.get('street').value,
                barangay: this.branchForm.get('barangay').value,
                municipality: this.branchForm.get('municipality').value,
                sss: this.branchForm.get('sss').value,
                philhealth: this.branchForm.get('philhealth').value,
                tin: this.branchForm.get('tin').value,
                pagibig: this.branchForm.get('pagibig').value,
                selectedCity: this.branchForm.get('selectedCity').value,
                selectedRegion: this.branchForm.get('selectedRegion').value,
                selectedBranchCountry: this.branchForm.get('selectedBranchCountry').value,
                selectedRdoOffice: this.branchForm.get('selectedRdoOffice').value,
                selectedRdoBranch: this.branchForm.get('selectedRdoBranch').value,
                selectedPRegion: this.branchForm.get('selectedPRegion').value,
                selectedPCity: this.branchForm.get('selectedPCity').value,
                selectedPCode: this.branchForm.get('selectedPCode').value,
                createdBy: sessionStorage.getItem('u'),
                contact_IU: this.phoneList,
                email_IU: this.emailList,
                iP_IU: this.ipList,
            };
            this.branchList.push(obj);
            this.param = [];
            this.param.push({
                company_IU: this.companyForm.value,
                branch_IU: this.branchList
            });
            this.modalService.dismissAll();
            this.branchForm.reset();
            this.phoneList = [];
            this.emailList = [];
            this.ipList = [];
        }
    }
    removeBranch(e) {
        this.errBranchList = false;
        this.branchList.splice(e, 1);
        this.param = [];
        this.param.push({
            company_IU: this.companyForm.value,
            branch_IU: this.branchList
        });
    }
    nextStep(step) {
        let ret = true;
        if (step == 1) {
            if (this.companyForm.get('companyName').value === "") {
                ret = false;
                this.errCompanyName = true;
            }
            else {
                this.errCompanyName = false;
            }
            if (this.companyForm.get('companyCode').value === "") {
                ret = false;
                this.errCompanyCode = true;
            }
            else {
                this.errCompanyCode = false;
            }
            if (this.companyForm.get('zipCode').value === "") {
                ret = false;
                this.errZipCode = true;
            }
            else {
                this.errZipCode = false;
            }
            if (this.companyForm.get('municipality').value === "") {
                ret = false;
                this.errMunicipality = true;
            }
            else {
                this.errMunicipality = false;
            }
            if (this.companyForm.get('selectedRegion').value === "" || this.companyForm.get('selectedRegion').value === null) {
                ret = false;
                this.errRegion = true;
            }
            else {
                this.errRegion = false;
            }
            if (this.companyForm.get('selectedCity').value === "" || this.companyForm.get('selectedCity').value === null) {
                ret = false;
                this.errCity = true;
            }
            else {
                this.errCity = false;
            }
            if (this.companyForm.get('selectedCompanyCountry').value === "" || this.companyForm.get('selectedCompanyCountry').value === null) {
                ret = false;
                this.errCountry = true;
            }
            else {
                this.errCountry = false;
            }
            if (ret === true) {
                this.wizardForm.goToNextStep();
                this.Title = "Branch Setup";
            }
        }
    }
    prevStep() {
        this.wizardForm.goToPreviousStep();
    }
    submit(e) {
        if (this.isSuccess) {
            this.wizardForm.goToNextStep();
        }
        else {
            if (Object.keys(this.branchList).length === 0) {
                this.errBranchList = true;
            }
            else {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    title: 'Are you sure?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes',
                    showLoaderOnConfirm: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                            title: 'Please Wait !',
                            allowOutsideClick: false,
                            onBeforeOpen: () => {
                                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.showLoading();
                                this.registerService.tenantCreate(this.param[0]).subscribe(data => {
                                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.close();
                                    if (data.id === 1) {
                                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Ok!", "Transaction successful!", "success");
                                        this.wizardForm.goToNextStep();
                                        this.Title = "Success";
                                        this.isSuccess = true;
                                        this.submitText = "Continue";
                                    }
                                    else {
                                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Failed!", "Transaction failed!", "error");
                                    }
                                });
                            },
                        });
                    }
                });
            }
        }
    }
    finishFunction() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
};
Company_setupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
    { type: _services_master_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"] },
    { type: _services_auth_register_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }
];
Company_setupComponent.propDecorators = {
    wizardForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['wizardForm',] }],
    closeModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['closeModal',] }]
};
Company_setupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-company_setup',
        template: _raw_loader_company_setup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_setup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Company_setupComponent);



/***/ }),

/***/ "dlo3":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "hnEC":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner-wrapper full-screen\" *ngIf=\"loader\">\n  <div class=\"spinner\"></div>\n</div>\n<div class=\"row w-100 mx-0 auth-page\">\n  <div class=\"col-md-8 col-xl-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-4 pr-md-0\">\n          <div class=\"auth-left-wrapper\">\n\n          </div>\n        </div>\n        <div class=\"col-md-8 pl-md-0\">\n          <div class=\"auth-form-wrapper px-4 py-5\">\n            <a routerLink=\".\" class=\"noble-ui-logo d-block mb-2\">Durust<span>HR</span></a>\n            <h5 class=\"text-muted font-weight-normal mb-4\">Create a free account.</h5>\n            <form class=\"forms-sample\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputUsername1\">Username</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"Username\" autocomplete=\"Username\" placeholder=\"Username\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Email address</label>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email_address\" placeholder=\"Email\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Password</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"Password\" autocomplete=\"current-password\" placeholder=\"Password\">\n              </div>\n              <p class=\"text-danger mt-1\" *ngIf=\"validate\">{{error}}</p>\n              <div class=\"mt-3\">\n                <button class=\"btn btn-primary mr-2 mb-2 mb-md-0\" type=\"button\" type=\"submit\" [disabled]=\"disSubmit\">\n                  <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"disSubmit\"></span>\n                  {{submitText}}\n                </button>\n              </div>\n              <a routerLink=\"/login\" class=\"d-block mt-3 text-muted\">Already a user? Sign in</a>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "tQBG":
/*!*****************************************************************!*\
  !*** ./src/app/auth/company_setup/company_setup.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbXBhbnlfc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJjb21wYW55X3NldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "zu2e":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner-wrapper full-screen\" *ngIf=\"loader\">\n  <div class=\"spinner\"></div>\n</div>\n<div class=\"row w-100 mx-0 auth-page\">\n  <div class=\"col-md-8 col-xl-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-4 pr-md-0\">\n          <div class=\"auth-left-wrapper\">\n          </div>\n        </div>\n        <div class=\"col-md-8 pl-md-0\">\n          <div class=\"auth-form-wrapper px-4 py-5\">\n            <a routerLink=\".\" class=\"noble-ui-logo d-block mb-2\">Durust<span>HR</span></a>\n            <h5 class=\"text-muted font-weight-normal mb-4\">Welcome back! Log in to your account.</h5>\n            <form class=\"forms-sample\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Company Code</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"company_code\" placeholder=\"Company Code\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Username</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Email\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Password</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\" autocomplete=\"current-password\" placeholder=\"Password\" >\n              </div>\n              <div class=\"form-check form-check-flat form-check-primary\">\n                <p class=\"text-danger mt-1\" *ngIf=\"validate\">{{error}}</p>\n                <p class=\"text-danger mt-1\" *ngIf=\"httpvalidate\">{{httperror}}</p>\n              </div>\n              <div class=\"mt-3\">\n                <button class=\"btn btn-primary mr-2 mb-2 mb-md-0\" type=\"button\" type=\"submit\" [disabled]=\"disSubmit\">\n                  <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"disSubmit\"></span>\n                  {{submitText}}\n                </button>\n              </div>\n              <a routerLink=\"/register\" class=\"d-block mt-3 text-muted\" >Not a user? Sign up</a>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map