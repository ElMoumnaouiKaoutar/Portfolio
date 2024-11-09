import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      {/*sidebar*/}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
         initial={{opacity:0, scale:0.5}}
         animate={{opacity:1, scale:1}} 
         transition={{duration:0.5}}
         >
            kaoutar
        </motion.span>
        <div className="social">
            <a href="https://www.linkedin.com/in/kaoutarelmoumnaoui"><FaLinkedinIn size={24} /></a>
            <a href="https://www.instagram.com/_kaoutar_el_moumnaoui_/"><FiInstagram size={24} /></a>
            <a href="https://www.github.com/elmoumnaouikaoutar"><FaGithub size={24} /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
