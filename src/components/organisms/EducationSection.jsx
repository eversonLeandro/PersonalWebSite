import { Title } from "../atoms";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white relative overflow-hidden"
      aria-labelledby="education-title"
    >
      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Title
            id="education-title"
            text={
              <span className="flex items-center justify-center gap-2">
                <BookOpenIcon className="w-8 h-8 text-white" aria-hidden="true" />
                Estudios
              </span>
            }
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
                       bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent 
                       animate-gradient-x"
          />
          <p className="text-gray-300 mt-3 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Mi trayectoria educativa y formación académica.
          </p>
        </motion.div>

        {/* Tabla */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl shadow-xl border border-gray-800/50 backdrop-blur-sm"
        >
          <table className="min-w-full text-left divide-y divide-gray-700">
            <thead className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white">
              <tr>
                <th scope="col" className="px-4 py-3 text-xs sm:text-sm md:text-base font-semibold sm:px-6">
                  Institución
                </th>
                <th scope="col" className="px-4 py-3 text-xs sm:text-sm md:text-base font-semibold sm:px-6">
                  Nivel
                </th>
                <th scope="col" className="px-4 py-3 text-xs sm:text-sm md:text-base font-semibold sm:px-6">
                  Años
                </th>
                <th scope="col" className="px-4 py-3 text-xs sm:text-sm md:text-base font-semibold sm:px-6">
                  Descripción
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="hover:bg-gray-800/20 transition-colors duration-200">
                <td className="px-4 py-3 text-sm sm:text-base sm:px-6">Institución Educativa Don Bosco</td>
                <td className="px-4 py-3 text-sm sm:text-base sm:px-6">Primaria</td>
                <td className="px-4 py-3 text-sm sm:text-base sm:px-6">2010 - 2015</td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-300 sm:px-6">
                  Educación básica inicial
                </td>
              </tr>
              <tr className="hover:bg-gray-800/20 transition-colors duration-200">
                <td className="px-4 py-3 text-sm sm:text-base sm:px-6">Institución Educativa Don Bosco</td>
                <td className="px-4 py-3 text-sm sm:text-base sm:px-6">Secundaria</td>
                <td className="px-4 py-3 text-sm sm:text-base sm:px-6">2015 - 2020</td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-300 sm:px-6">
                  Formación media general
                </td>
              </tr>
              <tr className="hover:bg-gray-800/20 transition-colors duration-200">
                <td className="px-4 py-3 text-sm sm:text-base sm:px-6">Universidad del Cauca</td>
                <td className="px-4 py-3 text-sm sm:text-base sm:px-6">Profesional Universitario</td>
                <td className="px-4 py-3 text-sm sm:text-base sm:px-6">2022 - act</td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-300 sm:px-6">
                  Ingeniería de Sistemas 
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
