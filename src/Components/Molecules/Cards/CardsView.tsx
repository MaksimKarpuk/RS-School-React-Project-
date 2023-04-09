/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */

import { FC, useState } from 'react';
import Card from '../../Atoms/Card/Card';
import CardPopup from '../../Atoms/CardPopup/CardPopup';
import style from './styles.module.scss';
import { IMovie } from '../../../interfaces';

interface IProps {
  movies: IMovie[];
}

const CardsView: FC<IProps> = (props) => {
  const [popupInfo, setPopupInform] = useState<IMovie>();
  const setPopupInfo = (name) => {
    const info = props.movies.find((item) => item.name === name);
    if (info) {
      setPopupInform(info);
    }
  };
  const setUnvisiblePopup = () => {
    setPopupInform();
  };
  return (
    <div>
      <div className={style.cards} data-testid="cards">
        {props.movies.map((item) => (
          <div key={item.name} onClick={() => setPopupInfo(item.name)}>
            <Card name={item.name} gender={item.gender} />
          </div>
        ))}
        {popupInfo && <CardPopup item={popupInfo} setUnvisiblePopup={setUnvisiblePopup} />}
      </div>
    </div>
  );
};

export default CardsView;
