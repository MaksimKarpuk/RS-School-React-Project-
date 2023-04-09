import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Card from './Card';

describe('card', () => {
  it('card 1 render', () => {
    render(<Card name="Luke" gender="male" />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText(/Luke/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i));
  });
});
