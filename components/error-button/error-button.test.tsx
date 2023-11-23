import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ErrorButton from './error-button';

test('error button should be in the document', () => {
  render(
    <MemoryRouter>
      <ErrorButton />
    </MemoryRouter>
  );
  expect(screen.getByText(/Create an Error/i)).toBeInTheDocument();
});

test('error button should create an Error', () => {
  let actualErrorMsg = '';
  render(
    <MemoryRouter>
      <ErrorButton />
    </MemoryRouter>
  );
  const errorButton = screen.getByText(/Create an Error/i);
  try {
    fireEvent.click(errorButton);
  } catch (e) {
    if (e instanceof Error) actualErrorMsg = e.message;
  }
  expect(actualErrorMsg).toBe('Application error');
});
