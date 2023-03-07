import React from 'react';
import { StyledButton } from './styles';

// eslint-disable-next-line react/prop-types
export default function Button({ value, svg }) {
  // eslint-disable-next-line react/button-has-type
  return (
    // eslint-disable-next-line react/button-has-type
    <StyledButton>
      {value} {svg}
    </StyledButton>
  );
}
