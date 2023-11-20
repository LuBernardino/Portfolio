// import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <li className="logo"><a href="#dev"><FaDev/></a></li>
        <div className="links_navbar">
          <ul className="links_anchor">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact me</a></li>
            <li>|</li>
          </ul>
          <ul className="links_social">
            <li><a href="https://www.linkedin.com/in/lubernardino/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a></li>
            <li><a href="https://github.com/LuBernardino" target="_blank" rel="noreferrer"><FaGithub/></a></li>
            <li><a href="https://www.twitch.tv/lubstar_" target="_blank" rel="noreferrer"><FaTwitch/></a></li>
            <li><a href="https://www.instagram.com/luanac.bernardino/" target="_blank" rel="noreferrer"><FaInstagram/></a></li>
            <li><a href="#" target="_blank" rel="noreferrer"><FaDiscord/></a></li>
          </ul>
          <button className="btn-burguer"><RxHamburgerMenu/></button>
        </div>
    </div>
  );
}