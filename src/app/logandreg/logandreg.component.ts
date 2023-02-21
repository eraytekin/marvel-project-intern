import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';//kapalı göz
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-logandreg',
  templateUrl: './logandreg.component.html',
  styleUrls: ['./logandreg.component.less']
})
export class LogandregComponent implements OnInit, AfterContentChecked {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentChecked(): void {
    this.profileForm.valid;
    console.log(this.profileForm.valid);
  }
  // icons start
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  // icons stop

  // log in ekranı register log in işlemleri
  pageTitle = "LOG IN";

  changePageRegister(){
    this.pageTitle = "REGISTER";
  }
  changePageLogIn(){
    this.pageTitle = "LOG IN";
  }
  //login ekranı password işlemleri
  confirmPasswordType:string = "password";
  closeEye:boolean = true;
  openEye:boolean = false;

  showConfirmEye(){
    this.confirmPasswordType = "text";
    this.openEye = true;
    this.closeEye = false;
  }
  dontShowConfirmEye(){
    this.confirmPasswordType = "password";
    this.openEye = false;
    this.closeEye = true;
  }

  passwordType:string = "password";
  closeEye2:boolean = true;
  openEye2:boolean = false;

  showPasswordEye(){
    this.passwordType = "text";
    this.closeEye2 = false;
    this.openEye2 = true;
  }
  dontShowPasswordEye(){
    this.passwordType = "password";
    this.openEye2 = false;
    this.closeEye2 = true;
  }

  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    passwordInForm: new FormControl('',[Validators.required]),
  });

  onDoSubmit() {
    console.warn(this.profileForm.value);
  }

  profileForm2 = new FormGroup({
    nameConfirm: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    confirmPassword2: new FormControl('',[Validators.required]),
  });

  onDoSubmitConfirm() {
    console.warn(this.profileForm2.value);
  }


}
