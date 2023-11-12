import { act, fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { AppContextDefaultValue } from '../../types/types';
import { appContext } from '../../App-context';
import PaginationBlock from './pagination';

test('should send a request when clicked', async () => {
  const setCurrentMaxPageRange = (value: React.SetStateAction<number>) => {
    String(value);
  };
  const sendRequestParams = vi.fn();
  const mockedContext = {
    paginationCount: 10,
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter>
        <PaginationBlock
          currentMaxPageRange={10}
          setCurrentMaxPageRange={setCurrentMaxPageRange}
          sendRequestParams={sendRequestParams}
        />
      </MemoryRouter>
    </appContext.Provider>
  );
  const pageButtons = await screen.findAllByTestId('page-number');
  fireEvent.click(pageButtons[1]);
  expect(sendRequestParams).toHaveBeenCalled();
});

test('make sure the component updates URL query parameter when page changes', async () => {
  const setCurrentMaxPageRange = (value: React.SetStateAction<number>) => {
    String(value);
  };
  const sendRequestParams = vi.fn();
  const mockedContext = {
    paginationCount: 10,
  } as AppContextDefaultValue;
  render(
    <BrowserRouter>
      <appContext.Provider value={mockedContext}>
        <PaginationBlock
          currentMaxPageRange={10}
          setCurrentMaxPageRange={setCurrentMaxPageRange}
          sendRequestParams={sendRequestParams}
        />
      </appContext.Provider>
    </BrowserRouter>
  );
  const pageButtons = await screen.findAllByTestId('page-number');
  await act(async () => {
    fireEvent.click(pageButtons[1]);
  });
  expect(location.pathname).toBe(`/pages/2`);
});
