/* eslint-disable no-unused-vars */
import React from 'react';
import { FaReact, FaHtml5, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiStyledcomponents, SiPostgresql } from 'react-icons/si';
import { SkillsContainer } from './styles';
import Card from '../../Layout/Cards/Cards';

// eslint-disable-next-line react/prop-types
export default function Skills({ text, svg }) {
  return (
    <SkillsContainer>
      <h1>Habilidades</h1>
      <section>
        <Card text="ReactJS" svg={<FaReact />} />
        <Card text="Javascript" svg={<SiJavascript />} />
        <Card text="HTML" svg={<FaHtml5 />} />
        <Card text="Styled Components" svg={<SiStyledcomponents />} />
        <Card text="PostgreSQL" svg={<SiPostgresql />} />
        <Card text="Git" svg={<FaGithub />} />
      </section>
    </SkillsContainer>
  );
}
