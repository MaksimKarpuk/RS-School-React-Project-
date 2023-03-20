import { Component } from 'react';
import Card from '../../Atoms/Card/Card';
import style from './styles.module.scss';
import image from '../../../assets/images/4.jpg';

interface ICardInfoItem {
  id: number;
  title: string;
  subtitle: string;
  src: string;
}

interface IProps {
  searchValue: string;
}

const CardsInfo: ICardInfoItem[] = [
  { id: 1, title: 'Title 1', subtitle: 'Subtitle 1', src: image },
  { id: 2, title: 'Title 2', subtitle: 'Subtitle 2', src: image },
  { id: 3, title: 'Title 3', subtitle: 'Subtitle 3', src: image },
  { id: 4, title: 'Title 4', subtitle: 'Subtitle 4', src: image },
  { id: 5, title: 'Title 5', subtitle: 'Subtitle 5', src: image },
  { id: 6, title: 'Title 6', subtitle: 'Subtitle 6', src: image },
];

class Cards extends Component<IProps, unknown> {
  constructor(props: IProps) {
    super(props);
    this.getCards = this.getCards.bind(this);
  }

  getCards = () => {
    return CardsInfo.filter((item) => {
      return item.title.toLowerCase().includes(this.props.searchValue.toLowerCase());
    });
  };

  render() {
    return (
      <div className={style.cards}>
        {this.getCards().map((item) => (
          <Card title={item.title} subtitle={item.subtitle} src={item.src} key={item.id} />
        ))}
      </div>
    );
  }
}
export default Cards;
