import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

const CharacterDetail = ({ name, image, faction }) => (
  <figure>
    <img src={image || 'https://placekitten.com/200/300'} alt={name} />
    <figcaption>
      <p>Name: {name}</p>
      <p>of the {faction}</p>
    </figcaption>
  </figure>
);

export default CharacterDetail;
