import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar glass"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">AlfidianPorto's</div>
      <ul className="nav-links">
        <li><a href="#home">beranda</a></li>
        <li><a href="#projects">Portofolio</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </motion.nav>
  );
};
export default Navbar;