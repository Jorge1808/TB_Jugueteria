import { Component } from '@angular/core';
import { FormBuilder, Validators,AbstractControl,ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-modifica-contra',
  templateUrl: './modifica-contra.component.html',
  styleUrls: ['./modifica-contra.component.css']
})
export class ModificaContraComponent {
  constructor(
    private fb: FormBuilder
  ) {}
  newform = this.fb.group({
    
    contraseña: ['', Validators.required],
    contraseñaNueva: ["", [Validators.required, Validators.minLength(8), this.passwordValidator]]
  });
  passwordValidator(control: AbstractControl | null): ValidationErrors | null{
    if (!control ||!control.value) {
      return null; // No hay valor, no se aplica la validación
    }
  
    // Mínimo 8 caracteres, al menos una letra minúscula, una letra mayúscula, un número y un carácter especial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
  
    return regex.test(control.value) ? null : { invalidPassword: false };
    
  }
}
