import { motion } from "framer-motion";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "./Contact";

const HeroSection = () => (
  <section className="relative h-screen text-white">
    {/* Background Video */}
    <video
      className="absolute inset-0 w-full h-full object-cover "
      src="/backgroundvideo.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    
    {/* Overlay for Text Readability */}
    <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center">
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl text-center"
      >
        Construisons Votre Avenir
      </motion.h1>
      
      {/* Animated Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg text-center"
      >
        Expert en construction et rénovation
      </motion.p>
      
      {/* Logo and Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col mt-8 items-center justify-center"
      >
        <img src="/new-design.png" alt="SD Bâtiment" className="h-94 mb-4" />
        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200">
          Contactez-nous
        </button>
      </motion.div>
    </div>
  </section>
);

const Landing = () => (
  <>
    <HeroSection />
    <ProjectsSection />
    <Contact />
  </>
);

export default Landing;
