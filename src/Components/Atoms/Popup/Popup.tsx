/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC } from 'react';
import style from './styles.module.scss';

interface IProps {
  visiblePopup: boolean;
  setPopup: () => void;
}

const Popup: FC<IProps> = (props) => {
  return (
    <div
      className={props.visiblePopup ? style.popupVisible : style.popupUnvisible}
      onClick={() => props.setPopup()}
    >
      <div className={style.popup__container}>
        <div className={style.container__info}>The form has been saved successfully</div>
      </div>
    </div>
  );
};
export default Popup;