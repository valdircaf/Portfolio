/* eslint-disable react/prop-types */
import React from 'react';

import { ProjectsDiv } from './styles';
// eslint-disable-next-line react/prop-types
export default function ProjectsContainer({
  name,
  image,
  alt,
  svg1,
  svg2,
  svg3,
  svg4,
  onClick,
}) {
  return (
    <ProjectsDiv onClick={onClick}>
      <img src={image} alt={alt} />
      <section className="informations">
        <p className="hover"> Ver mais</p>
        <p className="visible">{name}</p>
        <section className="svgs">
          <p>{svg1}</p>
          <p>{svg2}</p>
          <p>{svg3}</p>
          <p>{svg4}</p>
        </section>
      </section>
    </ProjectsDiv>
  );
}
