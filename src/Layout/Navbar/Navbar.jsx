import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { NavbarContainer } from './styles';

export default function Navbar() {
  const [showBar, setShowBar] = useState(false);
  const setIsActiveShowBar = () => {
    setShowBar(!showBar);
  };
  const hideScrollBar = () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
  };
  const showScrollBar = () => {
    document.documentElement.style.overflow = 'scroll';
  };
  return (
    <NavbarContainer>
      <BrowserRouter>
        <section className="svg">
          <Link to="about" spy smooth offset={50} duration={500}>
            <HiMenu
              onClick={() => {
                hideScrollBar();
                setIsActiveShowBar();
              }}
            />
          </Link>
        </section>
        <ul className="navbarUl">
          <li>
            <Link to="home" spy smooth offset={50} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="about" spy smooth offset={50} duration={500}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="skills" spy smooth offset={50} duration={500}>
              Habilidades
            </Link>
          </li>
          <li>
            <Link to="projects" spy smooth offset={50} duration={500}>
              Projetos
            </Link>
          </li>
        </ul>
        <section className={showBar ? 'menuOpen' : 'hide'}>
          <AiOutlineClose
            onClick={() => {
              setShowBar(!showBar);
              showScrollBar();
            }}
          />
          <h1>Bem Vindo(a) ao meu Portfólio :)</h1>
          <ul>
            <li>
              <Link
                to="home"
                spy
                smooth
                offset={50}
                duration={500}
                onClick={() => {
                  setShowBar(!showBar);
                  showScrollBar();
                }}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy
                smooth
                offset={50}
                duration={500}
                onClick={() => {
                  setShowBar(!showBar);
                  showScrollBar();
                }}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy
                smooth
                offset={50}
                duration={500}
                onClick={() => {
                  setShowBar(!showBar);
                  showScrollBar();
                }}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy
                smooth
                offset={50}
                duration={500}
                onClick={() => {
                  setShowBar(!showBar);
                  showScrollBar();
                }}
              >
                Projetos
              </Link>
            </li>
          </ul>
        </section>
      </BrowserRouter>
    </NavbarContainer>
  );
}
