import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { appContext } from '../../App-context';
import { AppContextDefaultValue, resultsItemType } from '../../types/types';
import Layout from './layout';

test('should be render layout', async () => {
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
        <Layout />
      </MemoryRouter>
    </appContext.Provider>
  );
  expect(location.pathname).toBe('/');
});
