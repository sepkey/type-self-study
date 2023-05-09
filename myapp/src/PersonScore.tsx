import { useEffect, useState } from 'react';
import { getPerson } from './getPerson';

export function PersonScore({ greeting = 'sep' }: { greeting?: string }) {
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
      <p>{greeting}</p>
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

//1
//if you put the return value of loading null, and then hover over the component you will see that the return type is null or JSX.Element
//So notice that in these conditional cases it's better not to annotate return type explicitly

//2
//If you wanna make a property in props object optional, you have to use ? , even in cases that you've already provided the default value for the property
