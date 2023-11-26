import '@testing-library/jest-dom';
import { getPagesRange } from '@/utils/utils';

describe('Test getPagesRange function', () => {
  it('it shoutd return the current range of number multiples of ten', () => {
    expect(getPagesRange(10)).toBe(10);
  });

  it('it shoutd return the current range of number not multiples of ten', () => {
    expect(getPagesRange(11)).toBe(20);
  });
});
