import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupStore, store } from '@/store/store';
import { Provider } from 'react-redux';
import ItemChanger from '@/components/items-changer/item-changer';

describe('Testing the Item changer element', () => {
  it('should be in the document', () => {
    render(
      <Provider store={store}>
        <ItemChanger />
      </Provider>,
    );
    expect(screen.getByText(/install/i)).toBeInTheDocument();
  });

  it('should show the number of items from the store', () => {
    const mockObj = {
      main: {
        artworksCountView: 5,
        searchInputValue: '',
      },
    };
    const mockStore = setupStore(mockObj);

    render(
      <Provider store={mockStore}>
        <ItemChanger />
      </Provider>,
    );
    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });

  it('should verify that the component renders the specified number of cards', async () => {
    const mockObj = {
      main: {
        artworksCountView: 5,
        searchInputValue: '',
      },
    };
    const mockStore = setupStore(mockObj);

    render(
      <Provider store={mockStore}>
        <ItemChanger />
      </Provider>,
    );

    const buttonIncrease = await screen.findByTestId('button_increase');
    const buttonReduce = await screen.findByTestId('button_reduce');
    await act(async () => {
      fireEvent.click(buttonIncrease);
    });
    expect(screen.getByText(/6/i)).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(buttonReduce);
    });

    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });
});
