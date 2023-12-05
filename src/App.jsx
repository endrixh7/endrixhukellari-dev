import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Skills/>
      <About/>
      <Projects/>
      <Footer/>
    </>
  )
}
export default App