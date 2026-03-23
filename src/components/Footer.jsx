import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400 text-base">
        <p>&copy; {currentYear} Sakshi Yadav. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-500">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
