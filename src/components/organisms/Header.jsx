import { Title } from "../atoms";

const Header = () => {
  const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#education", label: "Estudios" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#projects", label: "Proyectos" },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white py-2 shadow-2xl sticky top-0 z-50 backdrop-blur-sm border-b border-gray-800/50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Título principal */}
      <div className="flex items-center">
      <Title
        text="Mi Página Personal"
        className="
          text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight
          bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400
          bg-clip-text text-transparent
          animate-gradient-x
        "
      />
      </div>

        {/* Navegación desktop */}
        <nav className="hidden md:block" role="navigation" aria-label="Menú principal">
          <ul className="flex space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a 
                  href={href} 
                  className="relative px-2 py-1 transition-all duration-300 hover:text-white/90 group"
                >
                  <span className="relative z-10">{label}</span>
                  {/* Línea animada */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                className="px-3 py-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105 font-medium text-sm"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Menú móvil (hamburguesa) */}
        <button 
          className="md:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40" 
          aria-label="Abrir menú de navegación"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2} 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;