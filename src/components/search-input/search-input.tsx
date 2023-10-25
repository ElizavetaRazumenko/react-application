import { Component, ReactNode } from 'react';
import s from './search-input.module.css';

export default class SearchInput extends Component {
  render(): ReactNode {
    return (
      <input
        type="text"
        className={s.search_input}
        placeholder="search"
        onChange={(e) => this.changeInput(e)}
      />
    );
  }
  changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    localStorage.setItem('Search request', inputValue);
    console.log(localStorage.getItem('Search request'));
  };
}
