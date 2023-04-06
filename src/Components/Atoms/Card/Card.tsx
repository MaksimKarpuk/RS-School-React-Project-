/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
import { FC } from 'react';
import style from './styles.module.scss';
import { IMovie } from '../../../interfaces';

interface IProps {
  item: IMovie;
}

const Card: FC<IProps> = (props) => {
  return (
    <div className={style.card} data-testid="card">
      <div className={style.card__name}>{props.item.name}</div>
      <div className={style.card__gender}>{props.item.gender}</div>
    </div>
  );
};

export default Card;
