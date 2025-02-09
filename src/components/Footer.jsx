const Footer = () => {
  return (
    <footer className="bg-black text-gold py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-10 mb-6">
          <a href="/facebook" className="text-lg font-semibold hover:text-gold transition duration-300">Facebook</a>
          <a href="/about" className="text-lg font-semibold hover:text-gold transition duration-300">A propos</a>
          <a href="/contact" className="text-lg font-semibold hover:text-gold transition duration-300">Contact</a>
        </div>
        <div className="border-t border-gold mt-6 pt-4">
          <p className="text-sm text-gold">&copy; 2025 SD Bâtiment. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;