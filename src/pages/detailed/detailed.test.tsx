import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import DetailedPage from './detailed';
import { createMemoryHistory } from 'history';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';

test('check that a loading indicator is displayed while fetching data', () => {
  const detailsRoute = '/pages/1/details/1';
  const mockObj = {
    details: {
      isDetailsOpen: true,
      currentId: 59843,
      isDetailsLoading: true,
      detailsContent: ['', ''],
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <MemoryRouter initialEntries={[detailsRoute]}>
        <DetailedPage />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByTestId('louder')).toBeInTheDocument();
});

test('make sure the detailed card component correctly displays the detailed card data', async () => {
  const mockObj = {
    details: {
      isDetailsOpen: true,
      currentId: 59843,
      isDetailsLoading: false,
      detailsContent: ['test-title', 'test-description'],
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <DetailedPage />
      </MemoryRouter>
    </Provider>
  );
  const detailsContentTitle = await screen.findByText('test-title');
  expect(detailsContentTitle).toBeInTheDocument();
  const detailsContentDescription = await screen.findByText('test-description');
  expect(detailsContentDescription).toBeInTheDocument();
});

test('ensure that clicking the close button hides the component', async () => {
  const history = createMemoryHistory();
  const detailsRoute = '/pages/1/details/1';
  const mockObj = {
    details: {
      isDetailsOpen: true,
      currentId: 59843,
      isDetailsLoading: false,
      detailsContent: ['title', 'description'],
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <MemoryRouter initialEntries={[detailsRoute]}>
        <DetailedPage />
      </MemoryRouter>
    </Provider>
  );
  const closeBtn = await screen.findByTestId('close_btn');
  fireEvent.click(closeBtn);
  expect(history.location.pathname).toEqual('/');
});
