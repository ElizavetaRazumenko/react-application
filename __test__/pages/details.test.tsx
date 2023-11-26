import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { ArtworkDetails, getArtworksItemsResponse } from '@/types/types';
import DetailedPage from '@/pages/details';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
jest.mock('next/router', () => require('next-router-mock'));

describe('Testing the Main element', () => {
  it('should be in the document', () => {
    const mockProps = {
      dataMain: {
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
      },
      dataDetails: {
        data: {
          title: 'title',
          id: 11111,
          thumbnail: {
            alt_text: 'text',
          },
        },
      },
    } as { dataMain: getArtworksItemsResponse; dataDetails: ArtworkDetails };
    render(
      <Provider store={store}>
        <DetailedPage {...mockProps} />
      </Provider>,
    );

    expect(screen.getByTestId('details_page')).toBeInTheDocument();
  });

  it('should go to main page when closing', async () => {
    const mockProps = {
      dataMain: {
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
      },
      dataDetails: {
        data: {
          title: 'title',
          id: 11111,
          thumbnail: {
            alt_text: 'text',
          },
        },
      },
    } as { dataMain: getArtworksItemsResponse; dataDetails: ArtworkDetails };
    render(
      <Provider store={store}>
        <DetailedPage {...mockProps} />
      </Provider>,
      { wrapper: MemoryRouterProvider },
    );

    const buttonClose = screen.getByTestId('close_btn');
    await act(async () => {
      fireEvent.click(buttonClose);
    });
    expect(mockRouter.asPath).toBe('/main?page=1&items_count=12&value=');
  });

  it('should go to main page when clicking on Main', async () => {
    const mockProps = {
      dataMain: {
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
      },
      dataDetails: {
        data: {
          title: 'title',
          id: 11111,
          thumbnail: {
            alt_text: 'text',
          },
        },
      },
    } as { dataMain: getArtworksItemsResponse; dataDetails: ArtworkDetails };
    render(
      <Provider store={store}>
        <DetailedPage {...mockProps} />
      </Provider>,
      { wrapper: MemoryRouterProvider },
    );

    const mainPage = screen.getByTestId('main');
    await act(async () => {
      fireEvent.click(mainPage);
    });
    expect(mockRouter.asPath).toBe('/main?page=1&items_count=12&value=');
  });
});
