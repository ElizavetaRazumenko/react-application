/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import ItemRangeChanger from './itemRangeChanger';
import AppContext, { appContext } from '../../App-context';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { AppContextDefaultValue } from '../../types/types';

const updateLocalStorage = (resultMock: string) => {
  const localStorageMock = {
    getItem: (key: string) => resultMock,
    setItem: (key: string, value: string) => {},
  };
  global.localStorage = localStorageMock as Storage;
};

test('should be in the document', () => {
  const mockedSendRequestParams = vi.fn();
  render(
    <AppContext>
      <MemoryRouter>
        <ItemRangeChanger sendRequestParams={mockedSendRequestParams} />
      </MemoryRouter>
    </AppContext>
  );
  expect(screen.getByTestId('range-changer-container')).toBeInTheDocument();
});

test('should verify that the component renders the specified number of cards', () => {
  const mockedSendRequestParams = vi.fn();
  const resultMock = '5';
  updateLocalStorage(resultMock);
  const mockedContext = {} as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter>
        <ItemRangeChanger sendRequestParams={mockedSendRequestParams} />
      </MemoryRouter>
    </appContext.Provider>
  );
  fireEvent.click(screen.getByTestId('button_install'));
  const elementsNumber = screen.getByTestId('elements_number').textContent;
  expect(mockedSendRequestParams).toHaveBeenCalled();
  expect(elementsNumber).toEqual(resultMock);
});

test('should verify that the component renders the specified number of cards', () => {
  const mockedSendRequestParams = vi.fn();
  const resultMock = '12';
  updateLocalStorage(resultMock);
  render(
    <AppContext>
      <MemoryRouter>
        <ItemRangeChanger sendRequestParams={mockedSendRequestParams} />
      </MemoryRouter>
    </AppContext>
  );
  fireEvent.click(screen.getByTestId('button_install'));
  const elementsNumber = screen.getByTestId('elements_number').textContent;
  expect(mockedSendRequestParams).toHaveBeenCalled();
  expect(elementsNumber).toEqual(resultMock);
});
