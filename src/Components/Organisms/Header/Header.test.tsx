import { fireEvent, render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const setup = () => {
  const utils = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const input = screen.getByPlaceholderText('Search...');
  return {
    input,
    ...utils,
  };
};

test('Render component', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: '$23' } });
  expect(input).toBeInTheDocument();
  expect(input.value).toBe('$23');
});
