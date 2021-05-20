import React from 'react';
import CharacterDetail from './CharacterDetail';
import styles from '../app/App.css';
import PropTypes from 'prop-types';

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

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      faction: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
