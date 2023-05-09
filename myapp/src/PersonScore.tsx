import { useEffect, useState } from 'react';
import { getPerson } from './getPerson';

export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPerson().then((person) => {
      console.log(person);
      setLoading(false);
      setName(person.name);
      // console.log('State values', loading, name);
    });
  }, []);

  //this is under useEffect because of hooks rules
  if (loading) return <div>...loading</div>;

  return (
    <div>
      <p>jhgbkgb</p>
      <h3>
        {name}, {score}
      </h3>
      {/* <button onClick={() => setScore((prev) => prev + 1)}>Add</button>
      <button onClick={() => setScore((prev) => prev - 1)}>Subtract</button> */}
      {/* more readable */}
      <button onClick={() => setScore(score + 1)}>Add</button>
      <button onClick={() => setScore(score - 1)}>Subtract</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}

//if you put the return value of loading null, and then hover over the component you will see that the return type is null or JSX.Element
//So notice that in this conditional cases it's better not to annotate return type explicitly
