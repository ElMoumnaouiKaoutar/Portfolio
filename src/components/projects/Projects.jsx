import { useRef } from "react"
import "./projects.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
  {
    id: 1,
    title: "SmartHealth Web Application",
    role: "Full Stack Developer",
    date: "Dec. 2023",
    img: "/baground.jpg",
    desc: "Design and implementation of a web application for patient monitoring, optimized to reduce data entry errors using the MERN stack.",
    tools: "MERN (MongoDB, Express.js, React.js, Node.js)"
  },
  {
    id: 2,
    title: "Monitoring Platform",
    role: "Full Stack Developer",
    date: "Oct. 2023",
    img: "/monitoring.jpg",
    desc: "Development of a log management system, enabling real-time analysis and optimizing troubleshooting time using JEE, MongoDB, Neo4j, Hadoop, and SQL.",
    tools: "JEE, MongoDB, Neo4j, Hadoop, SQL"
  },
  {
    id: 3,
    title: "MiniFacebook Website",
    role: "Full Stack Developer",
    date: "Oct. 2023",
    img: "/facebook.jpg",
    desc: "Creation of a social networking application with an integrated ChatGPT chatbot, enhancing user engagement using Spring Boot, Next.js, Tailwind CSS, and MySQL.",
    tools: "Spring Boot, Next.js, Tailwind CSS, MySQL"
  },
  {
    id: 4,
    title: "Ticket Reservation Management Application",
    role: "Full Stack Developer",
    date: "May 2023",
    img: "/ticket.png",
    desc: "Creation of a ticket reservation management application, improving booking efficiency with a web version developed in Java and a mobile version for Android.",
    tools: "Java (web version), Android (mobile version)"
  },
  {
    id: 5,
    title: "Fruit Quality Classification and Prediction Application",
    role: "Full Stack Developer",
    date: "May 2023",
    img: "/fruit.jpeg",
    desc: "Implementation of a web application for fruit quality prediction, providing accurate classification using Python, Flask, TensorFlow/Keras, and Pillow.",
    tools: "Python, Flask, TensorFlow/Keras, Pillow"
  },
  {
    id: 6,
    title: "3D Platform for Moroccan Crafts 'MaroCraft'",
    role: "Full Stack Developer",
    date: "Mar. 2023",
    img: "/artisanat.jpg",
    desc: "Development of a 3D platform to showcase Moroccan crafts, enhancing online visibility using React.js, JavaScript, Three.js, Node.js, PostgreSQL, and Blender.",
    tools: "React.js, JavaScript, Three.js, Node.js, PostgreSQL, Blender"
  }
];



const Single = ({item})=>{
  const ref = useRef();

  const {scrollYProgress}=useScroll({
    target: ref,
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
          <p><strong>My role:</strong> {item.role}</p>
          <p><strong>Date: </strong>{item.date}</p>
          <p><strong>Description: </strong>{item.desc}</p>
          <p><strong>Tools:</strong> {item.tools}</p>
          {/* <button>DEMO</button> */}
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
