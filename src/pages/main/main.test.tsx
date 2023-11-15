import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { appContext } from '../../App-context';
import { AppContextDefaultValue, resultsItemType } from '../../types/types';
import MainPage from './main';

test('should be displayed the main page title', () => {
  const setIsLoading = (value: React.SetStateAction<boolean>) => {
    String(value);
  };
  const setResultsItemInfo = (value: React.SetStateAction<resultsItemType>) => {
    String(value);
  };
  const setPaginationCount = (value: React.SetStateAction<number>) => {
    String(value);
  };
  const mockedContext = {
    setIsLoading,
    setResultsItemInfo,
    setPaginationCount,
    resultsItemInfo: [{ title: 'test-title', description: 'test-description' }],
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </appContext.Provider>
  );
  expect(screen.getByText('Art Institute of Chicago')).toBeInTheDocument();
});

test('should be render the main page', () => {
  const setIsLoading = (value: React.SetStateAction<boolean>) => {
    String(value);
  };
  const setResultsItemInfo = (value: React.SetStateAction<resultsItemType>) => {
    String(value);
  };
  const setPaginationCount = (value: React.SetStateAction<number>) => {
    String(value);
  };
  const mockedContext = {
    setIsLoading,
    setResultsItemInfo,
    setPaginationCount,
    resultsItemInfo: [{ title: 'test-title', description: 'test-description' }],
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </appContext.Provider>
  );
  expect(screen.getByTestId('main')).toBeInTheDocument();
});
