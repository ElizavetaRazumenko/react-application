import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import MainPage from './main';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

test('should be displayed the main page title', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText('Art Institute of Chicago')).toBeInTheDocument();
});

test('should be render the main page', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByTestId('main')).toBeInTheDocument();
});
