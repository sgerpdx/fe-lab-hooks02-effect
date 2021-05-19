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

// const getPerson = async () => {
//   const res = await fetch(
//     `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
//   );
//   const character = await res.json();
//   return {
//     id: character._id,
//     name: character.name,
//     image: character.photoUrl,
//     faction: character.affiliation,
//   };
// };

export default getCharacters;

// res data format (20 characters):
// [
//   {
//     _id: '5cf5679a915ecad153ab68fd',
//     allies: ['Ozai'],
//     enemies: ['Earth Kingdom'],
//     name: 'Chan (Fire Nation admiral)',
//     affiliation: 'Fire Nation Navy',
//   },
//   {
//     _id: '5cf5679a915ecad153ab6900',
//     allies: ['Aang'],
//     enemies: ['Azula'],
//     photoUrl:
//       'https://vignette.wikia.nocookie.net/avatar/images/8/81/Chit_Sang.png/revision/latest?cb=20121021000707',
//     name: 'Chit Sang',
//   },
// ];
