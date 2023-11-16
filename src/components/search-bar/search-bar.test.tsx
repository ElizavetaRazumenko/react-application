/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { appContext } from '../../App-context';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { AppContextDefaultValue } from '../../types/types';
import SearchBar from './search-bar';

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
  const setSearchInputValue = (value: React.SetStateAction<string>) => {
    String(value);
  };
  const mockedSendRequestParams = vi.fn();
  const resultMock = 'test';
  updateLocalStorage(resultMock);
  const mockedContext = {
    searchInputValue: 'test',
    setSearchInputValue,
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    </appContext.Provider>
  );
  fireEvent.submit(screen.getByTestId('form'));
  expect(setValueToLS).toHaveBeenCalled();
});

test('check that the component retrieves the value from the local storage upon mounting.', () => {
  const setSearchInputValue = (value: React.SetStateAction<string>) => {
    String(value);
  };
  const mockedSendRequestParams = vi.fn();
  const resultMock = 'test';
  updateLocalStorage(resultMock);
  const mockedContext = {
    searchInputValue: 'test',
    setSearchInputValue,
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter>
        <SearchBar sendRequestParams={mockedSendRequestParams} />
      </MemoryRouter>
    </appContext.Provider>
  );
  fireEvent.submit(screen.getByTestId('form'));
  const input = screen.getByTestId('search-input') as HTMLInputElement;
  expect(input.value).toEqual('test');
});
