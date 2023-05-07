import { useEffect } from 'react';
import { getPerson } from './getPerson';

export function PersonScore() {
  useEffect(() => {
    getPerson().then((person) => console.log(person));
  }, []);

  return null;
}

////////// less readable than the initial version
// useEffect(() => {
//   async function getThePerson() {
//     const person = await getPerson();
//     console.log(person);
//   }
//   getThePerson();
// }, []);
