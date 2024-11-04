import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./experiences.scss"

const experiences = [
  {
    id: 1,
    title: "Stagiaire, Adria Business & Technology (Fév. 2024 - Juin 2024)",
    content: `Rôle : Développeuse - Développement de processus batch optimisés réduisant significativement le temps de traitement des déclarations de paiement et des demandes de rapports avec Spring Boot et Spring Batch. - Création d’interfaces utilisateur améliorées pour la gestion des profils avec React.js, SQL Developer et SASS, offrant une meilleure expérience utilisateur.`
  },
  {
    id: 2,
    title: "Stagiaire, Adria Business & Technology (Juil. 2023 - Sept. 2023)",
    content: `Rôle : Développeuse - Développement d’une plateforme web pour la gestion des bénéficiaires, améliorant la vitesse de récupération des données grâce à l’utilisation de Spring Boot, MySQL, React.js et Bootstrap.`
  }
];

const Experiences = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="accordion-container">
      {experiences.map((exp) => (
        <div key={exp.id} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleItem(exp.id)}>
            <h3>{exp.title}</h3>
            <motion.div
              className="icon"
              animate={{ rotate: openItem === exp.id ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openItem === exp.id ? "−" : "+"}
            </motion.div>
          </div>
          {openItem === exp.id && (
            <motion.div
              className="accordion-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>{exp.content}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experiences;
