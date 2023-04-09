import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Input from './Input';

describe('input', () => {
  it('Input label', () => {
    render(<Input placeholder="Name" />);
    const input = screen.getByPlaceholderText('Name');
    expect(input).toBeInTheDocument();
  });
});
