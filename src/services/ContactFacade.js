import { ContactRepository } from './ContactRepository';
import { Contacto } from './ContactEntity';

const repository = new ContactRepository();

export const ContactFacade = {
  
  guardarContacto: (datosFormulario) => {
    const { nombre, email, telefono, motivo, mensaje, aceptaTerminos, preferenciaContacto } = datosFormulario;
    const nuevoContacto = new Contacto(
      null, // El ID se genera automáticamente
      nombre,
      email,
      telefono,
      motivo,
      mensaje,
      aceptaTerminos,
      preferenciaContacto
    );
    repository.add(nuevoContacto);
  },

  // List all contacts
  listarContactos: () => {
    return repository.getAll();
  },

  // Delete a single contact
  eliminarContacto: (id) => {
    repository.remove(id);
  },

  // Clear all contacts
  borrarTodo: () => {
    repository.clear();
  },
};