import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Producto } from '../interface/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionProductosService {

  constructor() { }

  http = inject(HttpClient);
  url_base = 'http://localhost:3000/productos';

  listaProductos() : Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url_base);
  }

  productoByID(id : number | null) : Observable<Producto> {
    return this.http.get<Producto>(`${this.url_base}/${id}`);
  }

  agregarProducto(producto : Producto) : Observable<Producto> {
    return this.http.post<Producto>(this.url_base, producto);
  }

  modificarProducto(id : number | undefined, producto : Producto | undefined ) : Observable<Producto> {
    return this.http.put<Producto>(`${this.url_base}/${id}`, producto);
  }

  eliminarProducto(id : number) : Observable<Producto> {
    return this.http.delete<Producto>(`${this.url_base}/${id}`);
  }

}
