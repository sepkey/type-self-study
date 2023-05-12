// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Dispatch, useEffect, useReducer } from 'react';
import { getPerson } from './getPerson';

type State = {
  name: string | undefined;
  score: number;
  draft: number;
  loading: boolean;
};

// type Action =
//   | { type: 'initialize'; payload: string }
//   | { type: 'increment' }
//   | { type: 'decrement' }
//   | { type: 'reset' }
//   | { type: 'updateDraft'; payload: number }
//   | { type: 'updateScore'; payload: number };

type Action = {
  type: 'increment' | 'decrement' | 'reset';
};

type ActionWithPayload =
  | {
      type: 'updateDraft' | 'updateScore';
      payload: number;
    }
  | {
      type: 'initialize';
      payload: string;
    };

const initialState: State = {
  draft: 0,
  loading: true,
  score: 0,
  name: undefined,
};

const reducer = (state: State, action: Action | ActionWithPayload): State => {
  switch (action.type) {
    case 'initialize':
      return { ...state, name: action.payload, loading: false };
    case 'increment':
      return { ...state, score: state.score + 1 };
    case 'decrement':
      return { ...state, score: state.score - 1 };
    case 'reset':
      return { ...state, score: 0 };
    case 'updateScore':
      return { ...state, score: action.payload };
    case 'updateDraft':
      return { ...state, draft: action.payload };
    default:
      return state;
  }
};

export function PersonScore({ greeting = 'sep' }: { greeting?: string }) {
  //<Reducer<State, Action>>
  const [{ name, score, draft, loading }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getPerson().then((person) => dispatch({ type: 'initialize', payload: person.name }));
  }, []);

  // useEffect(() => {
  //   setDraft(score);
  // }, [score]);

  // useEffect(() => {
  //   setTimeout(() => setDraft(0), 10000);
  // });
  //this is under useEffect because of hooks rules
  if (loading) return <div>...loading</div>;
  return (
    <main className="w-full max-w-2xl py-16 mx-auto  bg-red-200">
      <p>{greeting}</p>
      <h3>
        {name}, {score}
      </h3>
      <button
        className="px-10 mx-2 rounded  bg-blue-100"
        onClick={() => dispatch({ type: 'increment' })}
      >
        Add
      </button>
      <button
        className="px-10 mx-2 rounded  bg-blue-100"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Subtract
      </button>
      <button
        className="px-10 mx-2 rounded bg-blue-100"
        onClick={() => dispatch({ type: 'reset' })}
      >
        Reset
      </button>

      <form
        className="my-3"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'updateScore', payload: draft });
        }}
      >
        <input
          className="border rounded-sm border-blue-200"
          type="number"
          value={draft}
          onChange={(e) => dispatch({ type: 'updateDraft', payload: e.target.valueAsNumber })}
        />
        <button type="submit" className="px-2 mx-2 rounded-sm bg-black text-white">
          update counter
        </button>
      </form>
    </main>
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
