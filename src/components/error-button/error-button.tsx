import { Component, ReactNode } from 'react';
import s from './error-button.module.css';

export default class ErrorButton extends Component {
  render(): ReactNode {
    return <button className={s.button_error}>Create an Error</button>;
  }
}
