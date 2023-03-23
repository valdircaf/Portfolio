import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { ProjectsDivContainer } from './styles';
import weatherAppImg from '../../Images/weatherApp.png';

export default function ProjectsDiv() {
  return (
    <ProjectsDivContainer>
      <section>
        <h1>Teste</h1>
        <FaLinkedin />
      </section>
      <img src={weatherAppImg} alt="teste" />
    </ProjectsDivContainer>
  );
}
