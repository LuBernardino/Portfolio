import Navbar from "./components/Navbar/Navbar";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import TitleAnchor from "./components/TitleAnchor/TitleAnchor";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import AnimateCard from "./components/AnimateCard/AnimateCard.jsx";
import ContactForm from "./components/ContactForm/ContactForm";
import BackgroundStar from "./components/BackgroundStar/BackgroundStar";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import LuanaBernardinoPdf from "./CV_Luana_Bernardino_Full_Stack_Web_Developer.pdf";

import { TbLetterH } from "react-icons/tb";
import { SiStarship } from "react-icons/si";
import { BsBoxArrowRight, BsLayoutWtf } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaPencilAlt,
  FaCode,
  FaBus,
  FaLaptopCode,
  FaLinkedinIn,
  FaGithub,
  FaTwitch,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

import "./App.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundStar />
      <main>
        <section id="home">
          <img
            src="images/img-lubs.png"
            alt="ilustration web dev lubs"
            className="image-home"
          />
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
            <h5>I'M FULL-STACK WEB DEVELOPER</h5>
            <p>
              I'm a Brazilian full stack developer currently residing in Lisbon, 
              Portugal. Committed to creating attractive and functional interfaces 
              for the web. My full stack approach allows me to develop complete 
              solutions, from user interface design to efficient functionality 
              implementation.<span><FaCode /></span>
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
            I'm a <span>Full Stack Developer</span> with training in {" "}
               <span>Architecture</span>, Brazilian who currently resides in
               Lisbon, Portugal. My professional journey reflects a migration
               career path, with an emphasis on the importance of visual design and
               functional in product development. Currently, my focus
               is in the world of web applications, using tools like{" "}
               <span>Ruby on Rails, Javascript, SASS, Bootstrap and React.</span>
               <br />
               <br />
               ▪️ Committed to <span>creating experiences</span> online
               exceptional and functional, my passion for architecture
               influences my approach, valuing both aesthetics and
               usability.
               <br />
               <br />
               ▪️ In addition to web development, I'm passionate about{" "}
               <span>Movies</span>, I like exploring different genres
               cinematographic movies, from classics to contemporary productions with
               emphasis on <span>Animation movies.</span>{" "}
               <span>Anime and Manga</span>, I have a deep appreciation for
               Japanese animation and the unique way of telling stories
               found in the manga. The richness of the narratives, the characters
               engaging and the variety of artistic styles always appeals to me.
               fascinate.
               <span> Games</span>, I also appreciate the creativity involved in
               game design and the way they provide{" "}
               <span>immersive experiences.</span> In my free time I usually
               also, study and do <span>personal projects</span> in order to
               improve my technical knowledge.
            </p>
            <img src="images\photo.png" alt="" />
          </div>
          {/* Services card */}
          <div className="title">
            <h3>What Im doing</h3>
          </div>
          <div className="services">
            <ServiceCard
              title="Web Design with Figma"
              description="I create visually captivating designs in Figma, integrating creativity and functionality to deliver attractive and effective interfaces."
              icon={FaPencilAlt}
            />
            <ServiceCard
              title="Front-End Development"
              description="I use HTML, CSS and JavaScript to create responsive and engaging interfaces, ensuring an intuitive and interactive user experience with a focus on translating visually appealing designs."
              icon={FaCode}
            />
            <ServiceCard
              title="Web Development"
              description="Full stack developer specialized in ReactJS, Node.js and Ruby on Rails, providing complete and efficient solutions for modern and scalable web applications."
              icon={FaLaptopCode}
            />
          </div>

          {/* SWIPER */}
          <div className="experience">
            <h3>Experience</h3>
            <div className="arrow-experience">
            <IoIosArrowBack className="prev" />
            <IoIosArrowForward className="next"/>
            </div>
          </div>
          {/* Experience card */}
          <div className="swiper-container ">
            <Swiper
              navigation={{
                prevEl: '.prev',
                nextEl: '.next',
              }}
              spaceBetween={30}
              modules={[Navigation]}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                850: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <ExperienceCard
                  title="Future of Work Lisboa"
                  date="OCT 2023 - DEC 2023"
                  subtitle="Junior Full-Stack Web Developer"
                  description="I developed a web application for the StepByTech program. As one of the finalists I was invited to build their new web application. I worked in a team of 4 developers, designing and coding using Ruby on Rails."
                  icon={SiStarship}
                />
              </SwiperSlide>

              <SwiperSlide>
                <ExperienceCard
                  title="Le Wagon"
                  date="JUL 2023 - SET 2023"
                  subtitle="Junior Full Stack Developer"
                  description="I worked in a team of 4 developers, we developed a web application that remembers when to water your plants and how to care for them. The technologies used were HTML, Scss, Javascript, Bootstrap, Ruby, Ruby on Rails, Stimulus, Heroku and use of APIs."
                  icon={FaBus}
                />
              </SwiperSlide>

              <SwiperSlide>
                <ExperienceCard
                  title="Future of Work Lisboa"
                  date="MAY 2023 - JUN 2023"
                  subtitle="Candidate StepByTech Program"
                  description="I participated in the StepByTech program, a 100% free program focused on developing the skills of the future. I was one of the 5 final winners of a scholarship to attend the Web Development Bootcamp at Le Wagon, Lisbon."
                  icon={SiStarship}
                />
              </SwiperSlide>
              
              <SwiperSlide>
                <ExperienceCard
                  title="Hirota Food"
                  date="SET 2020 - JUN 2022"
                  subtitle="Architect"
                  description="Architect responsible for preparing and executing architectural projects for renovations, expansions and new constructions. Support to external designers and engineers for works in progress. Working in a team of 3 professionals and with different sectors."
                  icon={TbLetterH}
                />
              </SwiperSlide>

              <SwiperSlide>
                <ExperienceCard
                  title="LB Arquitetura"
                  date="JAN 2018 - AGO 2020"
                  subtitle="Archtech"
                  description="Architect responsible for developing architectural, complementary and urban projects and approval by the city hall. I created 3D models of interior design and furniture according to each client."
                  icon={BsLayoutWtf}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Progress bar */}
          <div className="title">
            <h3>My coding skills</h3>
            <div className="section-skils">
              <div className="col-lg-6 col-12">
                <ProgressBar title="HTML e CSS" percentage={100} />
                <ProgressBar title="Javascript" percentage={90} />
                <ProgressBar title="Typescript" percentage={50} />
                <ProgressBar title="Bootstrap" percentage={100} />
                <ProgressBar title="Git e Github" percentage={100} />
                <ProgressBar title="Reactjs" percentage={80} />
                <ProgressBar title="Sass/ Scss" percentage={50} />
              </div>
              <div className="col-lg-6 col-12">
                <ProgressBar title="Ruby" percentage={70} />
                <ProgressBar title="Ruby on Rails" percentage={70} />
                <ProgressBar title="SQL" percentage={50} />
                <ProgressBar title="Nodejs" percentage={70} />
                <ProgressBar title="Express" percentage={50} />
                <ProgressBar title="Heroku" percentage={70} />
                <ProgressBar title="Postgresql" percentage={50} />
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <TitleAnchor title="PROJECTS" sectionId="projects" />
          <div className="projects-div">
            <AnimateCard
              name="Animeart"
              description="Landing page developed for the StepByTech technological program, organized by Lisbon City Council in partnership with the Le Wagon Lisboa school."
              imageSrc="images/animeart/01.png"
              projectLink="/project/1"
            />
            <AnimateCard
              name="Food Explorer"
              description="I developed the final project for Rocketseat's Explorer course, 'Food Explorer'. It is an application that simulates an interactive menu for a fictional restaurant."
              imageSrc="images/food_explorer/Home_admin.png"
              projectLink="/project/2"
            />
            <AnimateCard
              name="Waterme"
              description="I participated in the development of a web application in a team (4 people) called 'Waterme'. This application aims to remind you when to water your plants and teach you how to care for them."
              imageSrc="images/waterme.png"
              projectLink="/project/3"
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
