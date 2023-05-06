import { useState } from 'react';
import { ReactComponent as CrossIcon } from './cross.svg';
import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as WarningIcon } from './warning.svg';

type AlertProps = {
  type?: string;
  heading: string;
  children: React.ReactNode; //accept JSX elements as well as strings.
  closable?: boolean;
  onClose?: () => void;
};

export function Alert({ type = 'information', heading, children, closable, onClose }: AlertProps) {
  const [visible, setVisible] = useState(true); //if it's undefined for a.g,that it can't be infered=>generic
  // const [visible, setVisible] = useState<boolean>();
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <div
      className={`inline-flex flex-col text-left px-4 py-3
    rounded-md border-1 border-transparent ${
      type === 'warning' ? 'text-amber-900' : 'textteal-900'
    } ${type === 'warning' ? 'bg-amber-50' : 'bg-teal-50'}`}
    >
      <div className="flex items-center mb-1">
        <span
          role="img"
          className="w-7"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
        >
          {type === 'warning' ? (
            <WarningIcon className="fill-amber-900 w-5 h-5" />
          ) : (
            <InfoIcon className="fill-teal-900 w-5 h-5" />
          )}
        </span>
        <span className="font-bold">{heading}</span>

        {closable && (
          <button
            aria-label="Close"
            onClick={handleCloseClick}
            className="border-none bg-transparent ml-auto cursorpointer"
          >
            {/* <span role="img" aria-label="Close"> */}
            <CrossIcon />
            {/* </span> */}
          </button>
        )}
      </div>

      <div className="ml-7 text-black">{children}</div>
    </div>
  );
}
