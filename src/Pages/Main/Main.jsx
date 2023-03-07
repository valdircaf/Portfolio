import React from 'react';
import { useInView } from 'react-intersection-observer';
import { NavLink, BrowserRouter } from 'react-router-dom';
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
} from 'react-icons/io5';
import { GiElephant } from 'react-icons/gi';
import { FiDownload } from 'react-icons/fi';
import { SiTypescript } from 'react-icons/si';
import { MainPage } from './styles';
import Perfil from './Perfil.jpeg';
import Button from '../../Layout/Buttons/Button';

export default function Main() {
  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <MainPage id="mainPage">
      <section className={isVisible ? 'visible' : ''}>
        <div className="container">
          <div className="informations" ref={myRef}>
            <h1>
              Olá, eu sou o <br />
              <span>Valdir Castro :)</span>
            </h1>
            <BrowserRouter>
              <NavLink
                to="https://drive.google.com/file/d/1vstGWL7WPNYQmz5_qI5PH0XxwZnakVfD/view?usp=sharing"
                target="_blank"
              >
                <Button value="Baixar CV" svg={<FiDownload />} />
              </NavLink>
            </BrowserRouter>
          </div>

          <div className="image">
            <img src={Perfil} alt="Foto de perfil" />
          </div>
        </div>

        <section className={isVisible ? 'skills' : 'skills'}>
          <h1>Habilidades</h1>
          <div className="elements">
            <div className="svgElements">
              HTML5 <IoLogoHtml5 />
            </div>
            <div>
              CSS3 <IoLogoCss3 />
            </div>
            <div>
              JavaScript
              <IoLogoJavascript />
            </div>
            <div>
              React.js <IoLogoReact />
            </div>
            <div>
              PostgreSQL <GiElephant />
            </div>
            <div>
              TypeScript <SiTypescript />
            </div>
          </div>
        </section>

        <article>
          <h1>Sobre Mim</h1>
          <p>
            Desenvolvedor Frontend com conhecimento em HTML, CSS, Javascript,
            React e Styled Components. Estudando atualmente banco de dados,
            especificamente PostgreSQL, integração com banco de dados pelo
            Sequelize
          </p>
        </article>
      </section>
    </MainPage>
  );
}
