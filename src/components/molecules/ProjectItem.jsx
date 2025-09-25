import { Paragraph } from '../atoms';

// Este componente representa la insignia para cada tecnología.
// Es un átomo que vamos a usar en nuestra molécula ProjectItem.
const TechBadge = ({ children, color }) => {
  const badgeColors = {
    'csharp': 'bg-blue-600 text-white',
    'oracle': 'bg-red-600 text-white',
    'winforms': 'bg-green-600 text-white',
    'react': 'bg-sky-500 text-sky-900',
    'tailwind': 'bg-teal-500 text-teal-900',
    'javascript': 'bg-yellow-400 text-yellow-900',
    'html': 'bg-orange-600 text-white',
    'css': 'bg-blue-600 text-white',
    'p5.js': 'bg-purple-600 text-white',
    'spring boot': 'bg-purple-600 text-green',
    'microservices': 'bg-sky-500 text-sky-900',
    'c#': 'bg-sky-500 text-sky-900',
   
  };

  const backgroundColor = badgeColors[color.toLowerCase()] || 'bg-gray-600 text-white';

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${backgroundColor}`}>
      {children}
    </span>
  );
};

const ProjectItem = ({ name, description, technologies, link, demoLink }) => (
  <div
    className="bg-gray-800 rounded-3xl p-6 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-3xl border border-gray-700/50 backdrop-blur-sm flex flex-col h-full"
    role="article"
    aria-label={`Proyecto: ${name}`}
  >
    {/* Contenedor del ícono y el título */}
    <div className="flex items-center space-x-4 mb-4">
      {/* Icono del proyecto */}
      <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
        <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-0 leading-tight line-clamp-2 flex-1">
        {name}
      </h3>
    </div>
    
    <Paragraph
      text={description}
      className="text-slate-400 text-sm sm:text-base mb-4 flex-grow"
    />

    {/* Etiquetas de tecnologías */}
    {technologies && (
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, index) => (
          <TechBadge key={index} color={tech}>{tech}</TechBadge>
        ))}
      </div>
    )}

    {/* Contenedor de botones */}
    <div className="mt-auto flex space-x-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors duration-200"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414a1 1 0 00-.707-.293H7a2 2 0 00-2 2v11a2 2 0 002 2z" />
        </svg>
        <span>Ver Código</span>
      </a>

    </div>
  </div>
);

export default ProjectItem;