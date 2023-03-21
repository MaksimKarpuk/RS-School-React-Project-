import * as React from 'react';
import { Component } from 'react';
import Input from '../../Atoms/InputRef/InputRef';
import Date from '../../Atoms/DateRef/DateRef';
import FormCard from '../../Molecules/FormCard/FormCard';
import Checkbox from '../../Atoms/CheckboxRef/CheckboxRef';
import style from './styles.module.scss';

interface IProps {
  inputValue: string | undefined;
  inputDate: string | undefined;
  checkboxValue: boolean | undefined;
  checked: boolean;
  inputField: React.RefObject<HTMLInputElement>;
  dateField: React.RefObject<HTMLInputElement>;
  checkboxField: React.RefObject<HTMLInputElement>;
  setForm: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

class FormView extends Component<IProps, unknown> {
  render() {
    return (
      <form className={style.form}>
        <div className={style.form__input}>
          <Input placeholder="Name" inputField={this.props.inputField} />
        </div>
        <div className={style.form__date}>
          <Date dateField={this.props.dateField} />
        </div>
        <div className={style.form__checkbox}>
          <Checkbox checkboxField={this.props.checkboxField} checked={this.props.checked} />
        </div>
        <div className={style.form__card}>
          <FormCard
            inputValue={this.props.inputValue}
            inputDate={this.props.inputDate}
            checkboxValue={this.props.checkboxValue}
          />
        </div>
        <button type="submit" onClick={this.props.setForm}>
          Submit
        </button>
      </form>
    );
  }
}

export default FormView;
