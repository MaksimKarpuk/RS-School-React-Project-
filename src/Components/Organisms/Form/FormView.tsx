import * as React from 'react';
import { Component } from 'react';
import Input from '../../Atoms/InputRef/InputRef';
import Date from '../../Atoms/DateRef/DateRef';
import FormCard from '../../Molecules/FormCard/FormCard';
import Checkbox from '../../Atoms/CheckboxRef/CheckboxRef';
import Select from '../../Atoms/SelectRef/SelectRef';
import style from './styles.module.scss';

interface IProps {
  inputValue: string | undefined;
  inputDate: string | undefined;
  checkboxValue: boolean | undefined;
  selectValue: string | undefined;
  checked: boolean;
  inputField: React.RefObject<HTMLInputElement>;
  dateField: React.RefObject<HTMLInputElement>;
  checkboxField: React.RefObject<HTMLInputElement>;
  selectField: React.RefObject<HTMLSelectElement>;
  setForm: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

class FormView extends Component<IProps, unknown> {
  render() {
    return (
      <form className={style.form}>
        <div className={style.form__container}>
          <div className={style.container__inputs}>
            <div className={style.container__input}>
              <Input placeholder="Name" inputField={this.props.inputField} />
            </div>
            <div className={style.container__date}>
              <Date dateField={this.props.dateField} />
            </div>
            <div className={style.container__checkbox}>
              <Checkbox checkboxField={this.props.checkboxField} checked={this.props.checked} />
            </div>
            <div className={style.container__select}>
              <Select selectField={this.props.selectField} />
            </div>
          </div>

          <div className={style.container__card}>
            <FormCard
              inputValue={this.props.inputValue}
              inputDate={this.props.inputDate}
              checkboxValue={this.props.checkboxValue}
              selectValue={this.props.selectValue}
            />
          </div>
          <button type="submit" onClick={this.props.setForm}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default FormView;
