import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import ItemRangeChanger from './itemRangeChanger';

test('should verify that the component renders the specified number of cards', () => {
  const { getByTestId } = render(
    <ItemRangeChanger
      sendRequestParams={(v: string, n: number) => {
        `${v}${n}`;
      }}
    />
  );
  fireEvent.click(getByTestId('button_install'));
  const elementsNumber = getByTestId('elements_number').textContent as string;
  expect(
    screen.getByText(/Click for detailed information/i)
  ).toBeGreaterThanOrEqual(Number(elementsNumber));
});
