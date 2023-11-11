import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import App from '../../App';

test('should verify that the component renders the specified number of cards', async () => {
  const detailsRoute = '/pages/1/details/1';
  render(
    <MemoryRouter initialEntries={[detailsRoute]}>
      <App />
    </MemoryRouter>
  );
  const closeBtn = await screen.findByTestId('close_btn');
  fireEvent.click(closeBtn);
  expect(screen.getByTestId('details_page')).not.toBeInTheDocument();
});
