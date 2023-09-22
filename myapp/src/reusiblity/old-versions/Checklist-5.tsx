import { ComponentPropsWithoutRef, ReactNode } from 'react';
import useChecked from './useChecked-v1';
type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
  render?: (item: Data) => ReactNode;
} & ComponentPropsWithoutRef<'ul'>;

export default function Checklist5<Data>({
  data,
  id,
  primary,
  secondary,
  render,
  ...ulProps
}: Props<Data>) {
  const { checkedIds, handleCheckChange } = useChecked();

  return (
    <ul className="bg-gray-300 rounded p-10" {...ulProps}>
      {data.map((item) => {
        if (render) {
          return render(item);
        }
        const idValue = item[id] as unknown;
        if (typeof idValue !== 'string' && typeof idValue !== 'number') {
          return null;
        }

        const primaryText = item[primary] as unknown;
        if (typeof primaryText !== 'string') {
          return null;
        }
        const secondaryText = item[secondary] as unknown;

        return (
          <li
            key={idValue}
            className="bg-white p-6 shadow rounded mb-4
            last:mb-0"
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={checkedIds.includes(idValue)}
                onChange={handleCheckChange(idValue)}
              />
              <div className="ml-2">
                <div className="text-xl text-gray-800 pb-1"> {primaryText} </div>
                {typeof secondaryText === 'string' && (
                  <div className="text-sm text-gray-500">{secondaryText}</div>
                )}
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
