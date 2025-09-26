import { useState, useEffect } from 'react';
import hobby1 from '../../assets/hobby1.jpeg';
import hobby2 from '../../assets/hobby2.jpg';
import hobby3 from '../../assets/hobby3.jpeg';
import { Title } from '../atoms';
import { motion } from "framer-motion";

const hobbiesData = [
  {
    title: "Gaming",
    description: "En mi tiempo libre disfruto jugar videojuegos desafiantes...",
    imageSrc: hobby1,
  },
  {
    title: "Ping-Pong",
    description: "Un deporte que me llama mucho la atención es el tenis de mesa...",
    imageSrc: hobby2,
  },
  {
    title: "Lectura",
    description: "Me apasiona la lectura, especialmente de libros de fantasía...",
    imageSrc: hobby3,
  },
];

const HobbiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hobbiesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };
  const nextSlide = () => goToSlide((currentIndex + 1) % hobbiesData.length);
  const prevSlide = () => goToSlide((currentIndex - 1 + hobbiesData.length) % hobbiesData.length);

  return (
    <section
      id="hobbies"
      className="py-20 bg-gradient-to-b from-slate-900 via-gray-900 to-black text-gray-200 relative overflow-hidden"
      aria-labelledby="hobbies-title"
    >
      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <Title
            id="hobbies-title"
            text="Pasatiempos"
            className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent"
          />
          <p className="text-gray-400 text-center mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Actividades que disfruto en mi tiempo libre.
          </p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="relative h-80 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <img
                src={hobbiesData[currentIndex].imageSrc}
                alt={hobbiesData[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3"
                  >
                    {hobbiesData[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl"
                  >
                    {hobbiesData[currentIndex].description}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Botones */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-3">
            {hobbiesData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 focus:outline-none ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-400 rounded-full'
                }`}
                aria-label={`Ver ${hobbiesData[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
