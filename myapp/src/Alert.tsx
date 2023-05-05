import { useState } from 'react';
import styles from './Alert.module.css';

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
    <div className={`${styles.container} ${styles[type]}`}>
      <div className={styles.header}>
        <span
          className={styles.headerIcon}
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
        >
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span className={styles.headerText}>{heading}</span>

        {closable && (
          <button className={styles.closeButton} aria-label="Close" onClick={handleCloseClick}>
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
