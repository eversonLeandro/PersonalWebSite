import { Title, Paragraph, Image } from '../atoms';

const HobbyCard = ({ title, description, imageSrc }) => (
  <div
    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-700/50 group relative overflow-hidden"
    role="article"
    aria-label={`Tarjeta de ${title}`}
  >
    <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
      <Image
        src={imageSrc}
        alt={`${title} - Imagen representativa`}
        className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/60"></div>
    </div>
    <Title
      text={title}
      className="text-center text-lg sm:text-xl font-bold mb-2 text-white truncate"
    />
    <Paragraph
      text={description}
      className="text-center text-sm sm:text-base text-gray-200 leading-relaxed line-clamp-3 "
    />
  </div>
);

export default HobbyCard;