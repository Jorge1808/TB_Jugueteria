import { Component } from '@angular/core';
import { ProductoIdService,Product } from 'src/app/service/producto-id.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categoria-accion',
  templateUrl: './categoria-accion.component.html',
  styleUrls: ['./categoria-accion.component.css']
})
export class CategoriaAccionComponent {
  constructor (
    private readonly ps:ProductoIdService,
    private readonly AppCompo:AppComponent,
    private router: Router 

  ){  }


  ProductosAccion :any = [];
  ProductoAccion(){
    this.ps.ObtenerProducto(this.AppCompo.num).subscribe((rest: any)=>{
    this.ProductosAccion=rest.data;  
    })

  }
  selectedProduct: Product | null = null;
  showProductDetails(product: Product): void {
    this.selectedProduct = product;   
    this.router.navigateByUrl('/accion',{skipLocationChange:false}).then(()=>
    {
      this.router.navigate(["accion"])
      window.location.reload()
    })
  }
  ngOnInit():void{
    this.ProductoAccion()

  }

}
