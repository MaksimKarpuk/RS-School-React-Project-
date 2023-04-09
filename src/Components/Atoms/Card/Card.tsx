/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
import { FC } from 'react';
import style from './styles.module.scss';

interface IProps {
  name: string;
  gender: string;
}

const Card: FC<IProps> = ({ name, gender }) => {
  return (
    <div className={style.card} data-testid="card">
      <div className={style.card__name}>{name}</div>
      <div className={style.card__gender}>{gender}</div>
    </div>
  );
};

export default Card;
