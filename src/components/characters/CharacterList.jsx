import React from 'react';
import CharacterDetail from './CharacterDetail';
//import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
  return (
    <ul aria-label="List of Characters">
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterDetail {...character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
