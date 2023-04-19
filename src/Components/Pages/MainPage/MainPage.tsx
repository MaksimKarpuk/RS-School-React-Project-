import { FC } from 'react';
import ReactLoading from 'react-loading';
import CardsView from '../../Molecules/Cards/CardsView';
import style from './styles.module.scss';
import { personsAPI } from '../../../services/PersonsService';
import { useAppSelector } from '../../../store/hooks/useTypedSelector';

const MainPage: FC = () => {
  const value = useAppSelector((state) => state.Persons.searchValue);
  const { data, isFetching } = personsAPI.useFetchAllPersonsQuery(value);

  return (
    <div className={style.main} data-testid="main-page">
      {data?.results?.length === 0 && !isFetching && (
        <div className={style.main__empty}>Not found</div>
      )}
      {isFetching && (
        <div className={style.main__loader}>
          <ReactLoading type="spin" color="#FF1493" height={300} width={300} />
        </div>
      )}
      {!isFetching && <CardsView movies={data?.results || []} />}
    </div>
  );
};

export default MainPage;
