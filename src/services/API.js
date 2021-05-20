const getCharacters = async () => {
  const res = await fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters'
  );
  const characters = await res.json();
  const formattedData = characters.map((character) => {
    return {
      id: character._id,
      name: character.name,
      image: character.photoUrl,
      faction: character.affiliation,
    };
  });

  return formattedData;
};

export default getCharacters;
