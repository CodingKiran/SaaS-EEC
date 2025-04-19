import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center"
    >
      <div className="flex items-center space-x-2 text-blue-600">
        <Rocket size={24} />
        <span className="font-bold text-lg">SaaS Growth</span>
      </div>
    </motion.header>
  );
};

export default Header;
