import { Component, ReactNode } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import SearchResults from '../../components/search-results/search-results';
//import s from './main.module.css';

export default class MainPage extends Component {
  render(): ReactNode {
    return (
      <>
        <SearchBar />;
        <SearchResults />
      </>
    );
  }
}
