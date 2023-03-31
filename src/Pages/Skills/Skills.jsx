/* eslint-disable no-unused-vars */
import React from 'react';
import { FaReact, FaHtml5, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiStyledcomponents, SiPostgresql } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { SkillsContainer } from './styles';
import Card from '../../Layout/Cards/Cards';

// eslint-disable-next-line react/prop-types
export default function Skills({ text, svg }) {
  const [ref, inView] = useInView();
  return (
    <SkillsContainer>
      <section className={inView ? 'view' : 'hide'} id="skills">
        <h1>Habilidades</h1>
        <div className="bar" />
        <section ref={ref}>
          <Card text="ReactJS" svg={<FaReact />} />
          <Card text="Javascript" svg={<SiJavascript />} />
          <Card text="HTML" svg={<FaHtml5 />} />
          <Card text="Styled Components" svg={<SiStyledcomponents />} />
          <Card text="PostgreSQL" svg={<SiPostgresql />} />
          <Card text="Git" svg={<FaGithub />} />
        </section>
      </section>
    </SkillsContainer>
  );
}
