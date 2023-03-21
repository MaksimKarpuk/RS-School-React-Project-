import { Component } from 'react';
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

class CardsView extends Component<IProps, unknown> {
  render() {
    return (
      <div className={style.cards}>
        {this.props.getCards().map((item) => (
          <Card title={item.title} subtitle={item.subtitle} src={item.src} key={item.id} />
        ))}
      </div>
    );
  }
}
export default CardsView;
