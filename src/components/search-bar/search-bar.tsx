import { Component, ReactNode } from 'react';
import { getItems } from '../../requests';
import { ArtworksItem } from '../../types/types';
import SearchButton from '../seach-button/search-button';
import SearchInput from '../search-input/search-input';
import s from './search-bar.module.css';
import state from '../../state/state';

export default class SearchBar extends Component {
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
        <SearchInput />
        <SearchButton />
      </form>
    );
  }

  public submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchResponse = await getItems();
    if (searchResponse) {
      const artworks: ArtworksItem[] = searchResponse.data;
      console.log(artworks);
    }
  };
}
