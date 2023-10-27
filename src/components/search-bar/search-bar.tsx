import { Component, ReactNode } from 'react';
import { getItems } from '../../requests';
import { ArtworksItem } from '../../types/types';
import s from './search-bar.module.css';
import state from '../../state/state';

export default class SearchBar extends Component {
  public submitValue: string;

  constructor(props: { currentValue: string }) {
    super(props);
    this.submitValue = '';
    this.saveInputValue = this.saveInputValue.bind(this);
  }

  componentDidMount = async () => {
    const searchResponse = await getItems();
    if (searchResponse) {
      const artworks: ArtworksItem[] = searchResponse.data;
      artworks.forEach((artwork) => {
        state.push({
          title: artwork.title,
          description: artwork.medium_display,
        });
      });
      console.log(state);
    }
  };

  render(): ReactNode {
    return (
      <form className={s.search_bar} onSubmit={this.submitForm}>
        <input
          type="text"
          className={s.search_input}
          placeholder="search"
          onChange={(e) => this.changeInput(e)}
        />
        <button className={s.search_button}>search</button>
      </form>
    );
  }

  private changeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    console.log(value);
  }

  private saveInputValue(value: string) {
    this.submitValue = value;
  }

  private submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.submitValue);
    // const searchResponse = await getItems();
    // if (searchResponse) {
    //   const artworks: ArtworksItem[] = searchResponse.data;
    //   console.log(artworks);
    // }
  };
}
