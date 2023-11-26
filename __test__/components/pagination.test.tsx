import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';
import Pagination from '@/components/pagination/pagination';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
jest.mock('next/router', () => require('next-router-mock'));

describe('Testing the Pagination element', () => {
  it('should be in the document', async () => {
    const mockObj = {
      main: {
        paginationCount: 120,
        currentPage: 1,
        currentMaxPageRange: 20,
        searchInputValue: '',
        artworksCount: 10,
      },
    };
    const mockStore = setupStore(mockObj);
    render(
      <Provider store={mockStore}>
        <Pagination />
      </Provider>,
    );
    const paginationBlock = await screen.findByTestId('pagination');
    expect(paginationBlock).toBeInTheDocument();
  });

  it('should updates URL query parameter when page changes', async () => {
    const mockObj = {
      main: {
        paginationCount: 120,
        currentPage: 1,
        currentMaxPageRange: 20,
        searchInputValue: '',
        artworksCount: 10,
      },
    };
    const mockStore = setupStore(mockObj);
    render(
      <Provider store={mockStore}>
        <Pagination />
      </Provider>,
      { wrapper: MemoryRouterProvider },
    );
    const pageButtons = await screen.findAllByTestId('page-number');
    await act(async () => {
      fireEvent.click(pageButtons[1]);
    });
    expect(mockRouter.asPath).toBe('/main?page=12&items_count=10&value=');
  });

  it('should changes pages', async () => {
    const mockObj = {
      main: {
        paginationCount: 120,
        currentPage: 1,
        currentMaxPageRange: 10,
        searchInputValue: '',
        artworksCount: 10,
      },
    };
    const mockStore = setupStore(mockObj);

    render(
      <Provider store={mockStore}>
        <Pagination />
      </Provider>,
    );
    const arrowRight = await screen.findByTestId('arrow_right');

    expect(arrowRight).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(arrowRight);
    });

    let page = await screen.findByText(/11/i);
    expect(page).toBeInTheDocument();

    const arrowLeft = await screen.findByTestId('arrow_right');

    await act(async () => {
      fireEvent.click(arrowLeft);
    });

    page = await screen.findByText(/1/i);
    expect(page).toBeInTheDocument();
  });
});
