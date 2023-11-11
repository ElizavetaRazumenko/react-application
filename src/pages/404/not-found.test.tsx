import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

test('the 404 page is displayed when navigating to an invalid route', () => {
  const wrongRoute = '/wrong-route';
  render(
    <MemoryRouter initialEntries={[wrongRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
});
