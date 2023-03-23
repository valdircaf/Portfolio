import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { HeaderContainer } from './styles';
import PhotoPerfil from '../../Images/Perfil.jpeg';
import ButtonCV from '../../Layout/Button CV/ButtonCV';

export default function Header() {
  return (
    <HeaderContainer>
      <section>
        <h1>
          Olá, eu sou o <span>Valdir Castro :)</span>
        </h1>
        <p>Desenvolvedor Front-End</p>
        <div>
          <BrowserRouter>
            <NavLink>
              <AiFillGithub />
            </NavLink>
            <NavLink>
              <FaLinkedin />
            </NavLink>
          </BrowserRouter>
        </div>
        <ButtonCV type="button" text="Download CV" />
      </section>
      <img src={PhotoPerfil} alt="Foto de perfil" />
    </HeaderContainer>
  );
}
