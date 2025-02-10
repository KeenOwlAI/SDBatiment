const About = () => {
  return (
    <section className="bg-[#3A3A3A] text-white py-16 mt-12">
      {/* Title Section */}
      <div className=" mx-auto text-center mb-16">
        <h1 className="text-4xl text-gold mb-4 animate__animated animate__fadeInUp">À propos de nous</h1>
        <p className="text-lg text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
          Votre partenaire de confiance dans la construction durable et innovante.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        <div className="space-y-6 animate__animated animate__fadeInLeft animate__delay-1s">
          <h2 className="text-3xl text-gold">Notre Mission</h2>
          <p className="text-lg text-gray-100">
            Nous nous engageons à fournir des services de construction de qualité supérieure tout en respectant les
            normes écologiques. Notre expertise et notre passion pour la construction durable nous permettent de
            réaliser des projets qui allient esthétique et fonctionnalité.
          </p>
        </div>
        <div className="container space-y-6 animate__animated animate__fadeInRight animate__delay-1s">
          <h2 className="text-3xl  text-gold">Nos Valeurs</h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-100">
            <li>Innovation et Excellence</li>
            <li>Durabilité et Responsabilité</li>
            <li>Respect et Engagement envers nos clients</li>
            <li>Collaboration et Esprit d’équipe</li>
          </ul>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="container mx-auto text-center my-16 px-6 animate__animated animate__fadeIn animate__delay-2s">
        <h2 className="text-3xl text-gold mb-6">Nos Services</h2>
        <p className="text-lg text-gray-300 mb-12">Nous proposons une large gamme de services dans le secteur de la construction.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl text-gold">Construction Résidentielle</h3>
            <p className="text-gray-100">
              Construction de maisons modernes et écologiques adaptées à vos besoins et à votre budget.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-gold">Rénovation</h3>
            <p className="text-gray-100">
              Rénovation de bâtiments pour moderniser et améliorer les espaces de vie tout en préservant leur charme
              d’origine.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-gold">Gestion de Projet</h3>
            <p className="text-gray-100">
              Planification et gestion de projet de A à Z, pour assurer une exécution parfaite, dans le respect des
              délais et du budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
