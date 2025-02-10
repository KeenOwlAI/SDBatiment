import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate a form submission process
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black-to-r from-blue-500 to-purple-600 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full"
      >
        <h1 className="text-5xl text-gray-900 text-center">Contactez-nous</h1>
        <p className="text-center text-gray-600 mt-2">
          contact@sd-batiment.fr | +33 6 33 66 50 55
        </p>

        {!isSubmitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 space-y-6"
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Nom complet
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.05, borderColor: "#e2c37646" }}
                transition={{ duration: 0.3 }}
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring focus:ring-yellow-300 focus:outline-none"
                placeholder="Entrez votre nom"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.05, borderColor: "#e2c37646" }}
                transition={{ duration: 0.3 }}
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring focus:ring-yellow-300 focus:outline-none"
                placeholder="Entrez votre email"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.05, borderColor: "#e2c37646" }}
                transition={{ duration: 0.3 }}
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring focus:ring-yellow-300 focus:outline-none h-32 resize-none"
                placeholder="Entrez votre message"
              ></motion.textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1, backgroundColor: "#e2c37646" }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 text-white font-bold rounded-xl shadow-md hover:bg-orange focus:outline-none"
            >
              Envoyer
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-900">Merci pour votre message!</h2>
            <p className="text-gray-600 mt-2">Nous vous répondrons dans les plus brefs délais.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
