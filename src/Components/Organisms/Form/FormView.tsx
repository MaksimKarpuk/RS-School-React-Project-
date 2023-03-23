import * as React from 'react';
import { Component } from 'react';
import Input from '../../Atoms/Ref/InputRef/InputRef';
import Date from '../../Atoms/Ref/DateRef/DateRef';
import FormCard from '../../Molecules/FormCard/FormCard';
import Checkbox from '../../Atoms/Ref/CheckboxRef/CheckboxRef';
import Radio from '../../Atoms/Ref/RadioRef/RadioRef';
import Select from '../../Atoms/Ref/SelectRef/SelectRef';
import File from '../../Atoms/Ref/FileRef/FileRef';
import style from './styles.module.scss';

interface ICards {
  id: string;
  value: IValue;
}
interface IValue {
  inputValue: string | undefined;
  inputDate: string | undefined;
  checkboxValue: boolean | undefined;
  selectValue: string | undefined;
  radioValue: string | undefined;
  fileValue: File | Blob | MediaSource | undefined;
}
interface IProps {
  inputField: React.RefObject<HTMLInputElement>;
  dateField: React.RefObject<HTMLInputElement>;
  checkboxField: React.RefObject<HTMLInputElement>;
  radioFieldPhone: React.RefObject<HTMLInputElement>;
  radioFieldEmail: React.RefObject<HTMLInputElement>;
  selectField: React.RefObject<HTMLSelectElement>;
  fileField: React.RefObject<HTMLInputElement>;
  setForm: (e: React.MouseEvent<HTMLButtonElement>) => void;
  cards: ICards[];
  error: boolean;
}

class FormView extends Component<IProps, unknown> {
  render() {
    return (
      <>
        <form className={style.form}>
          <div className={style.form__container}>
            <div className={style.container__inputs}>
              <div
                className={
                  !this.props.error ? style.container__input : style.container__input_error
                }
              >
                <Input placeholder="Name" inputField={this.props.inputField} />
                {this.props.error ? (
                  <div className={style.input__error}>
                    It is necessary to fill in the field with a capital letter
                  </div>
                ) : null}
              </div>
              <div className={style.container__date}>
                <Date dateField={this.props.dateField} />
              </div>
              <div className={style.container__select}>
                <Select selectField={this.props.selectField} />
              </div>
              <div className={style.container__radio}>
                <Radio radioField={this.props.radioFieldPhone} label="Male" />
                <Radio radioField={this.props.radioFieldEmail} label="Fimale" />
              </div>
              <div className={style.container__file}>
                <File fileField={this.props.fileField} label="Add your photo" />
              </div>
              <div className={style.container__checkbox}>
                <Checkbox checkboxField={this.props.checkboxField} />
              </div>
              <button type="submit" onClick={this.props.setForm}>
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className={style.container__card}>
          {this.props.cards.map((item) => (
            <FormCard
              key={item.id}
              inputValue={item.value.inputValue}
              inputDate={item.value.inputDate}
              checkboxValue={item.value.checkboxValue}
              radioValue={item.value.radioValue}
              selectValue={item.value.selectValue}
              fileValue={item.value.fileValue}
            />
          ))}
        </div>
      </>
    );
  }
}

export default FormView;
