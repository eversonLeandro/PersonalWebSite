const Title = ({ text, className }) => (
  <h2 className={`text-4xl font-bold text-gray-900 mb-6 tracking-tight ${className}`}>
    {text}
  </h2>
);

export default Title;