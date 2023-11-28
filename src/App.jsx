import Navbar from "./components/Navbar/Navbar";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import TitleAnchor from "./components/TitleAnchor/TitleAnchor";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ContactForm from "./components/ContactForm/ContactForm";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import LuanaBernardinoPdf from "./CV_Luana_Bernardino_Full_Stack_Web_Developer.pdf";
import { TbLetterH } from "react-icons/tb";
import { BsBoxArrowRight } from "react-icons/bs";
import { FaPencilAlt, FaCode, FaBus } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import {
  FaLinkedinIn,
  FaGithub,
  FaTwitch,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { BsLayoutWtf } from "react-icons/bs";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <img src="src\assets\img-lubs.png" alt="ilustration web dev lubs" class="image-home"/>
          <div className="content-home">
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
            <button className="btn-cv">
              <a
                href={LuanaBernardinoPdf}
                download="Luana-Bernardino-CV"
                target="_blank"
                rel="noreferrer"
              >
                <BsBoxArrowRight className="i-icon" />
                DOWNLOAD CV
              </a>
            </button>
          </div>
        </section>

        <section id="about">
          <TitleAnchor title="ABOUT ME" sectionId="about" />
          <div className="section-photo">
            <p>
              Graduated in Architecture, focus on the importance of the visual
              and usual aspect when developing a product. I completed a career
              migration and currently develop web applications, using tools such
              as Ruby on Rails, Javascript, SASS, Bootstrap, React, among
              others. Committed to creating exceptional and functional online
              experiences for users.
            </p>
            <img src="src\assets\photo.png" alt="" />
          </div>
          {/* Services card */}
          <div className="title">
            <h3>What Im doing</h3>
            {/* <div>
              <a href=""><IoIosArrowBack /></a>
              <a href=""><IoIosArrowForward /></a>
            </div> */}
          </div>
          <div className="services">
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

          <div className="title">
            <h3>Experience</h3>
            {/* <div>
              <a href=""><IoIosArrowBack /></a>
              <a href=""><IoIosArrowForward /></a>
            </div> */}
          </div>
          {/* Experience card */}
          <div className="experience">
            <ExperienceCard
              title="Le Wagon"
              date="JUL 2023 - SET 2023"
              subtitle="Full Stack Developer"
              description="I developed a web app in a team of 4 people, which consists of a web application that reminds you when to water your plants and teaches you how to care for them. The technologies used in this project were HTML, Scss, Javascript, Bootstrap, Ruby, Ruby on Rails, Stimulus, Heroku and use of APIs."
              icon={FaBus}
            />

            <ExperienceCard
              title="Hirota Food"
              date="SET 2020 - 2022"
              subtitle="Architect"
              description="Responsible for preparing and executing architectural projects for renovations, expansions and new constructions. Support to external designers and engineers for works in progress."
              icon={TbLetterH}
            />

            <ExperienceCard
              title="LB Arquitetura"
              date="JAN 2018 - 2020"
              subtitle="Archtech"
              description="I developed a web app in a team of 4 people, which consists of a web application that reminds you when to water your plants and teaches you how to care for them. The technologies used in this project were HTML, Scss, Javascript, Bootstrap, Ruby, Ruby on Rails, Stimulus, Heroku and use of APIs."
              icon={BsLayoutWtf}
            />
          </div>

          {/* Progress bar */}
          <div className="title">
            <h3>My coding skills</h3>
            <div className="section-skils">
              <div className="col-lg-6 col-12">
                <ProgressBar title="HTML e CSSS" percentage={50} />
                <ProgressBar title="Javascript" percentage={50} />
                <ProgressBar title="Bootstrap" percentage={50} />
                <ProgressBar title="Git e Github" percentage={50}/>
                <ProgressBar title="Reactjs" percentage={50}/>
                <ProgressBar title="Sass/ Scss" percentage={50}/>
                <ProgressBar title="Ruby" percentage={50} />
              </div>
              <div className="col-lg-6 col-12">
                <ProgressBar title="Ruby on Rails" percentage={50} />
                <ProgressBar title="SQL" percentage={50} />
                <ProgressBar title="Nodejs" percentage={50}/>
                <ProgressBar title="Express" percentage={50}/>
                <ProgressBar title="Heroku" percentage={50}/>
                <ProgressBar title="Postgresql" percentage={50}/>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <TitleAnchor title="PROJECTS" sectionId="projects" />
          <div className="projects-div">
            <ProjectCard
              name="Animeart"
              description="Idea for a landing page for the first and second phase of the program StepByTech."
              imageSrc="src/assets/animeart.png"
            />
            <ProjectCard
              name="Food Explorer"
              description="xplorer Course Food Explorer is an application that simulates an interactive menu for a fictional restaurant"
              imageSrc="src/assets/food_explorer.png"
            />
            <ProjectCard
              name="Waterme"
              description="Consists on a web app that reminds you when to water your plants and how to care of 
              them"
              imageSrc="src/assets/waterme.png"
            />
            <ProjectCard
              name="TypeWeather"
              description=""
              imageSrc="src/assets/type_weather.png"
            />
            <ProjectCard
              name="hehehe"
              description="hehehee"
              imageSrc="src/assets/img-teste.jpg"
            />
          </div>
        </section>

        <section id="contact">
          <TitleAnchor title="CONTACT ME" sectionId="contact" />
          <ContactForm />
          <ul className="social-media-home">
            <li>
              <a
                href="https://www.linkedin.com/in/lubernardino/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/LuBernardino"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitch.tv/lubstar_"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitch size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/luanac.bernardino/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaDiscord size={30} />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
