import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

const PersonDetail = ({ character }) => {
  //console.log('Props:',);
  return (
    <>
      <figure>
        <img
          src={character.image || 'http://placekitten.com/200/300'}
          alt={character.name}
        />
        <figcaption>
          <p>Name: {character.name}</p>
          <p>of the {character.faction}</p>
        </figcaption>
      </figure>
      <Link to={'/'}>
        <h3>Return to All Characters</h3>
      </Link>
    </>
  );
};

export default PersonDetail;
