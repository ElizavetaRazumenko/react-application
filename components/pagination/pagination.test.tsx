import { act, fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import PaginationBlock from './pagination';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

test('should be in the document', async () => {
  const mockObj = {
    main: {
      paginationCount: 120,
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <PaginationBlock />
      </MemoryRouter>
    </Provider>
  );
  const paginationBlock = await screen.findByTestId('pagination-block');
  expect(paginationBlock).toBeInTheDocument();
});

test('make sure the component updates URL query parameter when page changes', async () => {
  const mockObj = {
    main: {
      paginationCount: 120,
      currentPage: 1,
    },
  };
  const mockStore = setupStore(mockObj);
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <PaginationBlock />
      </BrowserRouter>
    </Provider>
  );
  const pageButtons = await screen.findAllByTestId('page-number');
  await act(async () => {
    fireEvent.click(pageButtons[1]);
  });
  expect(location.pathname).toBe(`/pages/2`);
});
