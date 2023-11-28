import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private fb: FormBuilder) {}

  newform = this.fb.group({
    usuario: ["", Validators.required],
    password: ["", Validators.required]
    
  })

  __onSubmit() {
    if(this.newform.valid) {
      console.log(this.newform.value)
    } else {
      alert("Formulario no valido")
    }
  }

}
