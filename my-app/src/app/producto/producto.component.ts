import { Component } from '@angular/core';
import { IProducto } from '../interfaces/IProducto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  agregarP(){
    const clienteNuevo: IProducto = {
      nombre: "",
      categoria: '',
      precio: 0
    }
}
buscar(){
  
}
}
