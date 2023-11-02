/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import { getItems, searchItems } from '../../requests/requests';
import { ArtworksItem, SearchBarPropsType } from '../../types/types';
import s from './search-bar.module.css';
import { useEffect, useState } from 'react';

const SearchBar = (props: SearchBarPropsType) => {
  useEffect(() => {
    getSearchItems();
  }, []);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem('Input value') || ''
  );

  const sendRequest = async (value: string) => {
    props.setIsLoading(true);
    const searchResponse =
      value === '' ? await getItems() : await searchItems(value);
    props.setCurrentPage(1);
    props.setIsLoading(false);
    if (searchResponse) {
      props.setPaginationCount(searchResponse.pagination.total_pages);
      const artworks: ArtworksItem[] = searchResponse.data;
      const itemsInfo = artworks.map((artwork) => ({
        title: artwork.title,
        description: artwork.thumbnail?.alt_text || 'No description',
      }));
      props.setResultsItemInfo(itemsInfo);
    }
    navigate(`/pages/${1}`);
  };

  const getSearchItems = async () => {
    if (localStorage.getItem('Input value') !== null) {
      sendRequest(localStorage.getItem('Input value')!);
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendRequest(inputValue);
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
