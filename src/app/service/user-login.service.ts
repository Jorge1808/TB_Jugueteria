
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  //Api para el login 
  private urlApi = 'https://localhost:44309/api/Usuario/Logeo';
  //Api para obtener un perfil
  private urlApiLogin='https://localhost:44309/api/Usuario/Listar/id';
  public correoLogin:string | undefined;

  constructor(private readonly http: HttpClient) { }

  public logeo(data: any): Observable<any> {
    // Configura las cabeceras según sea necesario
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Otras cabeceras si es necesario
    });   
    // Realiza la solicitud POST con los datos proporcionados
    this.correoLogin=data.uid;
    //data contiene los valores que se enviaron en el formulario
    return this.http.post<any>(this.urlApi, data, { headers });
  }
  ngOnInit():void{
    this.obtenerDatosCorreo();  
  }
  
  obtenerDatosCorreo(){
    // Añadir el parámetro 'correo' a la URL
    const urlWithParam = `${this.urlApiLogin}?correo=${this.correoLogin}`;
    return this.http.get(urlWithParam);
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
  
