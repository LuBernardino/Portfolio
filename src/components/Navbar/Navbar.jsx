import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaTwitch, FaInstagram, FaDiscord } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarShow, setNavbar] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div className={`navbar ${navbarShow ? "active" : ""}`}>
      <a className="logo" href="#root">
        <img src="../images/logo.png" alt="" />
      </a>
      <div className="links_navbar">
        <ul className={`links_anchor ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#root" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About me</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
        </ul>
        <ul className={`links_social ${isMenuOpen ? "open" : ""}`}>
          <li><a href="https://www.linkedin.com/in/lubernardino/" target="_blank" rel="noreferrer" onClick={closeMenu}><FaLinkedinIn/></a></li>
          <li><a href="https://github.com/LuBernardino" target="_blank" rel="noreferrer" onClick={closeMenu}><FaGithub/></a></li>
          <li><a href="https://www.twitch.tv/lubstar_" target="_blank" rel="noreferrer" onClick={closeMenu}><FaTwitch/></a></li>
          <li><a href="https://www.instagram.com/luanac.bernardino/" target="_blank" rel="noreferrer" onClick={closeMenu}><FaInstagram/></a></li>
          <li><a href="#" target="_blank" onClick={closeMenu}><FaDiscord/></a></li>
        </ul>
        <a className="btn-burguer" onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
        </a>
      </div>
    </div>
  );
}