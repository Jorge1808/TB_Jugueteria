import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductoIdService,Product } from 'src/app/service/producto-id.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  constructor (
    private readonly ps:ProductoIdService
  ){}

  productos: any[] = [];
  ObtenerProductos (){
    this.ps.ObtenerProductos().subscribe((rest : any )=>{
      this.productos=rest.data
    })
  }
 


  ngOnInit():void{
    this.ObtenerProductos()

  }
  
  //Prueba
 
  selectedProduct: Product | null = null;
  showProductDetails(product: Product): void {
    this.selectedProduct = product;
    console.log('api',product)
  }

  
}
