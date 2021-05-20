import React, { useState, useEffect } from 'react';
import PersonDetail from '../components/characters/PersonDetail';
import getPerson from '../services/detailFetchAPI';

export default function PersonContainer(props) {
  const [loading, setLoading] = useState(true);
  const [charItem, setCharItem] = useState([]);
  //const {id} = useParams();

  useEffect(() => {
    getPerson(props.match.params.id)
      .then(setCharItem)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <PersonDetail character={charItem} />
    </>
  );
}
