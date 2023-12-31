import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { FormsModule,FormBuilder, Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { RegistroUserService } from 'src/app/service/registro-user.service';





@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {

 
  public userLoginOn =true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private rs: RegistroUserService
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
    // terms: ["", Validators.required],
    contraseña: ["", [Validators.required, Validators.minLength(8)]],
    // validador:["", Validators.required]
    
  });
  
  passwordValidator(control: AbstractControl | null): ValidationErrors | null{
    if (!control ||!control.value) {
      return null; // No hay valor, no se aplica la validación
    }
    // Mínimo 8 caracteres, al menos una letra minúscula, una letra mayúscula, un número y un carácter especial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    return regex.test(control.value) ? null : { invalidPassword: false };   
  }

  RegistroUsuario(data : any){

    this.rs.postData(data).subscribe((rest : any )=>{
      if(rest.isSucess){
        this.router.navigate(['/user-login']); 
      }else{
        alert('error de conexión')
      }
    })


  }

  
  __onSubmit() {
    if (this.newform.valid) {
      this.RegistroUsuario(this.newform.value)

    } else {
      alert("Formulario no válido");
    }
  }
  
  getUserLoginStatus(): boolean {
    return this.userLoginOn;
  }

  setUserLoginStatus(status: boolean): void {
    this.userLoginOn = status;
  }
}


