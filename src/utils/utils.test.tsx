import { expect, test } from 'vitest';
import { getPagesRange } from './utils';

test('it shoutd return the current range', () => {
  expect(getPagesRange(10)).toBe(10);
});
test('it shoutd return the current range', () => {
  expect(getPagesRange(11)).toBe(20);
});
