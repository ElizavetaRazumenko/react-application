import { act, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test, vi } from 'vitest';
import { appContext } from '../../App-context';
import { AppContextDefaultValue, resultsItemType } from '../../types/types';
import SearchResults from './search-results';

test('verify that the component renders the specified number of cards', async () => {
  const mockedContext = {
    isLoading: false,
    resultsItemInfo: [
      { title: 'test-title', description: 'test-description' },
      { title: 'test-title', description: 'test-description' },
    ],
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    </appContext.Provider>
  );
  const cards = await screen.findAllByTestId('card');
  expect(cards.length).toBe(2);
});

test('check that an appropriate message is displayed if no cards are present', () => {
  const mockedContext = {
    isLoading: false,
    resultsItemInfo: [] as resultsItemType,
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    </appContext.Provider>
  );

  expect(
    screen.getByText(/There are no results for this request/i)
  ).toBeInTheDocument();
});

test('ensure that the card component renders the relevant card data', async () => {
  const mockedContext = {
    isLoading: false,
    resultsItemInfo: [{ title: 'test-title', description: 'test-description' }],
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    </appContext.Provider>
  );
  const title = await screen.findByText('test-title');
  expect(title).toBeInTheDocument();
});

test('validate that clicking on a card opens a detailed card component', async () => {
  const setIsDetailsLoading = (value: React.SetStateAction<boolean>) => {
    String(value);
  };
  const mockedContext = {
    isLoading: false,
    resultsItemInfo: [{ title: 'test-title', description: 'test-description' }],
    setIsDetailsLoading,
  } as AppContextDefaultValue;
  render(
    <BrowserRouter>
      <appContext.Provider value={mockedContext}>
        <SearchResults />
      </appContext.Provider>
    </BrowserRouter>
  );
  const card = await screen.findByTestId('card');
  await act(async () => {
    await fireEvent.click(card);
  });
  expect(location.pathname.slice(16)).toBe('/details/1');
});

test('check that clicking triggers an additional API call to fetch detailed information', async () => {
  const mockFoo = vi.fn();
  const setIsDetailsLoading = (value: React.SetStateAction<boolean>) => {
    String(value);
    mockFoo();
  };
  const mockedContext = {
    isLoading: false,
    resultsItemInfo: [{ title: 'test-title', description: 'test-description' }],
    setIsDetailsLoading,
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    </appContext.Provider>
  );
  const card = await screen.findByTestId('card');
  await act(async () => {
    fireEvent.click(card);
  });
  expect(mockFoo).toHaveBeenCalled();
});
