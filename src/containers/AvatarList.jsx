import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import getCharacters from '../services/API';
import styles from '../components/app/App.css';

export default function AvatarList() {
  const [loading, setLoading] = useState(true);
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(setCharList)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <h2 className={styles.listTitle}>
        The Characters of Avatar: The Last Airbender
      </h2>
      <p className={styles.listSubTitle}>⚡ click on a picture for detail ⚡</p>
      <hr></hr>
      <CharacterList characters={charList} />
    </>
  );
}
