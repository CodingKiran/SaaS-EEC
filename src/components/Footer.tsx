import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-gray-900 mb-2">SaaS Growth Course</h3>
          <p className="text-gray-600 max-w-md">
            Fix the costly mistakes holding back your SaaS growth through our actionable 5-day email course.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            <Mail size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} SaaS Growth. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;