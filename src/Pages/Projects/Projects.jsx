import React, { useState } from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { FaReact, FaCss3 } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { MdClose } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import { ProjectsPage } from './styles';
import Video from '../../Layout/Video/Video';
import ProjectsContainer from '../../Layout/Projetos/ProjectsContainer';
import PassGeneratorImage from '../../Images/passGenerator.png';
import PassGeneratorVideo from '../../Videos/passGenerator.mp4';
import weatherAppImage from '../../Images/weatherApp.png';
import weatherAppVideo from '../../Videos/WeatherApp.mp4';
import foodCommerceImage from '../../Images/foodCommerce.png';
import foodCommerceVideo from '../../Videos/foodCommerce.mp4';
import circleGameImage from '../../Images/circleGame.png';
import circleGameVideo from '../../Videos/circleGame.mp4';

export default function Projects() {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [isVisibleWeather, setIsVisibleWeather] = useState(false);
  const [isVisibleFood, setIsVisibleFood] = useState(false);
  const [isVisibleCircle, setIsVisibleCircle] = useState(false);
  const { ref, inView } = useInView();

  const setVisiblePass = e => {
    e.preventDefault();
    setIsVisiblePass(!isVisiblePass);
  };

  const setVisibleWeather = e => {
    setIsVisibleWeather(!isVisibleWeather);
    e.preventDefault();
  };

  const setVisibleFood = e => {
    setIsVisibleFood(!isVisibleFood);
    e.preventDefault();
  };

  const setVisibleCircle = e => {
    setIsVisibleCircle(!isVisibleCircle);
    e.preventDefault();
  };

  return (
    <ProjectsPage>
      <BrowserRouter>
        <h2>CLIQUE NA IMAGEM PARA VER MAIS</h2>
        <section className={inView ? 'visible' : ''}>
          {/* Pass Generator */}
          <div ref={ref}>
            <NavLink
              onClick={e => {
                setVisiblePass(e);
              }}
            >
              <ProjectsContainer
                name="Pass Generator"
                image={PassGeneratorImage}
                alt="Imagem do app Pass Generator"
                svg1={<FaReact />}
                svg2={<DiJavascript1 />}
                svg3={<FaCss3 />}
              />
            </NavLink>
            <div className={isVisiblePass ? 'video' : 'hidePass'}>
              <Video movie={PassGeneratorVideo} />
              <MdClose
                onClick={e => {
                  setVisiblePass(e);
                }}
              />
            </div>
          </div>
          {/* Daily Weather */}

          <div>
            <NavLink
              onClick={e => {
                setVisibleWeather(e);
              }}
            >
              <ProjectsContainer
                name="Daily Weather"
                image={weatherAppImage}
                alt="Imagem do website Daily Weather"
                svg1={<FaReact />}
                svg2={<DiJavascript1 />}
                svg3={<FaCss3 />}
              />
            </NavLink>
            <div className={isVisibleWeather ? 'video' : 'hideWeather'}>
              <Video movie={weatherAppVideo} />
              <MdClose
                onClick={e => {
                  setVisibleWeather(e);
                }}
              />
            </div>
          </div>
          {/* Food Commerce */}

          <div>
            <NavLink onClick={setVisibleFood}>
              <ProjectsContainer
                name="FoodCommerce"
                image={foodCommerceImage}
                alt="Imagem do website Food Commerce"
                svg1={<FaReact />}
                svg2={<DiJavascript1 />}
                svg3={<FaCss3 />}
                svg4={<SiTypescript />}
              />
            </NavLink>
            <div className={isVisibleFood ? 'video' : 'hideFood'}>
              <Video movie={foodCommerceVideo} />
              <MdClose
                onClick={e => {
                  setVisibleFood(e);
                }}
              />
            </div>
          </div>
          {/* Dot Game */}

          <div>
            <NavLink onClick={setVisibleCircle}>
              <ProjectsContainer
                name="Dot Game"
                image={circleGameImage}
                alt="Imagem do game Dot Game"
                svg1={<FaReact />}
                svg2={<DiJavascript1 />}
                svg3={<FaCss3 />}
              />
            </NavLink>
            <div className={isVisibleCircle ? 'video' : 'hideCircle'}>
              <Video movie={circleGameVideo} />
              <MdClose
                onClick={e => {
                  setVisibleCircle(e);
                }}
              />
            </div>
          </div>
        </section>
      </BrowserRouter>
    </ProjectsPage>
  );
}
