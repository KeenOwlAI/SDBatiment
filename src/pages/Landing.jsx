import { motion } from "framer-motion";
import ProjectsSection from "../components/SectionProjets";
import Contact from "./Contact";

const HeroSection = () => (
  <section className="relative h-screen text-white my-auto mt-[80px]">
    <video
      className="absolute inset-0 w-full h-full object-cover "
      src="/backgroundvideo.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    
    <div className="relative inset-0 bg-opacity-50 flex flex-col justify-center items-center mt-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        Construisons Votre Avenir
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg text-center"
      >
        Expert en construction et rénovation
      </motion.p>
      
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="flex flex-col mt-8 items-center justify-center"
    >
      
      <img src="/new-design.png" alt="SD Bâtiment" className="h-60 mb-4 relative z-10" />
      <button 
      onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
      className="relative bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200">
        Contactez-nous
      </button>
      <div className="light-ball"></div>
      
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
