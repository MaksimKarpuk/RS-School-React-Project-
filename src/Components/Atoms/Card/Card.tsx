/* eslint-disable jsx-a11y/aria-role */
import { FC } from 'react';
import style from './styles.module.scss';

interface ICardInfoItem {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}
interface IProps {
  item: ICardInfoItem;
}

const Card: FC<IProps> = (props) => {
  return (
    <div className={style.card} data-testid="card">
      {/* <div className={style.card__image}>
        <img src={props.src} alt={props.title} />
      </div> */}
      <div className={style.card__title}>{props.item.name}</div>
      <div className={style.card__subtitle}>{props.item.academyAwardWins}</div>
    </div>
  );
};

export default Card;
