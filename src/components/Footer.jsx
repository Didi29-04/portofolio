import { FaGithub, FaInstagram, FaTiktok, FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        
        {/* BAGIAN ATAS: 3 KOLOM INFORMASI */}
        <div className="footer-content">
          
          {/* Kolom 1: Identitas */}
          <div className="footer-section">
            <h2 className="footer-brand">Muhammad Alfidian<span style={{ color: '#00f2ff' }}>.</span></h2>
            <p className="footer-role">Aspiring Web Developer</p>
            <div className="footer-contact-item">
                <FaMapMarkerAlt color="#F44336" /> 
                <span>Sidoarjo, Jawa Timur</span>
            </div>
            <div className="footer-contact-item">
                <FaEnvelope color="#EA4335" /> 
                <span>alfidianxannov@gmail.com</span>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="footer-section">
            <h3 className="footer-heading">Navigasi</h3>
            <ul className="footer-links">
              <li><a href="#home">Beranda</a></li>
              <li><a href="#about">Tentang Saya</a></li>
              <li><a href="#projects">Portofolio</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </div>

          {/* Kolom 3: Layanan / Skill (Opsional, biar seimbang 3 kolom) */}
          <div className="footer-section">
            <h3 className="footer-heading">Keahlian Utama</h3>
            <ul className="footer-links">
              <li>Laravel Framework</li>
              <li>React JS Frontend</li>
              <li>Fullstack Development</li>
              <li>Manajemen Database</li>
            </ul>
          </div>

        </div>

        {/* GARIS PEMBATAS */}
        <div className="footer-divider"></div>

        {/* BAGIAN BAWAH: COPYRIGHT & SOSMED */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Dibuat oleh <span style={{ color: '#fff' }}>Muhammad Alfidian</span>.
          </p>

          {/* Ikon Sosmed (Lingkaran border seperti contoh) */}
          <div className="footer-socials">
            
            {/* GitHub */}
            <a href="https://github.com/username" target="_blank" rel="noreferrer" className="social-icon-circle">
                <FaGithub />
            </a>
            
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="social-icon-circle">
                <FaLinkedin />
            </a>

            {/* Instagram (Warna Brand saat Hover di CSS) */}
            <a href="https://instagram.com/username" target="_blank" rel="noreferrer" className="social-icon-circle instagram">
                <FaInstagram />
            </a>

            {/* TikTok */}
            <a href="https://tiktok.com/@username" target="_blank" rel="noreferrer" className="social-icon-circle tiktok">
                <FaTiktok />
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/username" target="_blank" rel="noreferrer" className="social-icon-circle facebook">
                <FaFacebook />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/6285895818001" target="_blank" rel="noreferrer" className="social-icon-circle whatsapp">
                <FaWhatsapp />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;