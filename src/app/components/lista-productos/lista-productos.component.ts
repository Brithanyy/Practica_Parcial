import { Component, inject, OnInit } from '@angular/core';
import { CartaProductoComponent } from "../carta-producto/carta-producto.component";
import { CommonModule } from '@angular/common';
import { Producto } from '../../interface/Producto';
import { GestionProductosService } from '../../services/gestion-productos.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CartaProductoComponent, CommonModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit{

  productos : Producto[] = [];

  gestion_productos = inject(GestionProductosService);

  ngOnInit(): void {
    this.listaDeProductosDB();
  }

  listaDeProductosDB() {
    this.gestion_productos.listaProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (err) => {
        console.log("Error", err);
      }
    })
  }

  eliminarProducto(id: number) {
    this.gestion_productos.eliminarProducto(id).subscribe({
      next: () => {
        alert("Producto eliminado con exito");
        this.productos = this.productos.filter(productos => productos.id != id);
      },
      error: (err) => {
        console.log("Error", err);
      }
    })
  }

}
