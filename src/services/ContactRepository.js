import { Contacto } from './ContactEntity';

const STORAGE_KEY = 'contactos';

export class ContactRepository {
  constructor() {
    // Inicializar el almacenamiento si no existe
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
  }

  // Get all contacts from localStorage
  getAll() {
    const data = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(data).map(item => Object.assign(new Contacto(), item));
  }

  // Find a contact by its ID
  getById(id) {
    const contacts = this.getAll();
    return contacts.find(contact => contact.id === id);
  }

  // Add a new contact
  add(contacto) {
    const contacts = this.getAll();
    contacts.push(contacto);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }

  // Update an existing contact
  update(contacto) {
    const contacts = this.getAll();
    const index = contacts.findIndex(c => c.id === contacto.id);
    if (index !== -1) {
      contacto.fechaActualizacion = new Date().toISOString();
      contacts[index] = contacto;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    }
  }

  // Remove a contact by its ID
  remove(id) {
    const contacts = this.getAll();
    const filtered = contacts.filter(contact => contact.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }
  
  // Clear all contacts
  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
}