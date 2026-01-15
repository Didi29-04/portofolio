import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="card glass"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Bagian Visual / Gambar */}
      <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#000' }}>
        <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            // Tambahkan ini untuk debug: kalau error, dia lapor di console
            onError={(e) => {
                console.error("Gagal memuat gambar:", project.image);
                e.target.style.display = 'none'; // Sembunyikan jika error
            }}
        />
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>{project.title}</h3>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{project.category}</span>
        </div>

        {/* Teknologi */}
        <p style={{ color: '#00f2ff', fontSize: '0.9rem', marginBottom: '15px' }}>
            🛠 {project.tech}
        </p>

        {/* Penjelasan Detail */}
        <div style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6', flexGrow: 1 }}>
            <p><strong>🎯 Tujuan:</strong> {project.goal}</p>
            <p style={{ marginTop: '5px' }}><strong>📈 Hasil:</strong> {project.result}</p>
        </div>
        
        {/* Link Repo & Demo */}
        <div style={{ marginTop: '20px', display: 'flex', gap: '15px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
            <a href={project.repoLink} target="_blank" className="card-link" style={{ fontSize: '0.9rem' }}>
                <FaGithub /> Source Code
            </a>
            {project.demoLink && (
                <a href={project.demoLink} target="_blank" className="card-link" style={{ fontSize: '0.9rem', color: '#00f2ff' }}>
                    <FaExternalLinkAlt /> Live Demo
                </a>
            )}
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;