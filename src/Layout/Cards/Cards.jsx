/* eslint-disable no-unused-vars */
import React from 'react';
import { CardContainer } from './styles';

// eslint-disable-next-line react/prop-types
export default function Card({ text, svg }) {
  return (
    <CardContainer>
      <h2>{text}</h2>
      {svg}
    </CardContainer>
  );
}
