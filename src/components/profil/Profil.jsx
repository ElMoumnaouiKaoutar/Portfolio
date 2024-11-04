import "./profil.scss"
import {motion} from "framer-motion"

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Profil = () => {
  return (
    <motion.div className="services" variants={variants} initial="initial" animate="animate">
        <motion.div className="textContainer" variants={variants}>
            <p>
                Designing experiences, developing skills,
                <br/>and delivering results.  
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <h1><b>About</b> Me</h1>
                <p className="aboutMe">
                Software engineer with a degree from the Faculty of Sciences and Techniques of Marrakech, 
                specializing in web application development using Spring Boot,
                 React JS,
                  and the MERN stack. 
                  I have experience designing and developing scalable applications
                   while enhancing my skills in solving complex problems.
                    Passionate about new technologies and best practices,
                     <b>I am currently seeking opportunities to contribute to innovative and ambitious tech projects.</b>
                </p>
            </div>
        </motion.div>
        <h1 className="education">EDUCATION</h1>
        <motion.div className="listContainer" variants={variants}>
            <motion.div
             className="box"
            //  whileHover={{background:"lightgray", color:"black"}}
             >
                <h4>2018-2019</h4>
                <h2>BACCALAUREATE</h2>
                <h3>Attaouia, El Kelaa Des Sraghna</h3>

            </motion.div>
            <motion.div
             className="box"
            //  whileHover={{background:"lightgray", color:"black"}}
             >
                <h4>2019-2021</h4>
                <h2>University Degree in Scientific and Technical Studies</h2>
                <h3>Cadi Ayyad University, Faculty of Sciences and Techniques, Marrakech</h3>

            </motion.div>
            <motion.div
             className="box"
            //  whileHover={{background:"lightgray", color:"black"}}
             >
                <h4>2021-2024</h4>
                <h2>Engineering Degree in Networks and Information Systems</h2>
                <h3>Cadi Ayyad University, Faculty of Sciences and Techniques, Marrakech</h3>

            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Profil