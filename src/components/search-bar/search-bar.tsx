import { Component, ReactNode } from 'react';
// import { getItems } from '../../requests';
// import { ArtworksItem } from '../../types/types';
import s from './search-bar.module.css';
import { State } from '../../types/types';

interface PropsType {
  handleSetState: (data: State) => void;
}

interface StateType {
  value: string;
}

export default class SearchBar extends Component<PropsType, StateType> {
  public inputValue = localStorage.getItem('Input value') || '';
  state = { value: localStorage.getItem('Input value') || '' };

  componentDidMount = async () => {
    // const searchResponse = await getItems();
    // if (searchResponse) {
    //   const artworks: ArtworksItem[] = searchResponse.data;
    //   artworks.forEach((artwork) => {
    //     state.push({
    //       title: artwork.title,
    //       description: artwork.medium_display,
    //     });
    //   });
    // }
  };

  render(): ReactNode {
    return (
      <form className={s.search_bar} onSubmit={this.submitForm}>
        <input
          type="text"
          className={s.search_input}
          placeholder="search"
          value={this.state.value}
          onChange={(e) => this.changeInput(e)}
        />
        <button className={s.search_button}>search</button>
      </form>
    );
  }

  private changeInput(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
    this.inputValue = e.target.value;
  }

  private submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('Input value', this.inputValue);
    // const searchResponse = await getItems();
    // if (searchResponse) {
    //   const artworks: ArtworksItem[] = searchResponse.data;
    //   console.log(artworks);
    // }
  };
}
