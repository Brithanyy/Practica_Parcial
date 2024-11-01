import { Component } from '@angular/core';
import { FormularioAgregarProductoComponent } from "../../components/formulario-agregar-producto/formulario-agregar-producto.component";

@Component({
  selector: 'app-page-agregar-producto',
  standalone: true,
  imports: [FormularioAgregarProductoComponent],
  templateUrl: './page-agregar-producto.component.html',
  styleUrl: './page-agregar-producto.component.css'
})
export class PageAgregarProductoComponent {

}
