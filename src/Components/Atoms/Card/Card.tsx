/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
import { FC } from 'react';
import style from './styles.module.scss';

interface ICardInfoItem {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: [];
  starships: string[];
  url: string;
  vehicles: string[];
}
interface IProps {
  item: ICardInfoItem;
}

const Card: FC<IProps> = (props) => {
  return (
    <div className={style.card} data-testid="card">
      <div className={style.card__title}>{props.item.name}</div>
      <div className={style.card__subtitle}>{props.item.gender}</div>
    </div>
  );
};

export default Card;
