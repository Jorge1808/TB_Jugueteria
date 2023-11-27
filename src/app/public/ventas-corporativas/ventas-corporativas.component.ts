import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ventas-corporativas',
  templateUrl: './ventas-corporativas.component.html',
  styleUrls: ['./ventas-corporativas.component.css']
})
export class VentasCorporativasComponent {

  constructor(private fb: FormBuilder) {}

   contactusForm = this.fb.group({
    tipoEmpresa: ["", Validators.required],
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    correo: ["", [Validators.required, Validators.email]],
    mensaje:[""]
    
  })

__onSubmit() {
  if(this.contactusForm.valid) {
    console.log(this.contactusForm.value)
  } else {
    alert("Formulario no valido")
  }
}
}