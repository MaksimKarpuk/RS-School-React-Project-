import { FC } from 'react';
import CardsView from './CardsView';

interface IMovie {
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
  searchValue: string;
  movies: IMovie[];
}

const Cards: FC<IProps> = (props) => {
  const getCards = () => {
    return props.movies.filter((item) => {
      return item.name.toLowerCase().includes(props.searchValue.toLowerCase());
    });
  };
  return <CardsView getCards={getCards} />;
};

export default Cards;
