/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import ItemRangeChanger from './itemRangeChanger';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { AppContextDefaultValue } from '../../types/types';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const updateLocalStorage = (resultMock: string) => {
  const localStorageMock = {
    getItem: (key: string) => resultMock,
    setItem: (key: string, value: string) => {},
  };
  global.localStorage = localStorageMock as Storage;
};

test('should be in the document', () => {
  render(
    <MemoryRouter>
      <ItemRangeChanger />
    </MemoryRouter>
  );
  expect(screen.getByTestId('range-changer-container')).toBeInTheDocument();
});

test('should verify that the component renders the specified number of cards', () => {
  const resultMock = '5';
  updateLocalStorage(resultMock);
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ItemRangeChanger />
      </MemoryRouter>
    </Provider>
  );
  fireEvent.click(screen.getByTestId('button_install'));
  const elementsNumber = screen.getByTestId('elements_number').textContent;
  expect(elementsNumber).toEqual(resultMock);
});

test('should verify that the component renders the specified number of cards', () => {
  const resultMock = '12';
  updateLocalStorage(resultMock);
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ItemRangeChanger />
      </MemoryRouter>
    </Provider>
  );
  fireEvent.click(screen.getByTestId('button_install'));
  const elementsNumber = screen.getByTestId('elements_number').textContent;
  expect(elementsNumber).toEqual(resultMock);
});
