import React, { useState } from 'react';
import { FaReact, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiStyledcomponents } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { ProjectsContainer } from './styles';
import ProjectsDiv from '../../Layout/ProjectsDiv/ProjectsDiv';
import Grid from '../../Layout/Grid/Grid';
import WeatherAppImg from '../../Images/weatherApp.png';
import WeatherAppVideo from '../../Videos/WeatherApp.mp4';
import passGeneratorImg from '../../Images/passGenerator.png';
import passGeneratorVideo from '../../Videos/passGenerator.mp4';
import FoodCommerceImg from '../../Images/foodCommerce.png';
import FoodCommerceVideo from '../../Videos/foodCommerce.mp4';
import CircleGameImg from '../../Images/circleGame.png';
import CircleGameVideo from '../../Videos/circleGame.mp4';

export default function Projects() {
  const [isActiveDaily, setIsActiveDaily] = useState(false);
  const [isActivePass, setIsActivePass] = useState(false);
  const [isActiveFood, setIsActiveFood] = useState(false);
  const [isActiveCircle, setIsActiveCircle] = useState(false);
  const [ref, inView] = useInView();
  const setActiveDaily = () => {
    setIsActiveDaily(!isActiveDaily);
  };

  const setActivePass = () => {
    setIsActivePass(!isActivePass);
  };

  const setActiveFood = () => {
    setIsActiveFood(!isActiveFood);
  };

  const setActiveCircle = () => {
    setIsActiveCircle(!isActiveCircle);
  };

  return (
    <ProjectsContainer>
      <h1 className={inView ? 'show' : 'hide'} id="projects">
        Projetos
      </h1>
      <div className={inView ? 'bar' : 'hide'} />
      <section className={inView ? 'show' : 'hide'}>
        <div
          onClick={() => {
            setActiveDaily();
          }}
          onKeyDown={setActiveDaily}
          role="presentation"
        >
          <ProjectsDiv
            h1="Daily Weather"
            svg={<FaReact />}
            svg2={<IoLogoJavascript />}
            svg3={<SiStyledcomponents />}
            img={WeatherAppImg}
            alt="Foto do app Daily Weather App"
            date="19 de Fevereiro de 2023"
          />
          <Grid
            active={isActiveDaily}
            h1="Daily Weather"
            p="- Daily Weather é uma aplicação web que consome uma API Rest e exibe a condição climática de todas as cidades, bairros estados ou países do mundo. Obtendo tanto os dados da temperatura atual, quanto nível de umidade e a quantidade de nuvens."
            video={WeatherAppVideo}
            link="https://github.com/valdircaf/Daily-Weather-App"
            link2="https://www.linkedin.com/posts/valdir-castro10_react-javascript-activity-7036165759001059328-jyUs?utm_source=share&utm_medium=member_desktop"
            link3="https://daily-weather-app.vercel.app/"
            p2="- Este projeto foi desenvolvido com as seguintes tecnologias:"
            p3="&#8226; React &#8226; Styled Components &#8226; Javascript"
          />
        </div>
        <div
          onClick={() => {
            setActivePass();
          }}
          onKeyDown={setActivePass}
          role="presentation"
          ref={ref}
        >
          <ProjectsDiv
            h1="Pass Generator"
            svg={<FaReact />}
            svg2={<IoLogoJavascript />}
            svg3={<FaCss3 />}
            img={passGeneratorImg}
            alt="Foto do app Pass Generator"
            date="21 de Dezembro de 2022"
          />
          <Grid
            active={isActivePass}
            h1="Pass Generator"
            p="- Pass Generator é um app que cria senhas aleatórias, baseadas na seleção do usuário. Pode-se escolher entre letras maiúsculas e minúsculas, números e caracteres especiais."
            video={passGeneratorVideo}
            link="https://github.com/valdircaf/geradorDeSenha"
            link2="https://www.linkedin.com/posts/valdir-castro10_react-javascript-desenvolvimento-activity-7046974709619433472-htEG?utm_source=share&utm_medium=member_desktop"
            link3="https://passgeneratorportfolio.netlify.app/"
            p2="- Vi esta ideia de projeto em um dos cursos que fazia na época e criei o meu próprio. Achei um projeto bem legal para praticar a lógica."
            p3="- Este projeto foi desenvolvido com as seguintes tecnologias: "
            p4="&#8226; React &#8226; CSS &#8226; Javascript"
          />
        </div>
        <div
          onClick={() => {
            setActiveFood();
          }}
          onKeyDown={setActiveFood}
          role="presentation"
        >
          <ProjectsDiv
            h1="Food Commerce"
            svg={<FaReact />}
            svg2={<SiTypescript />}
            svg3={<SiStyledcomponents />}
            img={FoodCommerceImg}
            alt="Foto do website Food Commerce"
            date="01 de Fevereiro de 2023"
          />
          <Grid
            active={isActiveFood}
            h1="Food Commerce"
            p="- Food Commerce é um website que simula um e-commerce de uma lanchonete. Nele, temos os lanches extraídos de uma API Rest local com JSON."
            video={FoodCommerceVideo}
            link="https://github.com/valdircaf/foodCommerce"
            p2="- Este foi um projeto bem desafiador, visto que foi meu primeiro projeto utilizando Typescript e Styled Components."
            p3="- Este projeto foi desenvolvido com as seguintes tecnologias:"
            p4="&#8226; React &#8226; Styled Components &#8226; Typescript"
          />
        </div>
        <div
          onClick={() => {
            setActiveCircle();
          }}
          onKeyDown={setActiveCircle}
          role="presentation"
        >
          <ProjectsDiv
            h1="Circle Game"
            svg={<FaReact />}
            svg2={<IoLogoJavascript />}
            svg3={<FaCss3 />}
            img={CircleGameImg}
            alt="Foto do game Circle Game"
            date="27 de Dezembro de 2022"
          />
          <Grid
            active={isActiveCircle}
            h1="Circle Game"
            p="- Circle game é um jogo que renderiza pequenos pontos onde o usuário clica. Há dois botões inclusos, refazer e desfazer, onde podemos desfazer o último ponto renderizado, ou refazer o ponto que foi desfeito."
            video={CircleGameVideo}
            link="https://github.com/valdircaf/jogoDosPontos"
            p2="- Vi esse desafio certo dia, enquanto estava vendo vídeos de desafios em React para executar."
            p3="- Este projeto foi desenvolvido com as seguintes tecnologias:"
            p4="&#8226; React &#8226; Javascript"
          />
        </div>
      </section>
    </ProjectsContainer>
  );
}
