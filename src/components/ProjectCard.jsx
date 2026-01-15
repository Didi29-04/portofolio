import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="card glass project-card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* 1. WADAH GAMBAR (Desain Baru: Tinggi Fix & Object Cover) */}
      <div className="project-image-container">
        <img 
            src={project.image} 
            alt={project.title} 
            className="project-img"
            onError={(e) => {
                console.error("Gagal memuat gambar:", project.image);
                e.target.style.display = 'none'; 
            }}
        />
      </div>

      {/* 2. KONTEN (Desain Baru tapi Data Lama) */}
      <div className="project-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h3 className="project-title" style={{ margin: 0 }}>{project.title}</h3>
            {/* Menampilkan kategori jika ada */}
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '10px' }}>
                {project.category || 'Web App'}
            </span>
        </div>
        
        {/* Teknologi (Menggunakan data 'tech' kamu) */}
        <p style={{ color: '#00f2ff', fontSize: '0.85rem', marginBottom: '15px', fontWeight: '500' }}>
          🛠 {project.tech}
        </p>

        {/* Deskripsi (Menggabungkan Goal & Result ke dalam desain baru) */}
        <div className="project-description">
            <p style={{ marginBottom: '8px' }}><strong>🎯 Tujuan:</strong> {project.goal}</p>
            <p><strong>📈 Hasil:</strong> {project.result}</p>
        </div>
        
        {/* Tombol Link (Menggunakan variable 'repoLink' & 'demoLink' kamu) */}
        <div className="project-links">
          <a href={project.repoLink} target="_blank" rel="noreferrer" className="card-link">
            <FaGithub /> Source Code
          </a>
          
          {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer" className="card-link highlight">
                <FaExternalLinkAlt /> Live Demo
              </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;