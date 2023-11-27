import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';
import Artworks from '@/components/artworks/artworks';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
jest.mock('next/router', () => require('next-router-mock'));

describe('Testing the Artworks element', () => {
  it('should be in the document', () => {
    const mockObj = {
      main: {
        resultsItemInfo: [{ title: 'test', description: 'test', id: 'test' }],
        currentPage: 1,
        searchInputValue: '',
        artworksCount: 10,
      },
    };
    const mockStore = setupStore(mockObj);
    render(
      <Provider store={mockStore}>
        <Artworks />
      </Provider>,
    );

    expect(screen.getByTestId('artworks_container')).toBeInTheDocument();
  });

  it('check that an appropriate message is displayed if no cards are present', () => {
    const mockObj = {
      main: {
        resultsItemInfo: [],
        currentPage: 1,
        searchInputValue: '',
        artworksCount: 10,
      },
    };
    const mockStore = setupStore(mockObj);
    render(
      <Provider store={mockStore}>
        <Artworks />
      </Provider>,
    );

    expect(
      screen.getByText(/There are no results for this request/i),
    ).toBeInTheDocument();
  });

  it('ensure that the card component renders the relevant card data', () => {
    const mockObj = {
      main: {
        resultsItemInfo: [
          { title: 'title', description: 'description', id: 'id' },
        ],
        currentPage: 1,
        searchInputValue: '',
        artworksCount: 10,
      },
    };
    const mockStore = setupStore(mockObj);
    render(
      <Provider store={mockStore}>
        <Artworks />
      </Provider>,
    );

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Click for detailed information/i),
    ).toBeInTheDocument();
  });

  it('validate that clicking on a card opens a detailed card component', async () => {
    const mockObj = {
      main: {
        resultsItemInfo: [{ title: 'test', description: 'test', id: 'test' }],
        currentPage: 1,
        searchInputValue: '',
        artworksCount: 10,
      },
    };
    const mockStore = setupStore(mockObj);
    render(
      <Provider store={mockStore}>
        <Artworks />
      </Provider>,
      { wrapper: MemoryRouterProvider },
    );
    const artwork = await screen.findAllByTestId('artwork');
    await act(async () => {
      fireEvent.click(artwork[0]);
    });
    expect(mockRouter.asPath).toBe(
      '/details?page=1&items_count=10&value=&id=test',
    );
  });
});
