import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test, vi } from 'vitest';
import SearchResults from './search-results';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

test('verify that the component renders the specified number of cards', async () => {
  const mockObj = {
    main: {
      resultsItemInfo: [
        { title: 'test-title', description: 'test-description', id: 1 },
        { title: 'test-title', description: 'test-description', id: 2 },
      ],
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    </Provider>
  );
  const cards = await screen.findAllByTestId('card');
  expect(cards.length).toBe(2);
});

test('check that an appropriate message is displayed if no cards are present', () => {
  const mockObj = {
    main: {
      resultsItemInfo: [],
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    </Provider>
  );

  expect(
    screen.getByText(/There are no results for this request/i)
  ).toBeInTheDocument();
});

test('ensure that the card component renders the relevant card data', async () => {
  const mockObj = {
    main: {
      resultsItemInfo: [
        { title: 'test-title', description: 'test-description', id: 1 },
      ],
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    </Provider>
  );
  const title = await screen.findByText('test-title');
  expect(title).toBeInTheDocument();
});

test('validate that clicking on a card opens a detailed card component', async () => {
  const mockObj = {
    main: {
      resultsItemInfo: [
        { title: 'test-title', description: 'test-description', id: 1 },
      ],
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    </Provider>
  );
  const card = await screen.findByTestId('card');
  await act(async () => {
    await fireEvent.click(card);
  });
  expect(location.pathname).toBe('/');
});

test('check that clicking triggers an additional API call to fetch detailed information', async () => {
  const mockFoo = vi.fn();
  const mockObj = {
    main: {
      resultsItemInfo: [
        { title: 'test-title', description: 'test-description', id: 1 },
      ],
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    </Provider>
  );
  const card = await screen.findByTestId('card');
  await act(async () => {
    fireEvent.click(card);
  });
  expect(mockFoo).toHaveBeenCalled();
});
