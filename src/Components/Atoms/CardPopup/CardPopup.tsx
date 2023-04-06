/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import { GrClose } from 'react-icons/gr';
import style from './styles.module.scss';
import { IMovie } from '../../../interfaces';

interface IProps {
  item: IMovie;
  setUnvisiblePopup: () => void;
}

const CardPopup: FC<IProps> = (props) => {
  return (
    <div className={style.popup}>
      <div className={style.popup__container}>
        <div className={style.container__header}>
          <div className={style.header__title}>{props.item.name}</div>
          <div className={style.header__close} onClick={props.setUnvisiblePopup}>
            <GrClose />
          </div>
        </div>
        <div className={style.container__body}>
          <div className={style.body__gender}>
            <b>Gender:</b> {props.item.gender}
          </div>
          <div className={style.body__height}>
            <b>Height:</b> {props.item.height}
          </div>
          <div className={style.body__mass}>
            <b>Mass:</b> {props.item.mass}
          </div>
          <div className={style.body__hair}>
            <b>Hair color:</b> {props.item.hair_color}
          </div>
          <div className={style.body__eye}>
            <b>Eye color:</b> {props.item.eye_color}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardPopup;
