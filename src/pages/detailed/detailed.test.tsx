import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import DetailedPage from './detailed';
import { appContext } from '../../App-context';
import { AppContextDefaultValue } from '../../types/types';
import { createMemoryHistory } from 'history';

test('check that a loading indicator is displayed while fetching data', () => {
  const detailsRoute = '/pages/1/details/1';
  const mockedContext = {
    isDetailsLoading: true,
    detailsContent: ['title', 'description'],
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter initialEntries={[detailsRoute]}>
        <DetailedPage />
      </MemoryRouter>
    </appContext.Provider>
  );
  expect(screen.getByTestId('louder')).toBeInTheDocument();
});

test('make sure the detailed card component correctly displays the detailed card data', async () => {
  const detailsRoute = '/pages/1/details/1';
  const mockedContext = {
    isDetailsLoading: false,
    detailsContent: ['test-title', 'test-description'],
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter initialEntries={[detailsRoute]}>
        <DetailedPage />
      </MemoryRouter>
    </appContext.Provider>
  );
  const detailsContentTitle = await screen.findByText('test-title');
  expect(detailsContentTitle).toBeInTheDocument();
  const detailsContentDescription = await screen.findByText('test-description');
  expect(detailsContentDescription).toBeInTheDocument();
});

test('ensure that clicking the close button hides the component', async () => {
  const history = createMemoryHistory();
  const detailsRoute = '/pages/1/details/1';
  const mockedContext = {
    isDetailsLoading: false,
    detailsContent: ['title', 'description'],
  } as AppContextDefaultValue;
  render(
    <appContext.Provider value={mockedContext}>
      <MemoryRouter initialEntries={[detailsRoute]}>
        <DetailedPage />
      </MemoryRouter>
    </appContext.Provider>
  );
  const closeBtn = await screen.findByTestId('close_btn');
  fireEvent.click(closeBtn);
  expect(history.location.pathname).toEqual('/');
});
