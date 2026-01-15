import { motion } from 'framer-motion';
import { FaFilePdf, FaReact, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiLaravel, SiPhp, SiMysql, SiPostgresql, SiVite, SiTailwindcss, SiPostman, SiComposer } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
    { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Composer", icon: <SiComposer />, color: "#885630" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="glass about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Judul */}
          <h2 className="section-title">Tentang Saya</h2>

          {/* Deskripsi */}
          <div className="about-text-container">
            <p className="about-paragraph">
              Mahasiswa Sistem Informasi di <strong>Telkom University</strong> dengan minat mendalam pada <strong>Fullstack Web Development</strong>. 
              Saya memiliki keahlian fleksibel dalam ekosistem <strong>Laravel</strong>, mulai dari perancangan <strong>Backend (RESTful API & Database)</strong> 
              hingga pengembangan <strong>Frontend (PHP/Blade)</strong> yang terintegrasi.
            </p>
            <p className="about-paragraph">
              Selain itu, saya juga kompeten membangun antarmuka modern berbasis <strong>React JS</strong> untuk kebutuhan aplikasi yang lebih interaktif. 
              Saat ini, saya aktif mencari kesempatan <strong>Magang (Internship)</strong> untuk menyalurkan kemampuan teknis saya dan berkontribusi nyata dalam tim pengembangan perangkat lunak profesional.
            </p>
            
            {/* Tombol CV */}
            <div className="cv-button-wrapper">
                <a href="/cv-saya.pdf" download className="cta-button cv-btn">
                    <FaFilePdf /> Download CV Lengkap
                </a>
            </div>
          </div>

          {/* Tech Skills */}
          <h3 className="skills-label">Tech Stack & Tools</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-pill"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <span style={{ color: skill.color, fontSize: '1.2rem', display: 'flex' }}>
                    {skill.icon}
                </span>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;