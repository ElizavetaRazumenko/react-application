import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import Layout from './layout';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

test('should be render layout', async () => {
  const mockObj = {
    main: {
      resultsItemInfo: [{ title: '', description: '', id: 11111 }],
      isMainLoading: false,
      paginationCount: 0,
      searchInputValue: localStorage.getItem('Input value') || '',
      currentPage: +location.pathname.slice(-1),
    },
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
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    </Provider>
  );
  expect(location.pathname).toBe('/');
});
