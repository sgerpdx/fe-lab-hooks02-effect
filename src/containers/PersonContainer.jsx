import React, { useState, useEffect } from 'react';
import PersonDetail from '../components/characters/PersonDetail';
import { useThisPerson } from '../hooks/personHook';

export default function PersonContainer(props) {
  const { loading, charItem } = useThisPerson(props);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <PersonDetail character={charItem} />
    </>
  );
}
