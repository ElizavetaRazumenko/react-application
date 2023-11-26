import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupStore, store } from '@/store/store';
import { Provider } from 'react-redux';
import SearchBar from '@/components/search-bar/search-bar';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
jest.mock('next/router', () => require('next-router-mock'));

describe('Testing the Search-bar element', () => {
  it('should be in the document', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  it('make sure the component updates URL query parameter when form is submitted', async () => {
    const mockObj = {
      main: {
        artworksCount: 10,
      },
    };
    const mockStore = setupStore(mockObj);
    render(
      <Provider store={mockStore}>
        <SearchBar />
      </Provider>,
      { wrapper: MemoryRouterProvider },
    );
    const searchButtons = await screen.findByTestId('button_search');
    const searchInput = await screen.findByTestId('search_input');
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'cats' } });
      fireEvent.click(searchButtons);
    });
    expect(mockRouter.asPath).toBe('/main?page=1&items_count=10&value=cats');
  });
});
