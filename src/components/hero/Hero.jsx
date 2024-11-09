import "./hero.scss"
import {animate, motion} from "framer-motion"

const textVariants= {
    initial:{
        x: -500,
        opacity:0,
    },

    animate:{
        x: 0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y: 10,
        transition:{
            duration: 2,
            repeat: Infinity,
        }
    },
};

const sliderVariants= {
    initial:{
        x: 0,
    },

    animate:{
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
        }
    }
};

const Hero = () => {
    const onButtonClick = () => {
        const pdfUrl = "/public/cv.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const contactMe=()=>{
        const contactSection = document.getElementById("Contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div
         className="textContainer"
         variants={textVariants}
         initial="initial"
         animate="animate">
            <motion.h2 variants={textVariants}>Kaoutar EL MOUMNAOUI</motion.h2>
            <motion.h1 variants={textVariants}>FULLSTACK developer</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
                <motion.button variants={textVariants} onClick={onButtonClick}>GET RESUME</motion.button>
                <motion.button variants={textVariants} onClick={contactMe}>Contact Me</motion.button>
            </motion.div>
            <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton" />
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Designing experiences, developing skills, and delivering results.
        </motion.div>
      <div className="imageContainer">
        <img src="/image (1).png" alt="" />
      </div>
    </div>
  )
}

export default Hero
