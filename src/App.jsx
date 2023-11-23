import Navbar from "./components/Navbar/Navbar";
import ServiceCard from "./components/ServiceCard/ServiceCard";

import TitleAnchor from "./components/TitleAnchor/TitleAnchor";
import { BsBoxArrowRight } from "react-icons/bs";
import { FaPencilAlt, FaCode } from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          {/* <TitleAnchor title="ABOUT ME" sectionId="about" /> */}
          <h5>
            HELLO, <span>MY NAME IS</span>
          </h5>
          <h1>
            <span>
              LUANA <br />
              BERNARDINO
            </span>
          </h1>
          <h5>I AM FULL-STACK WEB DEVELOPER</h5>
          <p>
            From Lisbon, Portugal. I am a full stack developer committed to
            developing attractive and functional interfaces for the web.
          </p>
          {/* TODO: making button component */}
          <button className="btn-cv">
            <BsBoxArrowRight className="i-icon" />
            <a href="" class="">
              DOWNLOAD CV
            </a>
          </button>
          <img src="src\assets\draw.png" alt="" />
        </section>

        <section id="about">
          <TitleAnchor title="ABOUT ME" sectionId="about" />
          <div className="d-flex justify-content-between">
            <ServiceCard
              title="Web Design"
              description="It is a long established fact that a reader will be distracted by the readable content."
              icon={FaPencilAlt}
            />
          </div>
        </section>

        <section id="projects">
          <TitleAnchor title="PROJECTS" sectionId="projects" />
        </section>

        <section id="contact">
          <TitleAnchor title="CONTACT ME" sectionId="contact" />
        </section>
      </main>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </>
  );
}

export default App;
