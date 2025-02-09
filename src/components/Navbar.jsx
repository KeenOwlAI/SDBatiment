import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
      <img src="/new-design.png" alt="SD Bâtiment" className="h-10 mr-4" />
        <h1 className="text-xl font-bold">SD BÂTIMENT</h1>
        
        <ul className={`md:flex sm:hidden space-x-6 ${isOpen ? "block" : "hidden"}`}>
          <li><Link to="/" className="hover:text-gray-400">Accueil</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">À Propos</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
