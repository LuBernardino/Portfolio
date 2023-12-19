import Navbar from "./components/Navbar/Navbar";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import TitleAnchor from "./components/TitleAnchor/TitleAnchor";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import AnimateCard from "./components/AnimateCard/AnimateCard.jsx";
import ContactForm from "./components/ContactForm/ContactForm";
import BackgroundStar from "./components/BackgroundStar/BackgroundStar";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import LuanaBernardinoPdf from "./CV_Luana_Bernardino_Full_Stack_Web_Developer.pdf";

import { TbLetterH } from "react-icons/tb";
import { BsBoxArrowRight, BsLayoutWtf } from "react-icons/bs";
import { FaPencilAlt, FaCode, FaBus, FaLaptopCode, FaLinkedinIn, FaGithub, FaTwitch, FaInstagram, FaDiscord } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./App.css";
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
            src="src\assets\img-lubs.png"
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
              Sou uma <span>Desenvolvedora Full Stack</span> com formação em <span>Arquitetura</span>, Brasileira que atualmente reside em Lisboa, Portugal. 
              Minha jornada profissional reflete uma migração de carreira, com ênfase na importância do design 
              visual e funcional no desenvolvimento de produtos. Atualmente, meu foco está no universo das 
              aplicações web, utilizando ferramentas como <span>Ruby on Rails, Javascript, SASS, Bootstrap e React.</span>
              <br/>
              <br/>
              ▪️ Comprometida em <span>criar experiências</span> online excepcionais e funcionais, minha paixão pela arquitetura influencia 
              minha abordagem, valorizando tanto a estética quanto a usabilidade.
              <br/>
              <br/>
              ▪️Além do desenvolvimento web, sou apaixonada por <span>Filmes</span>, Gosto de explorar diferentes gêneros cinematográficos, 
              desde clássicos até produções contemporâneas com destaque para filmes de <span>Animação.</span> <span>Animes e Mangás</span>, Tenho uma 
              profunda apreciação pela animação japonesa e pela forma única de contar histórias encontrada nos mangás. 
              A riqueza das narrativas, os personagens envolventes e a variedade de estilos artísticos sempre me fascinam. 
              <span> Jogos</span>, aprecio também a criatividade envolvida no design de jogos e a maneira como eles proporcionam <span>experiências 
              imersivas.</span>
              {/* <button className="btn-education">My Education and certifications</button> */}
            </p>
            <img src="src\assets\photo.png" alt="" />
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

          <div className="title">
            <h3>Experience</h3>
          </div>
          {/* Experience card */}
          <div className="experience">
            <ExperienceCard
              title="Le Wagon"
              date="JUL 2023 - SET 2023"
              subtitle="Full Stack Developer"
              description="Desenvolvi uma aplicação web em equipe, uma plataforma que lembra quando regar plantas, utilizando HTML, Scss, Javascript, Bootstrap, Ruby e Rails e Heroku."
              icon={FaBus}
            />

            <ExperienceCard
              title="Hirota Food"
              date="SET 2020 - JUN 2022"
              subtitle="Architect"
              description="Atuei como Arquiteta, desenvolvendo projetos arquitetônicos e garantindo a implementação dos padrões estabelecidos pela empresa."
              icon={TbLetterH}
            />

            <ExperienceCard
              title="LB Arquitetura"
              date="JAN 2018 - AGO 2020"
              subtitle="Archtech"
              description="Desenvolvi projetos arquitetônicos, complementares e urbanísticos, além de trabalhar em modelagem 3D, design de interiores, e animação 3D."
              icon={BsLayoutWtf}
            />
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
              imageSrc="src/assets/animeart/01.png"
              projectLink="/project/1"
            />
            <AnimateCard
              name="Food Explorer"
              description="Desenvolvi o projeto final do curso Explorer da Rocketseat, o 'Food Explorer'. Trata-se de um aplicativo que simula um menu interativo para um restaurante fictício."
              imageSrc="src/assets/food_explorer/Home_Admin.png"
              projectLink="/project/2"
            />
            <AnimateCard
              name="Waterme"
              description="Participei do desenvolvimento de uma aplicação web em equipe (4 pessoas) chamada 'Waterme'. Essa aplicação tem como propósito lembrar quando regar as plantas e ensinar como cuidar delas."
              imageSrc="src/assets/waterme.png"
              projectLink="/project/3"
            />
            <AnimateCard
              name="TypeWeather"
              description="TypeWeather é um aplicativo de previsão do tempo para planejar seu dia, foi convertido de JavaScript (JS) para TypeScript (TS). É um projeto bônus da Rocketseat."
              imageSrc="src/assets/typeweather/desktop/Desktop_Busca.png"
              projectLink="/project/4"
            />
            <AnimateCard
              name="Calculator"
              description="Projeto pessoal focado na criação de uma calculadora responsiva seguindo a abordagem 'Mobile First'. A calculadora oferece funcionalidades básicas de cálculo."
              imageSrc="src/assets/calculator/Desktop_dark.png"
              projectLink="/project/5"
            />
            <AnimateCard
              name="FocusTimer"
              description="Projeto desenvolvido durante o curso Explorer da Rocketseat, no módulo de Avançando na programação WEB com JavaScript, para construirmos um timer."
              imageSrc="src/assets/focustimer/FocusTimer.png"
              projectLink="/project/6"
            />
            <AnimateCard
              name="IMC"
              description="Prjeto de um aplicativo de cálculo do Índice de Massa Corporal (IMC). O foco foi na implementação funcional que permitisse aos usuários calcular seu IMC, para avaliar a relação entre peso e altura."
              imageSrc="src/assets/imc/preview.png"
              projectLink="/project/7"
            />
            <AnimateCard
              name="Jogo da Advinhação"
              description="O objetivo central foi implementar uma aplicação interativa que desafia os usuários a adivinharem um número aleatório no intervalo de 0 a 10, escolhido pelo sistema."
              imageSrc="src/assets/jogo_da_advinhacao/Screen1.png"
              projectLink="/project/8"
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
