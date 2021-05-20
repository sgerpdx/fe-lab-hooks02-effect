const getPerson = async (id) => {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
  );
  const character = await res.json();
  return {
    id: character._id,
    name: character.name,
    image: character.photoUrl,
    faction: character.affiliation,
  };
};

export default getPerson;
