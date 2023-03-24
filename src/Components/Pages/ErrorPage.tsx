import { Component, ReactNode } from 'react';

class ErrorPage extends Component {
  render(): ReactNode {
    return <div data-testid="error-page">404</div>;
  }
}

export default ErrorPage;
