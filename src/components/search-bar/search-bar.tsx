import { Component, ReactNode } from 'react';
import { getItems, searchItems } from '../../requests';
import { ArtworksItem } from '../../types/types';
import s from './search-bar.module.css';
import { State } from '../../types/types';

interface PropsType {
  handleSetState: (data: State) => void;
  handleSetIsLoading: (value: boolean) => void;
}

interface StateType {
  value: string;
}

export default class SearchBar extends Component<PropsType, StateType> {
  public inputValue = localStorage.getItem('Input value') || '';
  state = { value: localStorage.getItem('Input value') || '' };

  componentDidMount = async () => {
    if (localStorage.getItem('Input value') !== null) {
      this.props.handleSetIsLoading(true);
      const searchResponse = await searchItems(
        localStorage.getItem('Input value')!
      );
      this.props.handleSetIsLoading(false);
      if (searchResponse) {
        const artworks: ArtworksItem[] = searchResponse.data;
        const itemsInfo = artworks.map((artwork) => ({
          title: artwork.title,
          description: artwork.thumbnail.alt_text || 'No description',
        }));
        this.props.handleSetState(itemsInfo);
      }
    }
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
    this.props.handleSetIsLoading(true);
    const searchResponse =
      this.inputValue === ''
        ? await getItems()
        : await searchItems(this.inputValue);
    this.props.handleSetIsLoading(false);
    if (searchResponse) {
      const artworks: ArtworksItem[] = searchResponse.data;
      const itemsInfo = artworks.map((artwork) => ({
        title: artwork.title,
        description: artwork.thumbnail.alt_text || 'No description',
      }));
      this.props.handleSetState(itemsInfo);
    }
    localStorage.setItem('Input value', this.inputValue);
  };
}
