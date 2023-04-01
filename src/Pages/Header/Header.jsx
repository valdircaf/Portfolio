import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { HeaderContainer } from './styles';
import PhotoPerfil from '../../Images/Perfil.png';
import ButtonCV from '../../Layout/Button CV/ButtonCV';

export default function Header() {
  const [ref, inView] = useInView();
  return (
    <HeaderContainer id="home">
      <section ref={ref} className={inView ? 'view' : ''}>
        <h1>Olá, eu sou o</h1>
        <h2>Valdir Castro :)</h2>
        <p>Desenvolvedor Front-End</p>
        <div>
          <BrowserRouter>
            <NavLink to="https://github.com/valdircaf" target="_blank">
              <AiFillGithub />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/valdir-castro10/"
              target="_blank"
            >
              <FaLinkedin />
            </NavLink>
          </BrowserRouter>
        </div>
        <ButtonCV
          type="button"
          text="Download CV"
          link="https://drive.google.com/file/d/17vUivovXDy9TbiJyXH7K2QVfv6exqUS-/view"
        />
      </section>

      <img
        src={PhotoPerfil}
        alt="Foto de perfil"
        className={inView ? 'view' : ''}
      />
    </HeaderContainer>
  );
}
