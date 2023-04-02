import { FC } from 'react';
import Cards from '../../Molecules/Cards/Cards';

interface IProps {
  searchValue: string;
}

const MainPage: FC<IProps> = (props) => {
  return (
    <div data-testid="main-page">
      <Cards searchValue={props.searchValue} />
    </div>
  );
};

export default MainPage;
