import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
//Espacio para rutear cada componente creado
import { HomeComponent } from "./public/home/home.component";
import { VentasCorporativasComponent } from "./public/ventas-corporativas/ventas-corporativas.component";
import { UserNewComponent } from "./private/user/user-new/user-new.component";
import { ComprasComponent } from "./private/compras/compras.component";
import { UserLoginComponent } from "./private/user/user-login/user-login.component";
import { ConocenosComponent } from "./public/conocenos/conocenos.component";
import { CatalogoComponent } from "./public/catalogo/catalogo.component";
import { CategoriaAccionComponent } from "./public/categoria-accion/categoria-accion.component";


const routes: Routes=[
    
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"ventas-corporativas",component:VentasCorporativasComponent},
    {path:"user-new",component:UserNewComponent},
    {path:"compras",component:ComprasComponent},
    {path:"user-login",component:UserLoginComponent},
    {path:"catalogo",component:CatalogoComponent},
    {path:"conocenos",component:ConocenosComponent},
    {path:"accion",component:CategoriaAccionComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
