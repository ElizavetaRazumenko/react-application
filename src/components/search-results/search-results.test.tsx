import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { appContext } from '../../App-context';
import { AppContextDefaultValue, resultsItemType } from '../../types/types';
import SearchResults from './search-results';

test('verify that the component renders the specified number of cards', async () => {
  const mockedContext = {
    isLoading: false,
    resultsItemInfo: [
      { title: 'test-title', description: 'test-description' },
      { title: 'test-title', description: 'test-description' },
    ] as resultsItemType,
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
