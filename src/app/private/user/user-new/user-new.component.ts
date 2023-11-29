import { Component } from '@angular/core';

import { FormBuilder, Validators,AbstractControl,ValidationErrors, ValidatorFn   } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { RegistroUserService } from 'src/app/service/registro-user.service';





@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registroUserService: RegistroUserService
  ) {}

  
    newform = this.fb.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    correoElectronico: ["", [Validators.required, Validators.email]],
    empresa: [""],
    direccion: ["", Validators.required],
    refDireccion: ["", Validators.required],
    departamento: ["", Validators.required],
    provincia: ["", Validators.required],
    distrito: ["", Validators.required],
    tipoDocumento: ["", Validators.required],
    telefono: ["", Validators.required],
    terms: ["", Validators.required],
    contraseña: ["", [Validators.required, Validators.minLength(8), this.passwordValidator]]
    
  });
  
  passwordValidator(control: AbstractControl | null): ValidationErrors | null{
    if (!control ||!control.value) {
      return null; // No hay valor, no se aplica la validación
    }
  
    // Mínimo 8 caracteres, al menos una letra minúscula, una letra mayúscula, un número y un carácter especial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
  
    return regex.test(control.value) ? null : { invalidPassword: false };
    
  }


  __onSubmit() {
    if (this.newform.valid) {
      console.log(this.newform.value);

      // código de la solicitud POST 
      const dataToSend = this.newform.value;
      this.registroUserService.postData(dataToSend).subscribe(
        (response) => {
          console.log('Respuesta de la API:', response);
          
        },
        (error) => {
          console.error('Error en la solicitud POST:', error);
          
        }
      );

//Para redireccionar a la pantalla del login 

      this.router.navigate(['/user-login']);
    } else {
      alert("Formulario no válido");
    }
  }

  isInputDisabled(): boolean {
    const tipoDocumentoValue = this.newform.value.tipoDocumento;
    return tipoDocumentoValue === '';
  }

  isInputDisabled2(): boolean {
    const termsValue = this.newform.value.terms;
    return !termsValue;
  }
}


