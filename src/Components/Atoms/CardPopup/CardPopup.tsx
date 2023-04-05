/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import style from './styles.module.scss';

interface IProps {
  item: {
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
  };
  setUnvisiblePopup: () => void;
}

const CardPopup: FC<IProps> = (props) => {
  return (
    <div className={style.popup} onClick={props.setUnvisiblePopup}>
      <div className={style.popup__container}>
        <div className={style.container__title}>{props.item.name}</div>
        <div className={style.container__subtitle}>{props.item.gender}</div>
        <div className={style.container__close} onClick={props.setUnvisiblePopup}>
          X
        </div>
      </div>
    </div>
  );
};
export default CardPopup;
