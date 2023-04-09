/* eslint-disable no-underscore-dangle */
import { FC } from 'react';
import ReactLoading from 'react-loading';
import Cards from '../../Molecules/Cards/Cards';
import style from './styles.module.scss';
import { IMovie } from '../../../interfaces';

interface IProps {
  movies: IMovie[];
  loading: boolean;
}

const MainPage: FC<IProps> = (props) => {
  return (
    <div className={style.main} data-testid="main-page">
      {props.movies.length === 0 && !props.loading && (
        <div className={style.main__empty}>Not found</div>
      )}
      {props.loading && (
        <div className={style.main__loader}>
          <ReactLoading type="spin" color="#FF1493" height={300} width={300} />
        </div>
      )}
      {!props.loading && <Cards movies={props.movies} />}
    </div>
  );
};

export default MainPage;
