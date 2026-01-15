import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ marginBottom: '2rem' }}>Hubungi Saya</h2>
        <div className="glass" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
                <FaEnvelope size={24} color="#00f2ff" />
                <a href="mailto:emailmu@example.com" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>
                    alfidianxannov@gmail.com
                </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
                <FaWhatsapp size={24} color="#00f2ff" />
                <a href="https://wa.me/6285895818001" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>
                    +62 858-9581-8001
                </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
                <FaMapMarkerAlt size={24} color="#00f2ff" />
                <span style={{ fontSize: '1.1rem' }}>Jawa Timur, Indonesia</span>
            </div>

            <p style={{ marginTop: '1rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                *Saya terbuka untuk kesempatan kerja freelance maupun full-time.
            </p>
        </div>
      </motion.div>
    </section>
  );
};
export default Contact;