import { FC } from 'react';
import Card from '../../Atoms/Card/Card';
import style from './styles.module.scss';

interface ICardInfoItem {
  id: number;
  title: string;
  subtitle: string;
  src: string;
}
interface IProps {
  getCards: () => ICardInfoItem[];
}

const CardsView: FC<IProps> = (props) => {
  return (
    <div className={style.cards} data-testid="cards">
      {props.getCards().map((item) => (
        <Card title={item.title} subtitle={item.subtitle} src={item.src} key={item.id} />
      ))}
    </div>
  );
};

export default CardsView;
