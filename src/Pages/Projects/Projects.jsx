import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaCss3, FaSass } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { ProjectsContainer } from './styles';
import Grid from '../../Layout/Grid/Grid';
import ProjectsDiv from '../../Layout/ProjectsDiv/ProjectsDiv';
// Import Imagens
import DailyWeatherImage from '../../Images/weatherApp.png';
import CalculatorImage from '../../Images/Calculadora.png';
import PassGeneratorImage from '../../Images/passGenerator.png';
import CircleGameImage from '../../Images/circleGame.png';
import SearchDoorsImage from '../../Images/SearchPhoto.png';
// Import Videos
import DailyWeatherVideo from '../../Videos/DailyWeather.mp4';
import CalculatorVideo from '../../Videos/Calculadora.mp4';
import PassGeneratorVideo from '../../Videos/passGenerator.mp4';
import CircleGameVideo from '../../Videos/circleGame.mp4';
import SearchDoorsVideo from '../../Videos/Search Doors.mp4';

export default function Projects() {
  // Daily Weather
  const [isActiveDaily, setIsActiveDaily] = useState(false);
  const setActiveDaily = () => {
    setIsActiveDaily(!isActiveDaily);
  };

  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const setActiveSearch = () => {
    setIsActiveSearch(!isActiveSearch);
  };
  // Calculator
  const [isActiveCalculator, setIsActiveCalculator] = useState(false);
  const setActiveCalculator = () => {
    setIsActiveCalculator(!isActiveCalculator);
  };
  // PassGenerator
  const [isActivePass, setIsActivePass] = useState(false);
  const setActivePass = () => {
    setIsActivePass(!isActivePass);
  };
  // Circle Game
  const [isActiveCircle, setIsActiveCircle] = useState(false);
  const setActiveCircle = () => {
    setIsActiveCircle(!isActiveCircle);
  };

  const { ref, inView } = useInView();

  return (
    <ProjectsContainer>
      <header className={inView ? 'header' : 'hide'}>
        <h1>Projetos</h1>
        <div className="bar" />
      </header>
      <section className={inView ? 'highlights' : 'hide'}>
        <h1>Destaques</h1>
        <div className="bar" />
        <section className="highlightsProjects">
          {/* Daily Weather */}
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div onClick={setActiveDaily} onKeyDown={setActiveDaily}>
            <ProjectsDiv
              h1="Daily Weather"
              svg={<FaReact />}
              svg2={<SiStyledcomponents />}
              img={DailyWeatherImage}
              alt="Imagem do website Daily Weather"
              date="16 de março de 2023"
            />
            <Grid
              active={isActiveDaily}
              h1="Daily Weather"
              p="- Daily Weather é uma aplicação web que consome uma API Rest e exibe a condição climática de todas as cidades, bairros estados ou países do mundo. Obtendo tanto os dados da temperatura atual, quanto nível de umidade e a quantidade de nuvens."
              link="https://github.com/valdircaf/DailyWeatherApp"
              link2="https://www.linkedin.com/posts/valdir-castro10_react-javascript-styledcomponents-activity-7051712449812586496-bezz?utm_source=share&utm_medium=member_desktop"
              link3="https://daily-weather-app.vercel.app/"
              p2="- Este projeto foi desenvolvido com as seguintes tecnologias:"
              p3="&#8226; React &#8226; Styled Components &#8226; Javascript"
              video={DailyWeatherVideo}
            />
          </div>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div onClick={setActiveSearch} onKeyDown={setActiveSearch}>
            <ProjectsDiv
              img={SearchDoorsImage}
              h1="Search Doors"
              svg={<FaReact />}
              svg2={<FaSass />}
              date="18 de Maio de 2023"
            />
            <Grid
              active={isActiveSearch}
              h1="Search Doors"
              link="https://github.com/valdircaf/Search-Doors"
              link2="https://www.linkedin.com/posts/valdir-castro10_ol%C3%A1-h%C3%A1-um-tempo-atr%C3%A1s-na-minha-antiga-empresa-activity-7064984464719790080-0BPk?utm_source=share&utm_medium=member_desktop"
              link3="https://search-doors.vercel.app/"
              p="- Há um tempo atrás, na minha antiga empresa, percebi um problema em relação à precificação, onde para precificar um kit de algum produto, tinha que olhar uma tabela de preços e procurar um por um para formar o preço do kit.

              Visto esse problema, com React.js tive a ideia de desenvolver esta página web que o usuário pode pesquisar o preço de algum produto, e ele retorna em carrossel todos os produtos disponíveis."
              p2="- Este projeto foi desenvolvido com as seguintes tecnologias:"
              p3="&#8226; React &#8226; SASS"
              video={SearchDoorsVideo}
            />
          </div>
          {/* Calculator */}
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        </section>
      </section>

      <section className={inView ? 'allProjects' : 'hide'} ref={ref}>
        <h1>Todos os projetos</h1>
        <div className="bar" />
        <section className="allProjectsDivs">
          {/* Pass Generator */}
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div onClick={setActivePass} onKeyDown={setActivePass}>
            <ProjectsDiv
              img={PassGeneratorImage}
              alt="Imagem do website Pass Generator"
              h1="Pass Generator"
              svg={<FaReact />}
              svg2={<IoLogoJavascript />}
              svg3={<FaCss3 />}
              date="21 de Dezembro de 2022"
            />
            <Grid
              h1="Pass Generator"
              video={PassGeneratorVideo}
              active={isActivePass}
              p="- Pass Generator é um app que cria senhas aleatórias, baseadas na seleção do usuário. Pode-se escolher entre letras maiúsculas e minúsculas, números e caracteres especiais."
              link="https://github.com/valdircaf/geradorDeSenha"
              link2="https://www.linkedin.com/posts/valdir-castro10_react-javascript-desenvolvimento-activity-7046974709619433472-htEG?utm_source=share&utm_medium=member_desktop"
              link3="https://passgeneratorportfolio.netlify.app/"
              p2="- Vi esta ideia de projeto em um dos cursos que fazia na época e criei o meu próprio. Achei um projeto bem legal para praticar a lógica."
              p3="- Este projeto foi desenvolvido com as seguintes tecnologias: "
              p4="&#8226; React &#8226; CSS &#8226; Javascript"
            />
          </div>

          {/* Circle Game */}
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div onClick={setActiveCircle} onKeyDown={setActiveCircle}>
            <ProjectsDiv
              img={CircleGameImage}
              alt="Imagem do website Circle Game"
              h1="Circle Game"
              svg={<FaReact />}
              svg2={<FaCss3 />}
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

          {/* Daily Weather */}
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div onClick={setActiveDaily} onKeyDown={setActiveDaily}>
            <ProjectsDiv
              h1="Daily Weather"
              svg={<FaReact />}
              svg2={<SiStyledcomponents />}
              img={DailyWeatherImage}
              alt="Imagem do website Daily Weather"
              date="16 de março de 2023"
            />
            <Grid
              active={isActiveDaily}
              h1="Daily Weather"
              p="- Daily Weather é uma aplicação web que consome uma API Rest e exibe a condição climática de todas as cidades, bairros estados ou países do mundo. Obtendo tanto os dados da temperatura atual, quanto nível de umidade e a quantidade de nuvens."
              link="https://github.com/valdircaf/DailyWeatherApp"
              link2="https://www.linkedin.com/posts/valdir-castro10_react-javascript-styledcomponents-activity-7051712449812586496-bezz?utm_source=share&utm_medium=member_desktop"
              link3="https://daily-weather-app.vercel.app/"
              p2="- Este projeto foi desenvolvido com as seguintes tecnologias:"
              p3="&#8226; React &#8226; Styled Components &#8226; Javascript"
              video={DailyWeatherVideo}
            />
          </div>

          {/* Calculator */}
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div onClick={setActiveCalculator} onKeyDown={setActiveCalculator}>
            <ProjectsDiv
              img={CalculatorImage}
              h1="Calculadora"
              svg={<IoLogoJavascript />}
              svg2={<FaCss3 />}
              date="19 de Abril de 2023"
            />
            <Grid
              active={isActiveCalculator}
              h1="Calculadora"
              p="- Calculadora é um projeto antigo, desenvolvido quando estava estudando lógica em Javascript. Resolvi pegar este projeto e refazer o código e layout, tornando-o mais o mais moderno possível. Desenvolvi um layout que simula a workspace de um desktop, com o ícone interativo, que abre e fecha a calculadora."
              p2="- Este projeto foi desenvolvido com as seguintes tecnologias:"
              p3="&#8226; Javascript"
              video={CalculatorVideo}
            />
          </div>
        </section>
      </section>
    </ProjectsContainer>
  );
}
