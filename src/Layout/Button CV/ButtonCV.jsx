import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { ButtonCVModule } from './styles';

// eslint-disable-next-line react/prop-types
export default function ButtonCV({ text, link }) {
  return (
    <ButtonCVModule>
      <BrowserRouter>
        <NavLink to={link} target="_blank">
          {text}
        </NavLink>
      </BrowserRouter>
    </ButtonCVModule>
  );
}
