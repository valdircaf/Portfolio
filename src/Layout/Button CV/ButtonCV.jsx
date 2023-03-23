import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { ButtonCVModule } from './styles';

// eslint-disable-next-line react/prop-types
export default function ButtonCV({ text }) {
  return (
    <ButtonCVModule>
      <BrowserRouter>
        <NavLink>{text}</NavLink>
      </BrowserRouter>
    </ButtonCVModule>
  );
}
