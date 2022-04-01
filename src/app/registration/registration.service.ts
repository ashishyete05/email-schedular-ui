import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient : HttpClient) {}

   API_URI:string="http://localhost:8013";

   registerUser(registerForm:any){
    return this.httpClient.post(this.API_URI+"/user",registerForm);
   }


}
