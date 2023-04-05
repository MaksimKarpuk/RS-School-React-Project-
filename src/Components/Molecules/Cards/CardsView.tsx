/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */

import { FC, useState } from 'react';
import Card from '../../Atoms/Card/Card';
import CardPopup from '../../Atoms/CardPopup/CardPopup';
import style from './styles.module.scss';

interface ICardInfoItem {
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
  cards: ICardInfoItem[];
}

const CardsView: FC<IProps> = (props) => {
  const [popupInfo, setPopupInform] = useState<ICardInfoItem>();
  const setPopupInfo = (name) => {
    const info = props.cards.find((item) => item.name === name);
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
        {props.cards.map((item) => (
          <div key={item.name} onClick={() => setPopupInfo(item.name)}>
            <Card item={item} />
          </div>
        ))}
        {popupInfo && <CardPopup item={popupInfo} setUnvisiblePopup={setUnvisiblePopup} />}
      </div>
    </div>
  );
};

export default CardsView;
