import * as React from 'react';
import { Component } from 'react';
import Input from '../../Atoms/InputRef/InputRef';
import Date from '../../Atoms/Date/Date';
import FormCard from '../../Atoms/FormCard/FormCard';
import style from './styles.module.scss';

interface IProps {
  inputValue: string | undefined;
  inputDate: string | undefined;
  inputField: React.RefObject<HTMLInputElement>;
  dateField: React.RefObject<HTMLInputElement>;
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
        <div className={style.form__card}>
          <FormCard inputValue={this.props.inputValue} inputDate={this.props.inputDate} />
        </div>
        <button type="submit" onClick={this.props.setForm}>
          Submit
        </button>
      </form>
    );
  }
}

export default FormView;
