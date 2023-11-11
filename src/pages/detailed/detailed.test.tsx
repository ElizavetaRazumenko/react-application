import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import DetailedPage from './detailed';
import { appContext } from '../../App-context';
import { AppContextDefaultValue } from '../../types/types';

test('make sure the detailed card component correctly displays the detailed card data', () => {
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

test('ensure that clicking the close button hides the component', async () => {
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
  // expect().toBe('/pages/1');
  // const closeBtn = screen.findByTestId('close_btn');
  // fireEvent.click(closeBtn);
  // expect(screen.getByTestId('details_page')).not.toBeInTheDocument();
});
