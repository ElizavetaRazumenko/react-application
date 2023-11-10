import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import NotFoundPage from '../404/not-found';

test('displays the correct title', () => {
  render(<NotFoundPage />);
  expect(screen.getByText(/Something went wrong/)).toBeVisible();
});
