import React from 'react';
import CharacterDetail from './CharacterDetail';
import styles from '../app/App.css';
//import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
  return (
    <ul className={styles.listArea} aria-label="List of Characters">
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterDetail {...character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
