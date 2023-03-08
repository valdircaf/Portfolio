import React from 'react';
import { Link } from 'react-scroll';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { IoNewspaperOutline } from 'react-icons/io5';
import { Principal } from './styles';
import backgroundImage from './background.jpg';

export default function Header() {
  // style={{ backgroundImage: `url(${photo})` }}
  return (
    <Principal style={{ backgroundImage: `url(${backgroundImage})` }}>
      <BrowserRouter>
        <div>
          <h1>Valdir Castro</h1>
          <h2>Frontend Developer</h2>
          <nav>
            <div>
              <NavLink
                to="https://www.linkedin.com/in/valdir-castro10/"
                target="_blank"
              >
                <SlSocialLinkedin />
              </NavLink>
            </div>
            <div>
              <NavLink to="https://github.com/valdircaf" target="_blank">
                <FaGithub />
              </NavLink>
            </div>
            <div>
              <NavLink
                to="https://drive.google.com/file/d/1PBAn-oAs0J0BhGrArFsn2FuiK5nvx_0i/view?usp=sharing"
                target="_blank"
              >
                <IoNewspaperOutline />
              </NavLink>
            </div>
          </nav>

          <footer className="footer">
            <article>
              <p>Scroll</p>
            </article>
            <Link to="mainPage" spy smooth offset={50} duration={500}>
              <AiOutlineArrowDown />
            </Link>
          </footer>
        </div>
      </BrowserRouter>
    </Principal>
  );
}
