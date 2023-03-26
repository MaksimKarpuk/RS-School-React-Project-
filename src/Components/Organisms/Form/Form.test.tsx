import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Form from './Form';

describe('form', () => {
  afterEach(cleanup);
  it('input-text', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText('Name');
    fireEvent.change(input, { target: { value: 'qwerty' } });
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('qwerty');
  });
  it('input-checkbox', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('radio-male', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    const radio = screen.getByLabelText('Male');
    expect(radio).toBeInTheDocument();
    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });
  it('radio-female', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    const radio = screen.getByLabelText('Fimale');
    expect(radio).toBeInTheDocument();
    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });
  it('select', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: 'Minsk' } });
    expect(select.value).toBe('Minsk');
  });
});
