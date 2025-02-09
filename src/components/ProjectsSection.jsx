import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Les Soins Vanxains", img: "/project5.jpg", span: 2 },
  { id: 2, title: "Bourg-Du-Bost", img: "/project6.jpg", span: 1 },
  { id: 3, title: "Vertillac", img: "/project 7.jpg", span: 2 },
  { id: 4, title: "Villa de Luxe", img: "/project8.jpg", span: 1 },
  { id: 5, title: "Les Soins Vanxains", img: "/project9.jpg", span: 2 },
  { id: 6, title: "Les Soins Vanxains", img: "/project10.jpg", span: 1 },
  { id: 7, title: "Les Soins Vanxains", img: "/project102.jpg", span: 2 },
  { id: 8, title: "Villa de Luxe", img: "/project11.jpg", span: 1 },
  { id: 9, title: "Villa de Luxe", img: "/project12.jpg", span: 2 },
];

export default function ProjectsSection() {
  return (
    <section className="projects">
      <h2 className="section-title">Quelques réalisations</h2>
      <motion.div
        className="projects-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`project-card project-span-${project.span}`}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 50 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.img} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
