import React from 'react';
import { motion } from 'framer-motion';
import { SiSpringboot, SiReact, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiDocker, SiFigma, SiGit, SiGithub, SiJira, SiTypescript } from 'react-icons/si';
import './Skills.scss';

const Skills = () => {
    const skills = [
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
      { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      // { name: "Java", icon: <SiJava />, color: "#007396" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Jira", icon: <SiJira />, color: "#0052CC" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Leadership", icon: "🧠", color: "#FFD700" }
    ];
    const repeatedSkills = Array.from({ length: 10 }, () => skills).flat();

    return (
        <div className="skills-section">
            <div className="skills-title">
                <h2>Skills</h2>
            </div>
            <div className="skills-container">
                <motion.div
                    className="skills-marquee"
                    // animate={{ x: ["0%", "-100%"] }}
                >
                    {repeatedSkills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
