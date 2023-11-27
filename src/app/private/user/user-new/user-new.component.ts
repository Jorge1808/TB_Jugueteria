import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {
  
  constructor(private fb: FormBuilder) {}

   userForm= this.fb.group({
   nombre: ["", Validators.required],
   apellidos: ["", [Validators.required]],
   email: ["", [Validators.required, Validators.email]]
 })
 __onSubmit() {
  if(this.userForm.valid) {
    console.log(this.userForm.value)
  } else {
    alert("Formulario no valido")
  }
}
}

