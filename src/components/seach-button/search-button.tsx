import { Component, ReactNode } from 'react';
import s from './search-button.module.css';

export default class SearchButton extends Component {
  render(): ReactNode {
    return <button className={s.button}>Search</button>;
  }
}
