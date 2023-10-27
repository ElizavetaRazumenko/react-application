import { Component, ReactNode } from 'react';
import { State } from '../../types/types';
import SearchItem from '../search-item/search-item';
// import s from './search-results.module.css';

interface PropsType {
  currentState: State;
}
export default class SearchResults extends Component<PropsType, {}> {
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
