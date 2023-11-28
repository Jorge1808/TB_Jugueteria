import { ThisReceiver } from '@angular/compiler';
import { Component} from '@angular/core';
import {FormsModule,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthServiceConfig,SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';




@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {

 
  constructor(private fb: FormBuilder,private router: Router) {}

  numeroTelefono: string = '';
   newform = this.fb.group({
   nombre: ["", Validators.required],
   apellidos: ["", Validators.required],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
   correo: ["", [Validators.required, Validators.email]],
   empresa: ["",],
   direccion: ["", Validators.required],
   RefDireccion: ["", Validators.required],
   departamento: ["", Validators.required],
   provincia: ["", Validators.required],
   distrito: ["", Validators.required],
   tipoDocumento: ["", Validators.required],
   telefono: ["", Validators.required], 
   terms: ["", Validators.required],                                     
    
 }) 
 __onSubmit() {
  if(this.newform.valid) {
    console.log(this.newform.value)
    
    this.router.navigate(['/user-login']);
  } else {
    alert("Formulario no valido")
  }
}
 isInputDisabled(): boolean {
  // Obtén el valor actual del tipoDocumento
  const tipoDocumentoValue = this.newform.value.tipoDocumento;

  // Devuelve true si el valor es '', de lo contrario, false
  return tipoDocumentoValue === '';
}

isInputDisabled2() {
  // Obtén el valor actual del tipoDocumento
  const termsValue = this.newform.value.terms;

  // Devuelve true si el valor es '', de lo contrario, false
  return !termsValue;
}





}

