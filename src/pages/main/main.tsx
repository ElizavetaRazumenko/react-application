import { Component, ReactNode } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import SearchResults from '../../components/search-results/search-results';
import s from './main.module.css';
import { State } from '../../types/types';
import ErrorButton from '../../components/error-button/error-button';

export default class MainPage extends Component {
  state: { state: State } = { state: [{ title: '', description: '' }] };

  handleSetState = (data: State) => {
    this.setState({ state: data });
  };

  render(): ReactNode {
    return (
      <main className={s.main}>
        <p className={s.title}> Art Institute of Chicago</p>
        <ErrorButton />
        <SearchBar handleSetState={this.handleSetState} />
        <SearchResults currentState={this.state.state} />
      </main>
    );
  }
}
