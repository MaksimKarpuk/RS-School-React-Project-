/* eslint-disable no-underscore-dangle */
import { FC } from 'react';
import Cards from '../../Molecules/Cards/Cards';
import style from './styles.module.scss';

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
  // _id: string;
  // name: string;
  // runtimeInMinutes: number;
  // budgetInMillions: number;
  // boxOfficeRevenueInMillions: number;
  // academyAwardNominations: number;
  // academyAwardWins: number;
  // rottenTomatoesScore: number;
}
interface IProps {
  searchValue: string;
  movies: IMovie[];
}

const MainPage: FC<IProps> = (props) => {
  return (
    <div className={style.main} data-testid="main-page">
      <Cards searchValue={props.searchValue} movies={props.movies} />
    </div>
  );
};

export default MainPage;
