import React, { ReactNode, useState } from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchResults from './search-results';
import '@testing-library/jest-dom';
import { resultsItemType, ValueAppInterface } from '../../types/types';
import { appContext } from '../../App-context';

const customRender = (ui: ReactNode, value: ValueAppInterface) => {
  return render(<appContext.Provider value={value}>{ui}</appContext.Provider>);
};
test('NameConsumer shows value from provider', async () => {
  const ItemsInfo = [
    {
      title: 'title',
      description: 'description',
    },
    {
      title: 'title',
      description: 'description',
    },
  ];
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);
  const [detailsContent, setDetailsContent] = useState<string[]>(['', '']);
  const [resultsItemInfo, setResultsItemInfo] =
    useState<resultsItemType>(ItemsInfo);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paginationCount, setPaginationCount] = useState<number>(0);
  const [searchInputValue, setSearchInputValue] = useState<string>(
    localStorage.getItem('Input value') || ''
  );

  const value = {
    isDetailsLoading,
    setIsDetailsLoading,
    detailsContent,
    setDetailsContent,
    resultsItemInfo,
    setResultsItemInfo,
    isLoading,
    setIsLoading,
    paginationCount,
    setPaginationCount,
    searchInputValue,
    setSearchInputValue,
  };
  customRender(<SearchResults />, value);
  const items = await screen.getAllByText(/click for detailed information/i);
  expect(items.length).toBe(2);
});
