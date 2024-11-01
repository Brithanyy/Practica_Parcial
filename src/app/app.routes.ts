import { Routes } from '@angular/router';
import { PageListaProductosComponent } from './pages/page-lista-productos/page-lista-productos.component';
import { PageAgregarProductoComponent } from './pages/page-agregar-producto/page-agregar-producto.component';
import { PageDetalleProductoComponent } from './pages/page-detalle-producto/page-detalle-producto.component';

export const routes: Routes = [
    {path: 'lista', component: PageListaProductosComponent},
    {path: 'agregar', component: PageAgregarProductoComponent},
    {path: 'lista/:id', component: PageDetalleProductoComponent},
    {path: '', redirectTo: '/lista', pathMatch: 'full'},
    {path: '**', redirectTo: '/lista', pathMatch: 'full'}
];
