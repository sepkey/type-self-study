import { useState } from 'react';
import './Alert.css';

type AlertType = {
  type?: string;
  heading: string;
  children: React.ReactNode; //accept JSX elements as well as strings.
  closable?: boolean;
  onClose?: () => void;
};

export function Alert({ type = 'information', heading, children, closable, onClose }: AlertType) {
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
    <div className={`container ${type}`}>
      <div className="header">
        <span
          className="header-icon"
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
        >
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span className="header-text">{heading}</span>

        {closable && (
          <button className="close-button" aria-label="Close" onClick={handleCloseClick}>
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>

      <div className="content">{children}</div>
    </div>
  );
}
