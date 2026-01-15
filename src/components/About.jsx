import { motion } from 'framer-motion';
import { FaReact, FaGitAlt, FaBootstrap, FaFilePdf } from 'react-icons/fa';
import { SiLaravel, SiPhp, SiMysql, SiPostgresql, SiVite, SiTailwindcss, SiPostman, SiComposer } from 'react-icons/si';

const About = () => {
  // Data Skill Kita Pindahkan Kesini
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
    <section id="about" style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.div 
          className="glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ padding: '3rem', borderRadius: '20px' }}
        >
          {/* Judul Section */}
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>Tentang Saya</h2>

          {/* Deskripsi Profil */}
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '3rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Mahasiswa Sistem Informasi di <strong>Telkom University</strong> dengan minat mendalam pada <strong>Fullstack Web Development</strong>. 
              Saya memiliki keahlian fleksibel dalam ekosistem <strong>Laravel</strong>, mulai dari perancangan <strong>Backend (RESTful API & Database)</strong> 
              hingga pengembangan <strong>Frontend (PHP/Blade)</strong> yang terintegrasi.
            </p>
            <p>
              Selain itu, saya juga kompeten membangun antarmuka modern berbasis <strong>React JS</strong> untuk kebutuhan aplikasi yang lebih interaktif. 
              Saat ini, saya aktif mencari kesempatan <strong>Magang (Internship)</strong> untuk menyalurkan kemampuan teknis saya dan berkontribusi nyata dalam tim pengembangan perangkat lunak profesional.
            </p>
            
            {/* Tombol Download CV (Pindah kesini karena relevan dengan profil) */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <a href="/cv-saya.pdf" download className="cta-button" style={{ border: '1px solid #fff', color: '#fff' }}>
                    <FaFilePdf /> Download CV Lengkap
                </a>
            </div>
          </div>

          {/* Tech Skills */}
          <h3 className="skills-label" style={{ textAlign: 'center'}}>Tech Stack & Tools</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-pill"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
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