import { Component } from '@angular/core';
import { UserLoginService } from './service/user-login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TB1';
  constructor(private log:UserLoginService){
  
  }
  // Para recuperar el valor del login
 getlogin(){
  return this.log.getUserLoginStatus();
 }

}
