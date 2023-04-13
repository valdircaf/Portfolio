import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AboutContainer } from './styles';

export default function About() {
  const [ref, inView] = useInView();
  return (
    <AboutContainer>
      <section className={inView ? 'view' : 'hide'} id="about">
        <h1>Sobre Mim</h1>
        <div className="bar" />
        <p ref={ref}>
          Desenvolvedor Frontend com habilidade em React, Javascript, Styled
          Components, Git, consumo de API Rest e PostgreSQL. Apaixonado em
          componentes reutilizáveis. Cursando Ciências da Computação na FPB -
          Faculdade Internacional da Paraiba e atualmente estudando UI, Next.js
          e banco de dados com PostgreSQL por cursos online.
        </p>
      </section>
    </AboutContainer>
  );
}
