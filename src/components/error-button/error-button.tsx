import { useState } from 'react';
import s from './error-button.module.css';

const ErrorButton = () => {
  const [isHasError, setIsHasError] = useState<boolean>(false);
  if (isHasError) {
    throw Error('Application error');
  }
  return (
    <button className={s.button_error} onClick={() => setIsHasError(true)}>
      Create an Error
    </button>
  );
};

export default ErrorButton;
