
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginComponent } from '../private/user/user-login/user-login.component';



@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private urlApi = 'http://localhost:5266/api/Autenticacion/Validar';

  constructor(private readonly http: HttpClient) { }

  public postData(data: any): Observable<any> {
    // Configura las cabeceras según sea necesario
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Otras cabeceras si es necesario
    });

    // Realiza la solicitud POST con los datos proporcionados
    return this.http.post<any>(this.urlApi, data, { headers });
  }


  // Logica para el login 
  private userLoginOn = true;

  getUserLoginStatus(): boolean {
    return this.userLoginOn;
  }

  setUserLoginStatus(status: boolean): void {
    this.userLoginOn = status;
  }
}