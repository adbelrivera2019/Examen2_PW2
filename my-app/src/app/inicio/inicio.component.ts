import { Component } from '@angular/core';
import { INotificacion } from '../interfaces/INotificacion';
import { NotificacionService } from '../notificacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(public servicioNotificaciones: NotificacionService) { }
  notificar(){
    const notificacionNueva: INotificacion = {
      titulo: "Usuario ingresó al sistema",
      mensaje: "Usuario autenticado, bienvenido",
      tipoNotificacion: "informacion",
      fechaHora: new Date()
    }
    this.servicioNotificaciones.notificar(notificacionNueva)
  }
}
