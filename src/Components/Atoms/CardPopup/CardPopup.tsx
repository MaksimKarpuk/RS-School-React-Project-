/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import style from './styles.module.scss';
import { IMovie } from '../../../interfaces';

interface IProps {
  item: IMovie;
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
