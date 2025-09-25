import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ContactFacade } from '../../services/ContactFacade';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: '',
    mensaje: '',
    aceptaTerminos: false,
    preferenciaContacto: '',
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    setContactos(ContactFacade.listarContactos());
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.nombre.trim()) errors.nombre = 'El nombre es obligatorio.';
    if (!formData.email.trim()) errors.email = 'El email es obligatorio.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Formato de email inválido.';
    if (!formData.aceptaTerminos) errors.aceptaTerminos = 'Debe aceptar los términos y condiciones.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setSuccessMessage('');
    } else {
      setValidationErrors({});
      try {
        ContactFacade.guardarContacto(formData);
        setSuccessMessage('¡Gracias por tu mensaje! Hemos recibido tu información.');
        setFormData({
          nombre: '', email: '', telefono: '', motivo: '', mensaje: '', aceptaTerminos: false, preferenciaContacto: ''
        });
        setContactos(ContactFacade.listarContactos());
      } catch (error) {
        setSuccessMessage('Error al guardar el contacto.');
      }
    }
  };

  const handleClearAll = () => {
    if (window.confirm('¿Estás seguro de que deseas borrar todos los contactos?')) {
      ContactFacade.borrarTodo();
      setContactos([]);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
      ContactFacade.eliminarContacto(id);
      setContactos(ContactFacade.listarContactos());
    }
  };

  return (
    <section 
      id="contact"
      className="py-10 bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            id="contact-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-gradient-x mb-4"
          >
            Contacto
          </h2>
          <p className="text-gray-300 text-center mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            ¿Tienes algún proyecto en mente? ¡Me encantaría escucharte!
          </p>
        </motion.div>

        {/* Success Message */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm">
              <p className="text-green-300 text-center font-medium">{successMessage}</p>
            </div>
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <form 
            onSubmit={handleSubmit} 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Nombre */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label className="block mb-2 text-sm font-medium text-gray-200">Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-700/50 border border-gray-600/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 placeholder-gray-400"
                  placeholder="Tu nombre completo"
                />
                {validationErrors.nombre && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {validationErrors.nombre}
                  </motion.p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label className="block mb-2 text-sm font-medium text-gray-200">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-700/50 border border-gray-600/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 placeholder-gray-400"
                  placeholder="tu@email.com"
                />
                {validationErrors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {validationErrors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Teléfono */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label className="block mb-2 text-sm font-medium text-gray-200">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-700/50 border border-gray-600/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 placeholder-gray-400"
                  placeholder="+1 234 567 8900"
                />
              </motion.div>

              {/* Motivo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label className="block mb-2 text-sm font-medium text-gray-200">Motivo</label>
                <select
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-700/50 border border-gray-600/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-gray-200"
                >
                  <option value="">Selecciona un motivo</option>
                  <option value="consulta">Consulta</option>
                  <option value="propuesta">Propuesta de proyecto</option>
                  <option value="empleo">Oportunidad de empleo</option>
                </select>
              </motion.div>
            </div>

            {/* Mensaje */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mb-6"
            >
              <label className="block mb-2 text-sm font-medium text-gray-200">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 rounded-xl bg-gray-700/50 border border-gray-600/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 placeholder-gray-400 resize-none"
                placeholder="Cuéntame sobre tu proyecto o consulta..."
              />
            </motion.div>

            {/* Preferencia de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mb-6"
            >
              <label className="block mb-3 text-sm font-medium text-gray-200">Preferencia de contacto:</label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="preferenciaContacto"
                    value="email"
                    checked={formData.preferenciaContacto === 'email'}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-200 group-hover:text-white transition-colors">Email</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="preferenciaContacto"
                    value="telefono"
                    checked={formData.preferenciaContacto === 'telefono'}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-200 group-hover:text-white transition-colors">Teléfono</span>
                </label>
              </div>
            </motion.div>

            {/* Términos y condiciones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mb-8"
            >
              <label className="flex items-start cursor-pointer group">
                <input
                  type="checkbox"
                  name="aceptaTerminos"
                  checked={formData.aceptaTerminos}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2 mt-0.5"
                />
                <span className="ml-2 text-sm text-gray-200 group-hover:text-white transition-colors">
                  Acepto los términos y condiciones *
                </span>
              </label>
              {validationErrors.aceptaTerminos && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-400"
                >
                  {validationErrors.aceptaTerminos}
                </motion.p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg hover:shadow-xl transform"
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>

        {/* Saved Contacts Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Contactos Guardados
          </h3>
          
          {contactos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex justify-center mb-8"
            >
              <button
                onClick={handleClearAll}
                className="py-3 px-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Borrar Todos
              </button>
            </motion.div>
          )}
          
          {contactos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="max-w-sm mx-auto">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg">No hay contactos guardados</p>
                <p className="text-gray-500 text-sm mt-2">Los mensajes enviados aparecerán aquí</p>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {contactos.map((contacto, index) => (
                <motion.div
                  key={contacto.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:border-gray-600/50"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-white group-hover:text-blue-300 transition-colors">
                        {contacto.nombre}
                      </h4>
                      <p className="text-sm text-gray-300 flex items-center mt-1">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {contacto.email}
                      </p>
                      {contacto.telefono && (
                        <p className="text-sm text-gray-300 flex items-center mt-1">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {contacto.telefono}
                        </p>
                      )}
                      {contacto.motivo && (
                        <div className="mt-2">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                            {contacto.motivo}
                          </span>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleDelete(contacto.id)}
                      className="ml-4 text-gray-400 hover:text-red-400 transition-colors duration-200 p-2 rounded-lg hover:bg-red-500/10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  
                  {contacto.mensaje && (
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm leading-relaxed bg-gray-700/30 p-3 rounded-lg border border-gray-600/30">
                        {contacto.mensaje}
                      </p>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-xs text-gray-500 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Creado:</span>
                      <span className="ml-1">{new Date(contacto.fechaCreacion).toLocaleString()}</span>
                    </p>
                    {contacto.fechaActualizacion && (
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span className="font-medium">Actualizado:</span>
                        <span className="ml-1">{new Date(contacto.fechaActualizacion).toLocaleString()}</span>
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;