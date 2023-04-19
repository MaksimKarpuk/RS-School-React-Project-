import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '../../../store/index';
import NewForm from './NewForm';

describe('form', () => {
  afterEach(cleanup);
  it('submit button', () => {
    render(
      <MemoryRouter>
        <Provider store={setupStore}>
          <NewForm />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/submit/i);
  });
  it('input-text-firstName', () => {
    render(
      <MemoryRouter>
        <Provider store={setupStore}>
          <NewForm />
        </Provider>
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
        <Provider store={setupStore}>
          <NewForm />
        </Provider>
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
        <Provider store={setupStore}>
          <NewForm />
        </Provider>
      </MemoryRouter>
    );
    const checkbox = screen.getByTestId('new-form-checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('radio-male', () => {
    render(
      <MemoryRouter>
        <Provider store={setupStore}>
          <NewForm />
        </Provider>
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
        <Provider store={setupStore}>
          <NewForm />
        </Provider>
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
        <Provider store={setupStore}>
          <NewForm />
        </Provider>
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
        <Provider store={setupStore}>
          <NewForm />
        </Provider>
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
        <Provider store={setupStore}>
          <NewForm />
        </Provider>
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
