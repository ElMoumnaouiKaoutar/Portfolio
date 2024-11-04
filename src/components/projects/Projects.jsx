import { useRef } from "react"
import "./projects.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
  {
    id: 1,
    title: "Application Web 'SmartHealth'",
    img: "/baground.jpg",
    desc: "Déc. 2023 - Rôle : Développeuse Principale - Conception et mise en œuvre d’une application web pour le suivi des patients, optimisée pour réduire les erreurs de saisie des données grâce à l’utilisation du stack MERN.",
    tools: "MERN (MongoDB, Express.js, React.js, Node.js)"
  },
  {
    id: 2,
    title: "Plateforme de Monitoring",
    img: "/baground.jpg",
    desc: "Oct. 2023 - Rôle : Développeuse - Développement d’un système de gestion des journaux, permettant une analyse en temps réel et optimisant le temps de dépannage grâce à l’utilisation de JEE, MongoDB, Neo4j, Hadoop et SQL.",
    tools: "JEE, MongoDB, Neo4j, Hadoop, SQL"
  },
  {
    id: 3,
    title: "Site Web 'MiniFacebook'",
    img: "/baground.jpg",
    desc: "Oct. 2023 - Rôle : Développeuse Full Stack - Création d’une application de réseau social avec un chatbot ChatGPT intégré, favorisant l’engagement des utilisateurs grâce à l’utilisation de Spring Boot, Next.js, Tailwind CSS et MySQL.",
    tools: "Spring Boot, Next.js, Tailwind CSS, MySQL"
  },
  {
    id: 4,
    title: "Application de Gestion des Réservations de Billets",
    img: "/baground.jpg",
    desc: "Mai 2023 - Rôle : Développeuse - Création d’une application de gestion des réservations de billets, améliorant l’efficacité des réservations grâce à une version web développée en Java et une version mobile pour Android.",
    tools: "Java (version web), Android (version mobile)"
  },
  {
    id: 5,
    title: "Application de Classification et Prédiction de la Qualité des Fruits",
    img: "/baground.jpg",
    desc: "Mai 2023 - Rôle : Développeuse - Implémentation d’une application web pour la prédiction de la qualité des fruits, offrant une classification précise grâce à l’utilisation de Python, Flask, TensorFlow/Keras et Pillow.",
    tools: "Python, Flask, TensorFlow/Keras, Pillow"
  },
  {
    id: 6,
    title: "Plateforme 3D pour l’Artisanat Marocain 'MaroCraft'",
    img: "/baground.jpg",
    desc: "Mars 2023 - Rôle : Développeuse Frontend et Backend - Développement d’une plateforme 3D pour présenter l’artisanat marocain, améliorant la visibilité en ligne grâce à l’utilisation de React.js, JavaScript, Three.js, Node.js, PostgreSQL et Blender.",
    tools: "React.js, JavaScript, Three.js, Node.js, PostgreSQL, Blender"
  }
];


const Single = ({item})=>{
  const ref = useRef();

  const {scrollYProgress}=useScroll({
    target: ref,
    // offset: ["start start", "end start"]
   });
  
  const y = useTransform(scrollYProgress, [0,1], [-300, 300]); 

  return(
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
        
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <p>{item.tools}</p>
        </motion.div>
        </div>
      </div>
    </section>
    
  )
}
const Projects = () => {

    const ref=useRef();

    const {scrollYProgress}=useScroll({target: ref,
         offset: ["end end", "start start"],
        });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })    
  return (
    <div className="projects">
      
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Projects
