import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

const routes: Routes = [
  {path:'', component: ListarProductosComponent},
  {path:'crear-producto',component: CrearProductoComponent},
  {path:'editar-producto/:id', component: CrearProductoComponent},
  {path:'**',redirectTo:'',pathMatch:'full'} // siembre al final, sirve para redirigir a la raiz si escriben cualquier cosa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
