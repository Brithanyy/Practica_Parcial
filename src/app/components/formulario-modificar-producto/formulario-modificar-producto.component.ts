import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestionProductosService } from '../../services/gestion-productos.service';

@Component({
  selector: 'app-formulario-modificar-producto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-modificar-producto.component.html',
  styleUrl: './formulario-modificar-producto.component.css'
})
export class FormularioModificarProductoComponent {

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


  get nombre() { return this.formulario.get('nombre');}
  get descripcion() { return this.formulario.get('descripcion'); }
  get precio() { return this.formulario.get('precio'); }
  get categoria() { return this.formulario.get('categoria'); }
  get stock() { return this.formulario.get('stock'); }
  get fechaCreacion() { return this.formulario.get('fechaCreacion'); }

}
