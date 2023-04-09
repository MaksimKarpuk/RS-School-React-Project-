import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import NewForm from './NewForm';

describe('form', () => {
  afterEach(cleanup);
  it('submit button', () => {
    render(
      <MemoryRouter>
        <NewForm />
      </MemoryRouter>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/submit/i);
  });
  it('input-text-firstName', () => {
    render(
      <MemoryRouter>
        <NewForm />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText('First name');
    fireEvent.change(input, { target: { value: 'qwerty' } });
    expect(input).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe('qwerty');
  });
  it('input-text-secondName', () => {
    render(
      <MemoryRouter>
        <NewForm />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText('Second name');
    fireEvent.change(input, { target: { value: 'qwerty' } });
    expect(input).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe('qwerty');
  });
  it('input-checkbox', () => {
    render(
      <MemoryRouter>
        <NewForm />
      </MemoryRouter>
    );
    const checkbox = screen.getByTestId('new-form-checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('radio-male', () => {
    render(
      <MemoryRouter>
        <NewForm />
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
        <NewForm />
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
        <NewForm />
      </MemoryRouter>
    );
    const select = screen.getByTestId('new-form-select');
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(7);
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: 'Minsk' } });
    expect((select as HTMLSelectElement).value).toBe('Minsk');
  });
  it('clear form', () => {
    render(
      <MemoryRouter>
        <NewForm />
      </MemoryRouter>
    );
    const submit = screen.getByRole('button');
    const input = screen.getByPlaceholderText('First name');
    const checkbox = screen.getByTestId('new-form-checkbox');
    fireEvent.click(submit);
    expect(input).toHaveValue('');
    expect(checkbox).not.toBeChecked();
  });
  it('visible popup', () => {
    render(
      <MemoryRouter>
        <NewForm />
      </MemoryRouter>
    );
    const submit = screen.getByRole('button');
    const popup = screen.getByTestId('new-form-popup');
    expect(submit).toBeInTheDocument();
    expect(popup).toBeInTheDocument();
    fireEvent.click(submit);
    expect(popup).toBeVisible();
  });
});
