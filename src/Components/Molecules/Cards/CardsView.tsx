/* eslint-disable no-underscore-dangle */
import { FC } from 'react';
import Card from '../../Atoms/Card/Card';
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
  getCards: () => ICardInfoItem[];
}

const CardsView: FC<IProps> = (props) => {
  return (
    <div className={style.cards} data-testid="cards">
      {props.getCards().map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default CardsView;
