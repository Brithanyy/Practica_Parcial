import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../interface/Producto';
import { GestionProductosService } from '../../services/gestion-productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-detalle-producto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './page-detalle-producto.component.html',
  styleUrl: './page-detalle-producto.component.css'
})
export class PageDetalleProductoComponent implements OnInit{
  producto ? : Producto;

  gestion = inject(GestionProductosService);

  ruta = inject(ActivatedRoute);

  form_active : boolean = false;

  formulario : FormGroup;

  constructor(private fb : FormBuilder) {
    this.formulario = fb.group({
      'nombre': ['',[Validators.required]],
      'descripcion': ['',[Validators.required]],
      'precio': ['',[Validators.required]],
      'categoria': ['',[Validators.required]],
      'stock': ['',[Validators.required]],
      'fechaCreacion': ['',[Validators.required]]
    })
  }

  get nombre() { return this.formulario.get('nombre');}
  get descripcion() { return this.formulario.get('descripcion'); }
  get precio() { return this.formulario.get('precio'); }
  get categoria() { return this.formulario.get('categoria'); }
  get stock() { return this.formulario.get('stock'); }
  get fechaCreacion() { return this.formulario.get('fechaCreacion'); }

  ngOnInit(): void {
    const id = this.ruta.snapshot.paramMap.get('id');
  
    const id_number = Number(id);

    this.gestion.productoByID(id_number).subscribe({
      next: (data) => {
        this.producto = data;
      },
      error: (err) => {
        console.log("Error: ", err);
      }
    })
  }


  botonModificar() {
    this.form_active = true;
  }

  actualizarProducto() {
    this.producto = this.formulario.getRawValue();
    const id = this.ruta.snapshot.paramMap.get('id');
    const id_number = Number(id);
    this.gestion.modificarProducto(id_number,this.producto).subscribe({
      next: () => {
        alert("Producto modificado");
      },
      error: (err) => {
        console.log("Error:", err );
      }
    })
    this.form_active = false;
    this.formulario.reset();
  }
 

}
