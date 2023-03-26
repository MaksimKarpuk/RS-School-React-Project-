import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('routes', () => {
  afterEach(cleanup);
  it('correct routes', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    const formLink = screen.getByTestId('form-link');
    const mainPage = screen.queryByTestId('main-page');
    const aboutPage = screen.queryByTestId('about-page');
    const formPage = screen.queryByTestId('form-page');
    userEvent.click(mainLink);
    waitFor(() => expect(mainPage).toBeInTheDocument());
    userEvent.click(aboutLink);
    waitFor(() => expect(aboutPage).toBeInTheDocument());
    userEvent.click(formLink);
    waitFor(() => expect(formPage).toBeInTheDocument());
  });
  it('error routes', () => {
    render(
      <MemoryRouter initialEntries={['/ololo']}>
        <App />
      </MemoryRouter>
    );
    const errorPage = screen.queryByTestId('error-page');
    waitFor(() => expect(errorPage).toBeInTheDocument());
  });
});
