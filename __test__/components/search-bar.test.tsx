import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupStore, store } from '@/store/store';
import { Provider } from 'react-redux';
import SearchBar from '@/components/search-bar/search-bar';
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
});
