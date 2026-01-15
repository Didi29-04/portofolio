import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-main-layout" style={{ alignItems: 'center' }}>
          
          {/* --- BAGIAN KIRI: NAMA & GELAR --- */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="hero-subtitle" style={{ marginBottom: '0.5rem', color: '#00f2ff' }}>
              Halo, Saya
            </h2>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1rem' }}>
              Muhammad <span className="highlight">alfidian aqilamir</span>
            </h1>
            {/* --- BAGIAN TYPEWRITER --- */}
            <h3 style={{ fontSize: '1.5rem', fontWeight: '300', color: '#94a3b8', marginBottom: '2rem', height: '30px' }}>
              <Typewriter
                options={{
                  strings: [
                    'Junior Web Developer',
                    'Laravel Enthusiast',
                    'React Learner',
                    'Mahasiswa Telkom University',
                    'Sistem Informasi'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h3>
            
            <motion.a 
              href="#contact" 
              className="cta-button" 
              whileHover={{ scale: 1.05 }}
              style={{ width: 'fit-content' }}
            >
              <FaWhatsapp /> Hubungi Saya
            </motion.a>
          </motion.div>

          {/* --- BAGIAN KANAN: FOTO --- */}
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
      </div>
    </section>
  );
};

export default Hero;