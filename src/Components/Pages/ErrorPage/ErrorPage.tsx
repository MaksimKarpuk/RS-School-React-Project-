import { FC } from 'react';
import style from './styles.module.scss';

const ErrorPage: FC = () => {
  return (
    <div className={style.error} data-testid="error-page">
      404
    </div>
  );
};

export default ErrorPage;
