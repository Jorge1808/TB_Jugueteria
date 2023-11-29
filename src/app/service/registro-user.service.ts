import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroUserService {

  private urlApi = 'http://localhost:5266/api/CrearUsuario/Guardar';

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
}
