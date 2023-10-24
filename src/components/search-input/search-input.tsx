import { Component, ReactNode } from 'react';
import s from './search-input.module.css';

export default class SearchInput extends Component {
  render(): ReactNode {
    return <input type="text" value="search" className={s.input} />;
  }
}
