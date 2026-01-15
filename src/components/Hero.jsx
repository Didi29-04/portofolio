import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaReact, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiLaravel, SiPhp, SiMysql, SiPostgresql, SiVite, SiTailwindcss, SiPostman, SiComposer } from 'react-icons/si';

const Hero = () => {
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
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        {/* --- BAGIAN ATAS: FOTO & PROFIL --- */}
        <div className="hero-main-layout">
          
          {/* Sisi Kiri: Teks Profil */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Halo, saya <span className="highlight">Muhammad Alfidian Aqilamir</span>
            </h1>
            <h2 className="hero-subtitle">Junior Web Developer</h2>
            <p className="hero-description">
              Mahasiswa Sistem Informasi di <strong>Telkom University</strong>. 
              Memiliki fondasi kuat dalam arsitektur Backend (<strong>PHP/Laravel</strong>) dan kini memperluas 
              keahlian ke Frontend Modern (<strong>React/Vite</strong>). Antusias dalam memecahkan masalah 
              kompleks melalui kode yang bersih dan performa tinggi.
            </p>
            
            <div className="hero-buttons">
              <motion.a href="/cv-saya.pdf" download className="cta-button" whileHover={{ scale: 1.05 }}>
                <FaFileDownload /> CV
              </motion.a>
              <motion.a href="https://github.com/Didi29-04" target="_blank" className="icon-btn" whileHover={{ scale: 1.2 }}>
                <FaGithub />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/muhammad-alfidian-aqilamir" target="_blank" className="icon-btn" whileHover={{ scale: 1.2 }}>
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          {/* Sisi Kanan: Foto Profil */}
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-frame">
              <img src="/images/foto-profil.png" alt="Profile" className="profile-img" />
            </div>
          </motion.div>

        </div>

        {/* --- BAGIAN BAWAH: TECH SKILLS --- */}
        <motion.div 
          className="skills-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="skills-label">Tech Stack</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-pill glass"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <span style={{ color: skill.color }} className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;