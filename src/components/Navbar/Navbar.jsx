import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaTwitch, FaInstagram, FaDiscord } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  return (
    <div className="navbar">
      <li className="logo"><a href="#dev">Logo</a></li>
      <div className="links_navbar">
        <ul className={`links_anchor ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>
        <ul className={`links_social ${isMenuOpen ? "open" : ""}`}>
          <li><a href="https://www.linkedin.com/in/lubernardino/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a></li>
          <li><a href="https://github.com/LuBernardino" target="_blank" rel="noreferrer"><FaGithub/></a></li>
          <li><a href="https://www.twitch.tv/lubstar_" target="_blank" rel="noreferrer"><FaTwitch/></a></li>
          <li><a href="https://www.instagram.com/luanac.bernardino/" target="_blank" rel="noreferrer"><FaInstagram/></a></li>
          <li><a href="#" target="_blank"><FaDiscord/></a></li>
        </ul>
        <a className="btn-burguer" onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
        </a>
      </div>
    </div>
  );
}
