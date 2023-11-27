import '@testing-library/jest-dom';
import { getPagesRange } from '@/utils/utils';

describe('Testing the getPagesRange function', () => {
  it('should return the current range of number multiples of ten', () => {
    expect(getPagesRange(10)).toBe(10);
  });

  it('shoutd return the current range of number not multiples of ten', () => {
    expect(getPagesRange(11)).toBe(20);
  });
});
