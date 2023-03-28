/* eslint-disable no-unused-vars */
import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';
import { GridContainer } from './styles';
import Button from '../Button CV/ButtonCV';

// eslint-disable-next-line react/prop-types
export default function Grid({ h1, p, video, active, link, link2 }) {
  const { ref, inView } = useInView();
  return (
    <GridContainer>
      <section className={active ? 'show' : 'hide'} ref={ref}>
        <section className={inView ? 'animation' : ''}>
          <p className="svg">
            <RiCloseFill onClick={!active} />
          </p>

          <section className="texts">
            <h1>{h1}</h1>
            <p>{p}</p>
          </section>
          <section className="video">
            <video controls autoPlay>
              <source src={video} type="video/mp4" />
              <track
                src="captions_en.vtt"
                kind="captions"
                srcLang="en"
                label="english_captions"
              />
            </video>
            <Button text="Ver no Github" link={link} />
            <Button text="Ver no LinkedIn" link={link2} />
          </section>
        </section>
      </section>
    </GridContainer>
  );
}
