import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_e8dw4qz", // Replace with your actual Service ID
      "template_0k5gdda", // Replace with your actual Template ID
      formData,
      "JGNUSxtLsoovshyg9" // Replace with your Public Key
    )
    .then((response) => {
      console.log("Email sent successfully:", response);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-8 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/project11.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative z-10 mt-[25%]"
      >
        <h1 className="text-5xl text-gray-900 text-center">Contactez nous</h1>
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
                className="text-black w-full mt-1 px-4 py-2 border border-black rounded focus:ring focus:ring-yellow-300 focus:outline-none"
                placeholder="Entrez votre nom"
              />
            </div>

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
                className="text-black w-full mt-1 px-4 py-2 border border-black rounded focus:ring focus:ring-yellow-300 focus:outline-none"
                placeholder="Entrez votre email"
              />
            </div>

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
                className="text-black w-full mt-1 px-4 py-2 border border-black rounded focus:ring focus:ring-yellow-300 focus:outline-none h-32 resize-none"
                placeholder="Entrez votre message"
              ></motion.textarea>
            </div>

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
