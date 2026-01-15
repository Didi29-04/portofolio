import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <section id="projects" className="projects-section">
        <div className="container">
            <h2>Portofolio Project</h2>
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