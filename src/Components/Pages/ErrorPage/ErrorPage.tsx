import { Component, ReactNode } from 'react';
import style from './styles.module.scss';

class ErrorPage extends Component {
  render(): ReactNode {
    return (
      <div className={style.error} data-testid="error-page">
        404
      </div>
    );
  }
}

export default ErrorPage;
