import profile from '../../assets/profile.png';
import { Title, Paragraph, Button } from '../atoms';
import { motion } from "framer-motion";

const HomeSection = () => (
  <section 
    id="home" 
    className="min-h-screen px-6 flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden relative"
  >
    {/* Fondos animados más simples */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="container mx-auto max-w-6xl relative z-10">
      <div className="grid md:grid-cols-2 items-center gap-10">
        
        {/* Imagen de perfil con animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400 p-[2px]"
            >
              <div className="w-full h-full rounded-full bg-gray-900"></div>
            </motion.div>

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-gray-700/40 p-3 shadow-2xl overflow-hidden">
              <img 
                src={profile} 
                alt="Foto de perfil de Juan Pérez" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
          </div>
        </motion.div>

        {/* Contenido */}
        <div className="text-center md:text-left space-y-6">
          {/* Saludo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-lg text-sky-400 font-semibold mb-2">
              <span className="inline-block mr-2"></span>
              ¡Hola, soy!
            </div>

            <Title
              text="Everson Restrepo"
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent"
            />

            <motion.div
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200%" }}
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">Ingeniero de Sistemas</span>
            </motion.div>
          </motion.div>

          {/* Tags y descripción */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {['Desarrollador Web', 'Full Stack', 'Innovador'].map((tag, index) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 text-sm text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Paragraph
              text="Soy estudiante de Ingeniería de Sistemas en la Universidad del Cauca, apasionado por el desarrollo de software y con enfoque en backend, frontend y bases de datos. Soy proactivo, trabajo en equipo y aprendo constantemente de los demás, buscando crecer profesionalmente y aportar soluciones tecnológicas a los desafíos de la sociedad."
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
            />
          </div>
              
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <Button href="#projects"
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition text-white font-semibold px-8 py-3 rounded-xl shadow-lg">
              Ver Proyectos
            </Button>
            <Button className="border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition text-white font-semibold px-8 py-3 rounded-xl">
              Descargar CV
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-6 sm:gap-8 pt-4 border-t border-gray-700/30">
            {[
              { number: '10+', label: 'Años de Experiencia' },
              { number: '15+', label: 'Proyectos Completados' },
              { number: '5+', label: 'Tecnologías' }
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-sky-400">{stat.number}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeSection;
