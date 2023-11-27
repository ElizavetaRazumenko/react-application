import ErrorButton from '@/components/error-button/error-button';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Testing the the Error-button element', () => {
  it('should be in the document', () => {
    render(<ErrorButton />);
    expect(screen.getByText(/Create an Error/i)).toBeInTheDocument();
  });

  it('should create an Error', () => {
    let actualErrorMsg = '';
    render(<ErrorButton />);
    const errorButton = screen.getByText(/Create an Error/i);
    try {
      fireEvent.click(errorButton);
    } catch (e) {
      if (e instanceof Error) actualErrorMsg = e.message;
    }
    expect(actualErrorMsg).toBe('Application error');
  });
});
