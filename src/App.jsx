import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Experience from "./components/experiences/Experience";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Profil from "./components/profil/Profil";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About">
      <Parallax type="services"/>
    </section>
    <section>
      <Profil/>
    </section>
   
    <section id="Experiences">
      <Parallax type="portfolio"/>
    </section>
     <section>
      <Experience/>
      </section>
      <section id="Skills">
      <Skills/>
    </section>
      <Projects/>
    <section id="Contact">
      <Contact/>
    </section>
    
  </div>;
};

export default App;
