const Paragraph = ({ text, className }) => (
  <p className={`text-lg text-gray-600 leading-relaxed ${className}`}>
    {text}
  </p>
);

export default Paragraph;