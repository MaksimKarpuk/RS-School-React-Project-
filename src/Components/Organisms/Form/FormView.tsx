import * as React from 'react';
import { Component } from 'react';
import Input from '../../Atoms/Input/Input';
import Date from '../../Atoms/Date/Date';
import FormCard from '../../Atoms/FormCard/FormCard';
import style from './styles.module.scss';

interface IProps {
  inputValue: string | undefined;
  inputDate: string;
  inputField: React.RefObject<HTMLInputElement>;
  handleChange: () => void;
}

class FormView extends Component<IProps, unknown> {
  render() {
    return (
      <div className={style.form}>
        <div className={style.form__input}>
          <Input
            placeholder="Name"
            value={this.props.inputValue}
            inputField={this.props.inputField}
            handleChange={this.props.handleChange}
          />
        </div>
        <div className={style.form__date}>
          <Date value={this.props.inputDate} />
        </div>
        <div className={style.form__card}>
          <FormCard inputValue={this.props.inputValue} />
        </div>
      </div>
    );
  }
}

export default FormView;
