import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { NgbdDatepickerPopup } from '../../datepicker-popup';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationSvc:RegistrationService) { }
  model:any;

  ngOnInit(): void {
  }

  register(registerForm:any){
    this.registrationSvc.registerUser(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{
        console.log(err);
      }
    )
  }
}
