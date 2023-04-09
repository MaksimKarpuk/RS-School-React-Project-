/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';
import style from './styles.module.scss';

interface IProps {
  firstName: string | undefined;
  secondName: string | undefined;
  inputDate: string | undefined;
  selectValue: string | undefined;
  radioValue: string | undefined;
  fileValue: BlobPart;
  checkboxValue: boolean | undefined;
}

const FormCard: FC<IProps> = (props) => {
  return (
    <div className={style.form_card}>
      <div className={style.form_card__container}>
        <div className={style.container__card}>
          <div className={style.card__image}>
            <img src={URL.createObjectURL(new Blob([props.fileValue]))} />
          </div>
          <div className={style.card__info}>
            <div className={style.info__name}>
              Full name: {props.firstName} {props.secondName}
            </div>
            <div className={style.info__birthday_date}>Birthday Date: {props.inputDate}</div>
            <div className={style.info__select}> City: {props.selectValue}</div>
            <div className={style.info__radio}>Gender: {props.radioValue}</div>
            <div className={style.info__checkbox}>
              {!props.checkboxValue || props.checkboxValue === null
                ? ''
                : 'Permission has been received'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
