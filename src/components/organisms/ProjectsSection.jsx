import { Title } from '../atoms';
import { ProjectItem } from '../molecules'; // Asegúrate de que este es el path correcto
import { motion } from "framer-motion";

const projectsData = [
  {
    name: "Sitio Web Personal",
    description: "Desarrollo de una página web usando React y Tailwind CSS para mostrar mi portafolio y habilidades.",
    technologies: ["React", "Tailwind","css"],
    link: "#",
     // Asegúrate de tener un enlace de demo si lo necesitas
  },
  {
    name: "Proyecto miniMarket",
    description: "Sistema para gestionar compras, inventario e informes en un minimarket, optimizando la administración del establecimiento.",
    technologies: ["C#","winforms"],
    link: "#",

  },
  {
    name: "Gestor de Proyectos Académicos",
    description: "Sistema web que facilita la ejecución de proyectos de software empresariales por parte de estudiantes avanzados.",
    technologies: ["Oracle", "Spring Boot","Microservices"],
    link: "#",
    
  },
];

const ProjectsSection = () => (
  <section
    id="projects"
    className="py-10 bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white"
    aria-labelledby="projects-title"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <Title
          id="projects-title"
          text="Proyectos"
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-gradient-x mb-4"
        />
        <p className="text-gray-300 text-center mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Algunos de los proyectos en los que he trabajado.
        </p>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <ProjectItem
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              demoLink={project.demoLink}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;