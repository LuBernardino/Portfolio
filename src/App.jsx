import Navbar from "./components/Navbar/Navbar";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import TitleAnchor from "./components/TitleAnchor/TitleAnchor";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";

import { TbLetterH } from "react-icons/tb";
import { BsBoxArrowRight } from "react-icons/bs";
import { FaPencilAlt, FaCode, FaBus } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
          {/* Services card */}
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
          {/* Experience card */}
          <div className="experience">
            <ExperienceCard
              title="Le Wagon"
              date="OCT 2020 - 2022"
              subtitle="Full Stack Developer"
              description="I developed a web app in a team of 4 people, which consists of a web application that reminds you when to water your plants and teaches you how to care for them. The technologies used in this project were HTML, Scss, Javascript, Bootstrap, Ruby, Ruby on Rails, Stimulus, Heroku and use of APIs."
              icon={FaBus}
            />

            <ExperienceCard
              title="Hirota Food"
              date="OCT 2020 - 2022"
              subtitle="Archtech"
              description="I developed a web app in a team of 4 people, which consists of a web application that reminds you when to water your plants and teaches you how to care for them. The technologies used in this project were HTML, Scss, Javascript, Bootstrap, Ruby, Ruby on Rails, Stimulus, Heroku and use of APIs."
              icon={TbLetterH}
            />
          </div>

          {/* Progress bar */}
          <div className="d-flex row">
            <h3>My coding skills</h3>
            <div className="section-skils">
              <div className="col-6">
                <ProgressBar title="HTML e CSSS" percentage={50}/>
                <ProgressBar title="Javascript" percentage={50}/>
                <ProgressBar title="Bootstrap" percentage={50}/>
                {/* <ProgressBar title="Git e Github" percentage={50}/>
                <ProgressBar title="Reactjs" percentage={50}/>
                <ProgressBar title="Sass" percentage={50}/> */}
              </div>
              <div className="col-6">
                <ProgressBar title="Ruby" percentage={50}/>
              <ProgressBar title="Ruby on Rails" percentage={50}/>
                <ProgressBar title="SQL" percentage={50}/>
                {/* <ProgressBar title="Nodejs" percentage={50}/>
                <ProgressBar title="Express" percentage={50}/>
                <ProgressBar title="Heroku" percentage={50}/>
                <ProgressBar title="Postgresql" percentage={50}/> */}
              </div>

            </div>
          </div>
        </section>

        <section id="projects">
          <TitleAnchor title="PROJECTS" sectionId="projects" />
          <ProjectCard/>
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
