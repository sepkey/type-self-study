import { useEffect, useState } from 'react';
import { getPerson } from './getPerson';

export function PersonScore({ greeting = 'sep' }: { greeting?: string }) {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [draft, setDraft] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPerson().then((person) => {
      console.log(person);
      setLoading(false);
      setName(person.name);
      // console.log('State values', loading, name);
    });
  }, []);

  // useEffect(() => {
  //   setDraft(score);
  // }, [score]);

  useEffect(() => {
    setTimeout(() => setDraft(0), 10000);
  });
  //this is under useEffect because of hooks rules
  if (loading) return <div>...loading</div>;
  return (
    <div>
      <p>{greeting}</p>
      <h3>
        {name}, {score}
      </h3>
      <button onClick={() => setScore(score + 1)}>Add</button>
      <button onClick={() => setScore(score - 1)}>Subtract</button>
      <button onClick={() => setScore(0)}>Reset</button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setScore(draft);
        }}
      >
        <input type="number" value={draft} onChange={(e) => setDraft(e.target.valueAsNumber)} />
        <button type="submit">update counter</button>
      </form>
    </div>
  );
}

//1
//if you put the return value of loading null, and then hover over the component you will see that the return type is null or JSX.Element
//So notice that in these conditional cases it's better not to annotate return type explicitly

//2
//If you wanna make a property in props object optional, you have to use ? , even in cases that you've already provided the default value for the property

//3
//you can set new state like this but the previous one is more readable
// <button onClick={() => setScore((prev) => prev + 1)}>Add</button>
//<button onClick={() => setScore((prev) => prev - 1)}>Subtract</button>
//فرق این دو حالت اونجایی که میشه که بیای برای آنکلیکت یه هندلر بنویسی و داخلش بخوای استیت رو عوض کنی
//اگه بنویسی به صورت زیر:
//const handleClick =()=>{
//   setScore(score+1)
//   setScore(score+1)
//   setScore(score+1)
// }
//در این حالت به خاطر کلوژر استیتمون،  هی نگاه میکنه که  مقدار اولیه چند بود و  هزار بارم از اینا بنویسی فقط یه بار عدد رو زیاد میکنه. ولی اگه به صورت زیر بنویسی:
//const handleClick =()=>{
//   setScore(score=>score+1)
//   setScore(score=>score+1)
//   setScore(score=>score+1)
// }
//در این حالت به ازای هر یکی یک عدد اضاف میکنه

//4
//useState is a wrapper around useReducer, React.Dispatch<React.SetStateAction<string | undefined>>
//useState is an abstraction over useReducer, which works by dispatching actions.
//one of my biggest pet Peeve is that  e.target.value is a string but here useState  accepts a number

//5
// useEffect(() => setTimeout(setCount(0), 31536000000));
//useEffect expects the function you hand it to return either nothing or a function that it should call when the component is unmounting. Luckily, this fix is simple. Add back those curly braces to the function so that it doesn't automatically return a value.
//We didn't run into that problem with setDraft because setDraft returns void (e.g. undefined) anyway.
