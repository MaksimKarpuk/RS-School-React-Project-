/* eslint-disable no-underscore-dangle */
import { FC } from 'react';
import Cards from '../../Molecules/Cards/Cards';

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

const MainPage: FC<IProps> = (props) => {
  return (
    <div data-testid="main-page">
      <Cards searchValue={props.searchValue} movies={props.movies} />
    </div>
  );
};

export default MainPage;
