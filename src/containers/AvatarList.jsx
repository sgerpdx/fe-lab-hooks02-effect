import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import styles from '../components/app/App.css';
import { useThisList } from '../hooks/avatarHook';

export default function AvatarList() {
  // const [loading, setLoading] = useState(true);
  // const [charList, setCharList] = useState([]);

  // useEffect(() => {
  //   getCharacters()
  //     .then(setCharList)
  //     .finally(() => setLoading(false));
  // }, []);

  const { loading, charList } = useThisList();

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
