// user-login.component.ts

import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { UserLoginService } from 'src/app/service/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(
    private fb: FormBuilder,
    private us: UserLoginService,
    private router: Router
  ) {}

  newform = this.fb.group({
    uid: ['', Validators.required],
    pwd: ['', Validators.required],
  });


  login(data : any ){

    this.us.logeo(data).subscribe((rest: any)=>{
      if(rest.isSucess){
        //Para que al cerrar la pestaña no se quede el token almacenado 
        sessionStorage.setItem("token",rest.data.token)
        sessionStorage.setItem("user",rest.data.nombre)
        
        this.router.navigateByUrl("/perfil",{skipLocationChange:false }).then(()=>{
        this.router.navigate(["perfil"])
        //para cambiar el icono de inicio de secion
        this.us.setUserLoginStatus(false)
          // window.location.reload()
        }); 

      }else{
        alert('Credenciales invalidas');
        
      }
    })
  }

  __onSubmit() {
    if (this.newform.valid) {
      this.login(this.newform.value)
    } else {
      alert('Formulario no válido');
    }
  }



}
