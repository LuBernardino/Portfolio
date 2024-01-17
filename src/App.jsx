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
              Sou uma <span>Desenvolvedora Full Stack</span> com formação em{" "}
              <span>Arquitetura</span>, Brasileira que atualmente reside em
              Lisboa, Portugal. Minha jornada profissional reflete uma migração
              de carreira, com ênfase na importância do design visual e
              funcional no desenvolvimento de produtos. Atualmente, meu foco
              está no universo das aplicações web, utilizando ferramentas como{" "}
              <span>Ruby on Rails, Javascript, SASS, Bootstrap e React.</span>
              <br />
              <br />
              ▪️ Comprometida em <span>criar experiências</span> online
              excepcionais e funcionais, minha paixão pela arquitetura
              influencia minha abordagem, valorizando tanto a estética quanto a
              usabilidade.
              <br />
              <br />
              ▪️Além do desenvolvimento web, sou apaixonada por{" "}
              <span>Filmes</span>, Gosto de explorar diferentes gêneros
              cinematográficos, desde clássicos até produções contemporâneas com
              destaque para filmes de <span>Animação.</span>{" "}
              <span>Animes e Mangás</span>, Tenho uma profunda apreciação pela
              animação japonesa e pela forma única de contar histórias
              encontrada nos mangás. A riqueza das narrativas, os personagens
              envolventes e a variedade de estilos artísticos sempre me
              fascinam.
              <span> Jogos</span>, aprecio também a criatividade envolvida no
              design de jogos e a maneira como eles proporcionam{" "}
              <span>experiências imersivas.</span> No meu tempo livre costumo
              também, estudar e fazer <span>projetos pessoais</span> afim de
              melhorar meus conhecimentos técnicos.
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
              description="Crio designs visualmente cativantes no Figma, integrando criatividade e funcionalidade para entregar interfaces atraentes e eficazes."
              icon={FaPencilAlt}
            />
            <ServiceCard
              title="Front-End Development"
              description="Utilizo HTML, CSS e JavaScript para criar interfaces responsivas e envolventes, garantindo uma experiência do usuário intuitiva e interativa com foco na tradução de designs visualmente atraentes."
              icon={FaCode}
            />
            <ServiceCard
              title="Web Development"
              description="Desenvolvedora full stack especializada em ReactJS, Node.js e Ruby on Rails, proporcionando soluções completas e eficientes para aplicações web modernas e escaláveis."
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
                  description="Desenvolvi uma aplicação web para o programa StepByTech. Como um dos finalistas fui convidada a construir seu novo aplicativo web. Trabalhei em uma equipe de 4 desenvolvedores, projetando e codificando usando Ruby on Rails."
                  icon={SiStarship}
                />
              </SwiperSlide>

              <SwiperSlide>
                <ExperienceCard
                  title="Le Wagon"
                  date="JUL 2023 - SET 2023"
                  subtitle="Full Stack Developer"
                  description="Trabalhei em uma equipe de 4 desenvolvedores, desenvolvemos numa aplicação web que lembra quando regar as tuas plantas e como cuidar delas. As tecnologias utilizadas foram HTML, Scss, Javascript, Bootstrap, Ruby, Ruby on Rails, Stimulus, Heroku e uso de APIs."
                  icon={FaBus}
                />
              </SwiperSlide>

              <SwiperSlide>
                <ExperienceCard
                  title="Future of Work Lisboa"
                  date="MAY 2023 - JUN 2023"
                  subtitle="Candidate StepByTech Program"
                  description="Participei do programa StepByTech, um programa 100% gratuito focado no desenvolvimento das habilidades do futuro. Fui uma dos 5 vencedores finais de uma bolsa para frequentar a Web Bootcamp de desenvolvimento no Le Wagon, Lisboa."
                  icon={SiStarship}
                />
              </SwiperSlide>
              
              <SwiperSlide>
                <ExperienceCard
                  title="Hirota Food"
                  date="SET 2020 - JUN 2022"
                  subtitle="Architect"
                  description="Arquiteta responsável pela elaboração e execução de projetos arquitetônicos de reformas, ampliações e novas construções. Suporte a projetistas e engenheiros externos para obras em andamento. Trabalhando num time de 3 profissionais e com diversos setores."
                  icon={TbLetterH}
                />
              </SwiperSlide>

              <SwiperSlide>
                <ExperienceCard
                  title="LB Arquitetura"
                  date="JAN 2018 - AGO 2020"
                  subtitle="Archtech"
                  description="Arquiteta responsável por desenvolver projetos arquitetônicos, complementares, urbanísticos e aprovação junto a prefeitura. Elaborava modelos 3D de design de interiores e mobiliários de acordo com cada cliente."
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
              description="Landing page desenvolvida para o programa tecnológico StepByTech, organizado pela Câmara Municipal de Lisboa em parceria com a escola Le Wagon Lisboa."
              imageSrc="images/animeart/01.png"
              projectLink="/project/1"
            />
            <AnimateCard
              name="Food Explorer"
              description="Desenvolvi o projeto final do curso Explorer da Rocketseat, o 'Food Explorer'. Trata-se de um aplicativo que simula um menu interativo para um restaurante fictício."
              imageSrc="images/food_explorer/Home_admin.png"
              projectLink="/project/2"
            />
            <AnimateCard
              name="Waterme"
              description="Participei do desenvolvimento de uma aplicação web em equipe (4 pessoas) chamada 'Waterme'. Essa aplicação tem como propósito lembrar quando regar as plantas e ensinar como cuidar delas."
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
