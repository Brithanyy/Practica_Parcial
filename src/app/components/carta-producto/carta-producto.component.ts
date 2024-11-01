import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Producto } from '../../interface/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionProductosService } from '../../services/gestion-productos.service';

@Component({
  selector: 'app-carta-producto',
  standalone: true,
  imports: [],
  templateUrl: './carta-producto.component.html',
  styleUrl: './carta-producto.component.css'
})
export class CartaProductoComponent {

  @Input() productoRecibido? : Producto;

  redireccionar = inject(Router) //Solo para redireccionar

  @Output() eliminar : EventEmitter<number> = new EventEmitter;

  direccionar_detalle() {
    const id_Number = Number(this.productoRecibido?.id)
    this.redireccionar.navigate(['lista', id_Number]);
  }

  eliminarProducto() {
    this.eliminar.emit(this.productoRecibido?.id);
  }
}
