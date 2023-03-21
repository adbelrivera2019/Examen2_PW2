import { Component } from '@angular/core';
import { ICliente } from '../interfaces/ICliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  agregarC(){
    const clienteNuevo: ICliente = {
      nombre: "",
      apellido: '',
      edad: 0,
      ciudad: '',
      telefono: 0
    }
}
}
