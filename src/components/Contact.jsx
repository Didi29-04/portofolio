import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; 
// 1. UPDATE IMPORT: Tambahkan icon sosmed disini
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Mengirim...');

    // Pastikan ID ini sesuai dengan akun EmailJS kamu
    emailjs.sendForm('service_7x1rrxy', 'template_mh6wbr5', form.current, 'GU8SqW0fttLUpMyBC')
      .then((result) => {
          setStatus('Pesan Terkirim! ✅');
          e.target.reset();
      }, (error) => {
          console.error("ERROR EMAILJS:", error); 
          setStatus('Gagal mengirim. Cek Console (F12).');
      });
  };

  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Hubungi Saya</h2>
        
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            
            {/* Info Kontak Kiri */}
            <motion.div 
                className="glass" 
                style={{ padding: '2rem', borderRadius: '20px', flex: '1', minWidth: '300px' }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
            >
                <h3 style={{ marginBottom: '1.5rem' }}>Info Kontak</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    
                    {/* Email */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaEnvelope size={20} color="#EA4335" />
                        <span>alfidianxannov@gmail.com</span>
                    </div>
                    
                    {/* WhatsApp */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaWhatsapp size={20} color="#25D366" />
                        <a href="https://wa.me/6285895818001" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                            +62 858-9581-8001
                        </a>
                    </div>
                    
                    {/* Lokasi */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaMapMarkerAlt size={20} color="#F44336" />
                        <span>Sidoarjo, Jawa Timur</span>
                    </div>

                    {/* GARIS PEMBATAS KECIL (Opsional, biar rapi) */}
                    <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />

                    {/* --- SOCIAL MEDIA BARU --- */}
                    
                    {/* Instagram */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaInstagram size={20} color="#E1306C" />
                        <a href="https://www.instagram.com/alfdnaqlmr_" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none', transition: '0.3s' }} className="hover-link">
                            @alfdnaqlmr_
                        </a>
                    </div>

                    {/* TikTok */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaTiktok size={20} color="#ffffff" />
                        <a href="https://tiktok.com/@didiioi" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                            @didiioi
                        </a>
                    </div>

                    {/* Facebook */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaFacebook size={20} color="#1877F2" />
                        <a href="https://www.facebook.com/muhammad.alfidian29" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                            Muhammad Alfidian
                        </a>
                    </div>

                </div>
            </motion.div>

            {/* Form Kontak Kanan (Tetap Sama) */}
            <motion.form 
                ref={form} 
                onSubmit={sendEmail}
                className="glass"
                style={{ padding: '2rem', borderRadius: '20px', flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
            >
                <h3 style={{ marginBottom: '1rem' }}>Kirim Pesan</h3>
                <input type="text" name="user_name" placeholder="Nama Kamu" required style={{ padding: '12px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
                <input type="email" name="user_email" placeholder="Email Kamu" required style={{ padding: '12px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
                <textarea name="message" rows="4" placeholder="Pesan..." required style={{ padding: '12px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white' }}></textarea>
                
                <button type="submit" className="cta-button" style={{ marginTop: '10px', justifyContent: 'center' }}>
                    <FaPaperPlane /> Kirim Pesan
                </button>
                {status && <p style={{ textAlign: 'center', marginTop: '10px', color: '#00f2ff' }}>{status}</p>}
            </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;