// Data model for a contact
export class Contacto {
  constructor(id, nombre, email, telefono, motivo, mensaje, aceptaTerminos, preferenciaContacto) {
    this.id = id || Date.now();
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.motivo = motivo;
    this.mensaje = mensaje;
    this.aceptaTerminos = aceptaTerminos;
    this.preferenciaContacto = preferenciaContacto;
    this.fechaCreacion = new Date().toISOString();
    this.fechaActualizacion = null;
  }
}