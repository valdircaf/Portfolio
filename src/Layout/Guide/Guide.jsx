import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { GuideStyle } from './styles';
import Video from '../Video/Video';
import Button from '../Buttons/Button';

// eslint-disable-next-line react/prop-types
export default function Guide({ video, link, text, title }) {
  return (
    <GuideStyle>
      <div className="video">
        <Video movie={video} />
        <div className="buttons">
          <BrowserRouter>
            <NavLink to={link}>
              <Button value="Repositório" />
            </NavLink>
          </BrowserRouter>
        </div>
      </div>
      <div className="explains">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <IoMdClose />
    </GuideStyle>
  );
}
