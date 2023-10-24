import { Component, ReactNode } from 'react';
import SearchItem from '../search-item/search-item';
// import s from './search-results.module.css';

export default class SearchResults extends Component {
  render(): ReactNode {
    return (
      <>
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </>
    );
  }
}
