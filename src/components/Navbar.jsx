import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar glass">
      <div className="navbar-container container">
        
        <div className="logo" onClick={closeMobileMenu}>
          Alfidian<span className="highlight">.</span>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>Beranda</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>Tentang Saya</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMobileMenu}>Portofolio</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;