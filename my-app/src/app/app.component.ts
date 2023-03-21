import { Component } from '@angular/core';
import { INotificacion } from './interfaces/INotificacion';
import { mensajeInformacion, mensajeAdvertencia, mensajeError } from './MensajesNotificaciones';
import { NotificacionService } from './notificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  mensajeInformacion = mensajeInformacion
  mensajeAdvertencia =mensajeAdvertencia
  mensajeError = mensajeError 

  constructor(public servicioNotificaciones: NotificacionService){

  }

  crearNuevaNotificacion(titulo: string, mensaje: string, tipoNotificacion: "error" | "advertencia" | "informacion"){
    const notificacionNueva: INotificacion = {
      titulo: titulo,
      mensaje: mensaje,
      tipoNotificacion: tipoNotificacion,
      fechaHora: new Date()
    }
    this.servicioNotificaciones.notificar(notificacionNueva)
  }

  limpiarMensajes(){
    this.servicioNotificaciones.limpiarNotificaciones()
  }
}
