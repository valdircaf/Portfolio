/* eslint-disable no-unused-vars */
import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { GridContainer } from './styles';
import Button from '../Button CV/ButtonCV';

// eslint-disable-next-line react/prop-types
export default function Grid({
  // eslint-disable-next-line react/prop-types
  h1,
  // eslint-disable-next-line react/prop-types
  p,
  // eslint-disable-next-line react/prop-types
  video,
  // eslint-disable-next-line react/prop-types
  active,
  // eslint-disable-next-line react/prop-types
  link,
  // eslint-disable-next-line react/prop-types
  link2,
  // eslint-disable-next-line react/prop-types
  p2,
  // eslint-disable-next-line react/prop-types
  p3,
  // eslint-disable-next-line react/prop-types
  p4,
  // eslint-disable-next-line react/prop-types
  link3,
}) {
  return (
    <GridContainer>
      <section className={active ? 'show' : 'hide'}>
        <section>
          <p className="svg">
            <RiCloseFill onClick={!active} />
          </p>

          <section className="texts">
            <h1>{h1}</h1>
            <div className="bar" />
            <p>{p}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
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

            <div className="buttons">
              <Button text="Ver no Github" link={link} />
              <Button text="Ver no LinkedIn" link={link2} />
              <Button text="Ver Site" link={link3} />
            </div>
          </section>
        </section>
      </section>
    </GridContainer>
  );
}
