// import { Dispatch } from 'react';
// import { Action, ActionWithPayload } from './PersonScore';
// type Props = {
//   dispatch: Dispatch<Action | ActionWithPayload>;
// };
// const Reset = ({ dispatch }: Props) => {
//   return (
//     <button className="px-10 mx-2 rounded bg-blue-100" onClick={() => dispatch({ type: 'reset' })}>
//       Reset
//     </button>
//   );
// };

// export default Reset;

import { memo } from 'react';
type Props = {
  onClick: () => void;
};
export const Reset = memo(({ onClick }: Props) => {
  console.log('render Reset');
  return (
    <button className="px-10 mx-2 rounded bg-blue-100" onClick={onClick}>
      Reset
    </button>
  );
});

Reset.displayName = 'Reset';
// export default Reset;
