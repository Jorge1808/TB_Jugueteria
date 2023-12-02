import { Component } from '@angular/core';
import { UserLoginService } from './service/user-login.service';
import { UserLoginComponent } from './private/user/user-login/user-login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TB1';
  constructor(
    private log:UserLoginService,
    ){ }

  user=sessionStorage.getItem("user")
  // Para recuperar el valor del login
 getlogin(){
  return this.log.getUserLoginStatus();
 }

 num: number=0;
 SeleccionaCategoria(id:number){
  this.num=id

 }

}
