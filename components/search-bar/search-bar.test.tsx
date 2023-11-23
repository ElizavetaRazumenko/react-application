/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { AppContextDefaultValue } from '../../types/types';
import SearchBar from './search-bar';
import { Provider } from 'react-redux';
import { setupStore, store } from '../../store/store';

const setValueToLS = vi.fn();
const updateLocalStorage = (resultMock: string) => {
  const localStorageMock = {
    getItem: (key: string) => resultMock,
    setItem: (key: string, value: string) => {
      setValueToLS();
    },
  };
  global.localStorage = localStorageMock as Storage;
};

test('verify that clicking the Search button saves the entered value to the local storage', () => {
  const resultMock = 'test';
  updateLocalStorage(resultMock);
  render(
    <Provider store={store}>
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    </Provider>
  );
  fireEvent.submit(screen.getByTestId('form'));
  expect(setValueToLS).toHaveBeenCalled();
});

test('check that the component retrieves the value from the local storage upon mounting.', () => {
  const mockObj = {
    main: {
      searchInputValue: 'test',
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    </Provider>
  );
  fireEvent.submit(screen.getByTestId('form'));
  const input = screen.getByTestId('search-input') as HTMLInputElement;
  expect(input.value).toEqual('test');
});
