import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

interface EmailCaptureFormProps {
  onSubmit: (email: string) => void;
  isSubmitted: boolean;
}

const EmailCaptureForm: React.FC<EmailCaptureFormProps> = ({ onSubmit, isSubmitted }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 shadow-sm"
      >
        <h3 className="text-xl font-semibold mb-2">You're in! 🎉</h3>
        <p className="text-green-700">
          Check your inbox for Day 1 of your SaaS growth journey. If you don't see it within 10 minutes, please check your spam folder.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Start Your Growth Journey</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
        >
          <span>Send Me The Lessons</span>
          <ArrowRight size={18} />
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500 text-center">
        Join 2,500+ SaaS founders improving their growth strategy
      </p>
    </motion.div>
  );
};

export default EmailCaptureForm;