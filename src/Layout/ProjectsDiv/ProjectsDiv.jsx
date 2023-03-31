import React from 'react';
import { ProjectsDivContainer } from './styles';
import CuteButton from '../CuteButton/CuteButton';

// eslint-disable-next-line react/prop-types
export default function ProjectsDiv({ h1, svg, svg2, svg3, img, alt, date }) {
  return (
    <ProjectsDivContainer>
      <section>
        <h1>{h1}</h1>
        <div>
          <p>{svg}</p>
          <p>{svg2}</p>
          <p>{svg3}</p>
        </div>
      </section>
      <img src={img} alt={alt} />
      <div className="infoAfter">
        <p>{date}</p>
        <CuteButton text="Ver Mais" />
      </div>
    </ProjectsDivContainer>
  );
}
