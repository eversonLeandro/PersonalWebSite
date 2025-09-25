import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, href, children, className, ...props }) => {
  const content = children || text;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      {...props}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.25)" }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block px-6 py-3 rounded-lg font-semibold bg-custom-indigo text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ${className}`}
    >
      {content}
    </MotionComponent>
  );
};

export default Button;
