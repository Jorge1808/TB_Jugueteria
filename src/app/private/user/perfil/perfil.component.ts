import { Component, numberAttribute } from '@angular/core';
import { UserLoginService } from 'src/app/service/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  constructor(private CorreoLogin: UserLoginService,
    private router: Router
    ){  }
  data1 :any[]=[];

  ngOnInit():void{
    this.recuperavalor();
  }
  
  recuperavalor(){
   this.CorreoLogin.obtenerDatosCorreo().subscribe((rest:any) => {
      
      this.data1=rest.data;
      //  console.log('Respuesta de la API valores:',this.data1  );
    });
  
  }
  

  CerrarSesion(){
    this.router.navigate(['/home']);
    this.CorreoLogin.setUserLoginStatus(true);
    return this.CorreoLogin.getUserLoginStatus();
    
  }
}
