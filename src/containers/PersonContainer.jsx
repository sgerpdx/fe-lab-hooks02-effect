import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
//import PersonDetail from '../components/characters/PersonDetail';
import getCharacters from '../services/API';

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
      <p>Person Container</p>
      <CharacterList characters={charList} />
    </>
  );
}
