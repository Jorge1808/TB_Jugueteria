import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoIdService {
  // API para listar los productos y mostrar en el catalogo
  constructor ( 
    private readonly http:HttpClient 
  ){}

  private urlApi = 'https://localhost:44309/api/Producto/Listar';
  private urlApi2='https://localhost:44309/api/Producto/Listar/id';

  ObtenerProductos(){
    return this.http.get(this.urlApi)
  }

  ObtenerProducto(id:number){
    // Agrega el parámetro al final de la URL
     const url = `${this.urlApi2}?id=${id}`;
    return this.http.get(url);
  }


}
  //Prueba 
export interface Product {
  id: number;
  nombre_Juguete: string;
  descripcion: string;
  urlFoto: string;
  precio: number;
}
