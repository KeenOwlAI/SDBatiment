import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black border-b-2 border-gold text-white p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-blaka hover:text-gray-400">
            SD BÂTIMENT
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 lg:gap-16">
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="hover:text-gold active-link">
              Accueil
            </Link>
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/about" className="hover:text-gold active-link">
              À Propos
            </Link>
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/contact" className="hover:text-gold active-link">
              Contact
            </Link>
          </motion.p>
        </div>
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-2"
        >
          <ul className="flex flex-col space-y-2">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-800 hover:text-gray-400"
              >
                Accueil
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-gray-800 hover:text-gray-400"
              >
                À Propos
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/contact"
                className="block px-4 py-2 hover:bg-gray-800 hover:text-gray-400"
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
