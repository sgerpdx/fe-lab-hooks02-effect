import React, { useState, useEffect } from 'react';
import PersonDetail from '../components/characters/PersonDetail';
import { useThisPerson } from '../hooks/personHook';

export default function PersonContainer(props) {
  // const [loading, setLoading] = useState(true);
  // const [charItem, setCharItem] = useState([]);

  // useEffect(() => {
  //   getPerson(props.match.params.id)
  //     .then(setCharItem)
  //     .finally(() => setLoading(false));
  // }, []);

  const { loading, charItem } = useThisPerson(props);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <PersonDetail character={charItem} />
    </>
  );
}
