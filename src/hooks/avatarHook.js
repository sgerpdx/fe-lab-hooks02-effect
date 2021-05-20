import { useState, useEffect } from 'react';
import getCharacters from '../services/API';

export const useThisList = () => {
  const [loading, setLoading] = useState(true);
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(setCharList)
      .finally(() => setLoading(false));
  }, []);

  return { loading, charList };
};
