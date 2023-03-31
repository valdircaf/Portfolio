import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CuteButtonContainer } from './styles';

// eslint-disable-next-line react/prop-types
export default function CuteButton({ text }) {
  const [ref, inView] = useInView();
  return (
    <CuteButtonContainer ref={ref} inView={inView}>
      <p>{text}</p>
    </CuteButtonContainer>
  );
}
