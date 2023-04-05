import { FC } from 'react';
import CardsView from './CardsView';

interface IMovie {
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
  searchValue: string;
  movies: IMovie[];
}

const Cards: FC<IProps> = (props) => {
  const cards = props.movies.filter((item) => {
    return item.name.toLowerCase().includes(props.searchValue.toLowerCase());
  });

  return <CardsView cards={cards} />;
};

export default Cards;
