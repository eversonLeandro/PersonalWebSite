const Image = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`rounded-lg shadow-md ${className}`} />
);

export default Image;