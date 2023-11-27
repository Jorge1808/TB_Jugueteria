import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  loginform = new FormGroup({
    usuario:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(){}
  ngOnInit(): void {
  }
  onLogin(form: any){
    console.log(form)

  }

}
