/* eslint-disable react-hooks/exhaustive-deps */
import { getItems, searchItems } from '../../requests/requests';
import { ArtworksItem, SearchBarPropsType } from '../../types/types';
import s from './search-bar.module.css';
import { useEffect, useState } from 'react';

const SearchBar = (props: SearchBarPropsType) => {
  useEffect(() => {
    getSearchItems();
  }, []);
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem('Input value') || ''
  );

  const getSearchItems = async () => {
    if (localStorage.getItem('Input value') !== null) {
      props.setIsLoading(true);
      const searchValue = localStorage.getItem('Input value')!;
      const searchResponse =
        searchValue === '' ? await getItems(1) : await searchItems(searchValue);
      props.setIsLoading(false);
      if (searchResponse) {
        const artworks: ArtworksItem[] = searchResponse.data;
        const itemsInfo = artworks.map((artwork) => ({
          title: artwork.title,
          description: artwork.thumbnail.alt_text || 'No description',
        }));
        props.setResultsItemInfo(itemsInfo);
      }
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setIsLoading(true);
    const searchResponse =
      inputValue === '' ? await getItems(1) : await searchItems(inputValue);
    props.setIsLoading(false);
    if (searchResponse) {
      const artworks: ArtworksItem[] = searchResponse.data;
      const itemsInfo = artworks.map((artwork) => ({
        title: artwork.title,
        description: artwork.thumbnail.alt_text || 'No description',
      }));
      props.setResultsItemInfo(itemsInfo);
    }
    localStorage.setItem('Input value', inputValue);
  };

  return (
    <form className={s.search_bar} onSubmit={submitForm}>
      <input
        type="text"
        className={s.search_input}
        placeholder="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={s.search_button}>search</button>
    </form>
  );
};

export default SearchBar;
