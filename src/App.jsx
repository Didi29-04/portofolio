import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";
import { projects } from "./data/projects";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Cursor />
      <ScrollToTop />
      <section id="projects" className="projects-section">
        <div className="container">
          <h2
            style={{ textAlign: "center", marginBottom: "3rem", fontSize: "2.5rem",}}
          >Portofolio Project</h2>

          <div className="grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
