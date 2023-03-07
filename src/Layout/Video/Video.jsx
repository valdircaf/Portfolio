import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Video({ movie }) {
  return (
    <video controls autoPlay>
      <source src={movie} type="video/mp4" />
      <track
        src="captions_en.vtt"
        kind="captions"
        srcLang="en"
        label="english_captions"
      />
      <track
        src="captions_es.vtt"
        kind="captions"
        srcLang="es"
        label="spanish_captions"
      />
    </video>
  );
}
