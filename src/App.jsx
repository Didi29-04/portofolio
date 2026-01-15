// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact'; // Import Contact
import Footer from './components/Footer';
import { projects } from './data/projects';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      
      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} /> // Oper seluruh object 'project'
          ))}
        </div>
      </section>

      {/* Tambahkan Section Contact disini */}
      <Contact />

      <Footer />
    </div>
  );
}

export default App;