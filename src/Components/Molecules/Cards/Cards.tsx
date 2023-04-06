import { FC } from 'react';
import CardsView from './CardsView';
import { IMovie } from '../../../interfaces';

interface IProps {
  movies: IMovie[];
}

const Cards: FC<IProps> = (props) => {
  return <CardsView movies={props.movies} />;
};

export default Cards;
