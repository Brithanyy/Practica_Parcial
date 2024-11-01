import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../interface/Producto';
import { GestionProductosService } from '../../services/gestion-productos.service';

@Component({
  selector: 'app-formulario-agregar-producto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-agregar-producto.component.html',
  styleUrl: './formulario-agregar-producto.component.css'
})
export class FormularioAgregarProductoComponent {
  producto : Producto = {nombre: '', descripcion: '', precio : -1, categoria: '', stock: -1, fechaCreacion: ''};

  formulario : FormGroup;

  constructor(private fb : FormBuilder) {
    this.formulario = fb.group({
      'nombre': ['',[Validators.required]],
      'descripcion': ['',[Validators.required]],
      'precio': ['',[Validators.required]],
      'categoria': ['',[Validators.required]],
      'stock': ['',[Validators.required]],
      'fechaCreacion': ['',[Validators.required]],
    })
  }

  gestion_productos = inject(GestionProductosService);

  get nombre() { return this.formulario.get('nombre');}
  get descripcion() { return this.formulario.get('descripcion'); }
  get precio() { return this.formulario.get('precio'); }
  get categoria() { return this.formulario.get('categoria'); }
  get stock() { return this.formulario.get('stock'); }
  get fechaCreacion() { return this.formulario.get('fechaCreacion'); }


  agregarProducto() {
    this.agregarProductoDB();
  }

  agregarProductoDB() {
    this.producto = this.formulario.getRawValue()
    this.gestion_productos.agregarProducto(this.producto).subscribe({
      next: () => {
        alert("Producto agregado con exito");
      },
      error: (err) => {
        console.log("Error al agregar el producto", err);
      }
    })
    this.formulario.reset();
  }

}
