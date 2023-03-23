/* eslint-disable jsx-a11y/alt-text */
import { Component } from 'react';
import style from './styles.module.scss';

interface IProps {
  inputValue: string | undefined;
  inputDate: string | undefined;
  selectValue: string | undefined;
  radioValue: string | undefined;
  fileValue: File | Blob | MediaSource;
  checkboxValue: boolean | undefined;
}
class FormCard extends Component<IProps> {
  render() {
    return (
      <div className={style.form_card}>
        <div className={style.form_card__container}>
          <div className={style.container__card}>
            <div className={style.card__image}>
              <img src={URL.createObjectURL(this.props.fileValue)} />
            </div>
            <div className={style.card__info}>
              <div className={style.info__name}>Name: {this.props.inputValue}</div>
              <div className={style.info__birthday_date}>Birthday Date: {this.props.inputDate}</div>
              <div className={style.info__select}> City: {this.props.selectValue}</div>
              <div className={style.info__radio}>Gender: {this.props.radioValue}</div>
              <div className={style.info__checkbox}>
                {!this.props.checkboxValue || this.props.checkboxValue === null
                  ? ''
                  : 'Permission has been received'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormCard;
