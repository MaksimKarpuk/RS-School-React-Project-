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

interface IValue {
  id: string;
  inputValue: string | undefined;
  inputDate: string | undefined;
  checkboxValue: boolean | undefined;
  selectValue: string | undefined;
  radioValue: string | undefined;
  fileValue: File | Blob | undefined;
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
  cards: IValue[];
  error: boolean;
  selectError: boolean;
  checkboxError: boolean;
  CapitalLeterError: boolean;
}

class FormView extends Component<IProps, unknown> {
  render() {
    return (
      <>
        <form className={style.form}>
          <div className={style.form__container}>
            <div className={style.container__inputs}>
              <div className={style.container__input}>
                <Input placeholder="Name" inputField={this.props.inputField} />
                {this.props.error ? (
                  <div className={style.error}>It is necessary to fill</div>
                ) : null}
                {this.props.CapitalLeterError ? (
                  <div className={style.error}>
                    It is necessary to fill in the field with a capital letter
                  </div>
                ) : null}
              </div>
              <div className={style.container__date}>
                <Date dateField={this.props.dateField} />
              </div>
              <div className={style.container__select}>
                <Select selectField={this.props.selectField} />
                {this.props.selectError ? (
                  <div className={style.error}>It is necessary to select location</div>
                ) : null}
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
                {this.props.checkboxError ? (
                  <div className={style.error}>It is necessary to confirm</div>
                ) : null}
              </div>
              <button type="submit" onClick={this.props.setForm} data-testid="button">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className={style.container__card}>
          {this.props.cards.map((item) => (
            <FormCard
              key={item.id}
              inputValue={item.inputValue}
              inputDate={item.inputDate}
              checkboxValue={item.checkboxValue}
              radioValue={item.radioValue}
              selectValue={item.selectValue}
              fileValue={item.fileValue}
            />
          ))}
        </div>
      </>
    );
  }
}

export default FormView;
