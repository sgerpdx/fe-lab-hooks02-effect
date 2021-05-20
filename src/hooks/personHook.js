import { useState, useEffect } from 'react';
import getPerson from '../services/detailFetchAPI';

export const useThisPerson = (props) => {
  const [loading, setLoading] = useState(true);
  const [charItem, setCharItem] = useState([]);
  //const {id} = useParams();

  useEffect(() => {
    getPerson(props.match.params.id)
      .then(setCharItem)
      .finally(() => setLoading(false));
  }, []);

  return { loading, charItem };
};
