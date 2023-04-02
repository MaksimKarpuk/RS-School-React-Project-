/* eslint-disable jsx-a11y/aria-role */
import { FC } from 'react';
import style from './styles.module.scss';

interface IProps {
  title: string;
  subtitle: string;
  src: string;
}

const Card: FC<IProps> = (props) => {
  return (
    <div className={style.card} data-testid="card">
      <div className={style.card__image}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={style.card__title}>{props.title}</div>
      <div className={style.card__subtitle}>{props.subtitle}</div>
    </div>
  );
};

export default Card;
