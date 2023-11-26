import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { getArtworksItemsResponse } from '@/types/types';
import Main from '@/pages/main';
jest.mock('next/router', () => require('next-router-mock'));

describe('Testing the Main element', () => {
  it('should be in the document', () => {
    const mockProps = {
      data: [
        {
          title: 'title',
          id: 11111,
          thumbnail: {
            alt_text: 'text',
          },
        },
      ],
      pagination: {
        total_pages: 20,
      },
    } as getArtworksItemsResponse;
    render(
      <Provider store={store}>
        <Main data={mockProps} />
      </Provider>,
    );

    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
});
