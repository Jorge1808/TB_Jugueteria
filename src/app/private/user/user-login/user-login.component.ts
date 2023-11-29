// user-login.component.ts

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private registroUserService: UserLoginService,
    private router: Router
  ) {}

  newform = this.fb.group({
    correoElectronico: ['', Validators.required],
    contraseña: ['', Validators.required],
  });

  __onSubmit() {
    if (this.newform.valid) {
      const dataToSend = this.newform.value;
      this.registroUserService.postData(dataToSend).subscribe(
        (response) => {
          console.log('Respuesta de la API:', response);
          this.registroUserService.setUserLoginStatus(false); // Cambia el estado de inicio de sesión
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error en la solicitud POST:', error);
          this.router.navigate(['/user-login']);
          alert('Error Usuario o Contraseña Incorrecto');
          this.registroUserService.setUserLoginStatus(true);
        }
      );
    } else {
      alert('Formulario no válido');
    }
  }
  // Comprobacion del login
  // getlogin(){
  //   return this.registroUserService.getUserLoginStatus();
  // }

}
