// Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-gold py-12 overflow-hidden bottom-0 fixed w-full">
      <div className="absolute inset-0">
        <img
          src="heroimage.jpg"
          alt="Background"
          className="opacity-20 object-cover w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
            <motion.a
              href="/facebook"
              className="text-lg font-semibold hover:text-white transition duration-300 flex items-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebook className="mr-2" /> Facebook
            </motion.a>
            <motion.a
              href="/about"
              className="text-lg font-semibold hover:text-white transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              A propos
            </motion.a>
            <motion.a
              href="/contact"
              className="text-lg font-semibold hover:text-white transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-4">
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebook className="text-3xl" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram className="text-3xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin className="text-3xl" />
            </motion.a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gold" />
            <p className="text-gold">contact@sd-batiment.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gold" />
            <p className="text-gold">+33 6 33 66 50 55</p>
          </div>
        </div>
        <div className="border-t border-gold mt-6 pt-4 text-center">
          <p className="text-sm text-gold">&copy; 2025 SD Bâtiment. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
