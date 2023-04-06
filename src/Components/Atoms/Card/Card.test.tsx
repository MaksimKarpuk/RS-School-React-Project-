import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Card from './Card';

describe('card', () => {
  it('card 1 render', () => {
    render(<Card />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/24-02-22/i)).toBeInTheDocument();
    expect(screen.getByAltText(/home/i));
  });
});
