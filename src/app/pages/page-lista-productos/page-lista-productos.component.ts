import { Component } from '@angular/core';
import { ListaProductosComponent } from "../../components/lista-productos/lista-productos.component";

@Component({
  selector: 'app-page-lista-productos',
  standalone: true,
  imports: [ListaProductosComponent],
  templateUrl: './page-lista-productos.component.html',
  styleUrl: './page-lista-productos.component.css'
})
export class PageListaProductosComponent {

}
