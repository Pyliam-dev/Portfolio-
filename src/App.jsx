import Navbar from "./navbar";
import Hero from "./hero";
import About from "./About";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./Contact";
import Footer from "./footer";
function App(params) {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
       <Skills />
       <Projects />
      <Contact/>
      <Footer />
     </>

    
  );

}
export default App;