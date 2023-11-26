import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import ItemChanger from '@/components/items-changer/item-changer';

describe('Testing the Item changer element', () => {
  it('the Item changer element should be in the document', () => {
    render(
      <Provider store={store}>
        <ItemChanger />
      </Provider>,
    );
    expect(screen.getByText(/install/i)).toBeInTheDocument();
  });
});
