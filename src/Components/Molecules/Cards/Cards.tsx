import { FC } from 'react';
import CardsView from './CardsView';
import image1 from '../../../assets/images/1.jpg';
import image2 from '../../../assets/images/2.jpg';
import image3 from '../../../assets/images/3.jpg';
import image4 from '../../../assets/images/4.jpg';
import image5 from '../../../assets/images/5.jpg';
import image6 from '../../../assets/images/6.jpg';

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
  { id: 1, title: 'Home', subtitle: '24-02-22', src: image1 },
  { id: 2, title: 'Nature', subtitle: '02-03-19', src: image2 },
  { id: 3, title: 'Bike', subtitle: '22-02-23', src: image3 },
  { id: 4, title: 'Road', subtitle: '01-06-20', src: image4 },
  { id: 5, title: 'Tokyo', subtitle: '05-07-21', src: image5 },
  { id: 6, title: 'Dog', subtitle: '05-09-18', src: image6 },
];

const Cards: FC<IProps> = (props) => {
  const getCards = () => {
    return CardsInfo.filter((item) => {
      return item.title.toLowerCase().includes(props.searchValue.toLowerCase());
    });
  };
  return <CardsView getCards={getCards} />;
};

export default Cards;
