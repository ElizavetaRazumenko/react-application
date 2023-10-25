import { Component, ReactNode } from 'react';
import SearchButton from '../seach-button/search-button';
import SearchInput from '../search-input/search-input';
import s from './search-bar.module.css';

export default class SearchBar extends Component {
  render(): ReactNode {
    return (
      <form className={s.search_bar} onSubmit={this.submitForm}>
        <SearchInput />
        <SearchButton />
      </form>
    );
  }

  public submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
}
