import React from 'react'
import {motion} from "framer-motion"
import "./experience.scss"

const experiences = [
    {
      id: 1,
      date: "February. 2024 - June 2024, Casablanca",
      title: "SOFTWARE ENGINEER INTERN",
      business: "Adria Business & Technology",
    },
    {
      id: 2,
      date: "July. 2023 - Sept. 2023, Remote",
      title: "FULLSTACK DEVELOPER INTERN",
      business: "Adria Business & Technology",
    }
];

const Experience = () => {
  return (
    <div className='experience'>
        <h1 className="experience_pro"><strong>PROFESSIONAL EXPERIENCES</strong></h1>
        <div className="experience_content">
          <div className="experience_image">
            <img src="/developer.gif" alt="Profile" />
          </div>
          <div className="experience_list">
            {experiences.map((exp) => (
              <motion.div className="listContainer" key={exp.id}>
                <motion.div
                  className="box"
                  // whileHover={{ background: "lightgray", color: "black" }}
                >
                  <h3>{exp.date}</h3>
                  <h2>{exp.title}</h2>
                  <p>{exp.business}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Experience
