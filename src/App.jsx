import Navbar from "./components/Navbar/Navbar";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import Experience from "./components/Experience/ExperienceCard";

import TitleAnchor from "./components/TitleAnchor/TitleAnchor";
import { BsBoxArrowRight } from "react-icons/bs";
import { FaPencilAlt, FaCode, FaBus } from "react-icons/fa";
import { TbLetterH } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";


function App() {

  return (
    <div>
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
            <h3>What Im doing</h3>
            <div>
              <a href=""><IoIosArrowBack /></a>
              <a href=""><IoIosArrowForward /></a>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <ServiceCard
              title="Web Design"
              description="It is a long established fact that a reader will be distracted by the readable content."
              icon={FaPencilAlt}
            />
            <ServiceCard
              title="Web Development"
              description="It is a long established fact that a reader will be distracted by the readable content."
              icon={FaCode}
            />
            <ServiceCard
              title="Web Development"
              description="It is a long established fact that a reader will be distracted by the readable content."
              icon={FaCode}
            />
          </div>

          <div className="d-flex justify-content-between">
            <h3>Experience</h3>
            <div>
              <a href=""><IoIosArrowBack /></a>
              <a href=""><IoIosArrowForward /></a>
            </div>
          </div>
          <div className="experience">
            <Experience
              title="Le Wagon"
              date="OCT 2020 - 2022"
              subtitle="Full Stack Developer"
              description="I developed a web app in a team of 4 people, which consists of a web application that reminds you when to water your plants and teaches you how to care for them. The technologies used in this project were HTML, Scss, Javascript, Bootstrap, Ruby, Ruby on Rails, Stimulus, Heroku and use of APIs."
              icon={FaBus}
            />

            <Experience
              title="Hirota Food"
              date="OCT 2020 - 2022"
              subtitle="Archtech"
              description="I developed a web app in a team of 4 people, which consists of a web application that reminds you when to water your plants and teaches you how to care for them. The technologies used in this project were HTML, Scss, Javascript, Bootstrap, Ruby, Ruby on Rails, Stimulus, Heroku and use of APIs."
              icon={TbLetterH}
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
    </div>
  );
}

export default App;
