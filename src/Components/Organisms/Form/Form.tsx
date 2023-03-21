import * as React from 'react';
import { Component } from 'react';
import FormView from './FormView';

interface IState {
  inputValue: string | undefined;
  inputDate: string | undefined;
  checkboxValue: boolean | undefined;
  checked: boolean;
}

class Form extends Component<unknown, IState> {
  inputField: React.RefObject<HTMLInputElement>;

  dateField: React.RefObject<HTMLInputElement>;

  checkboxField: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    this.dateField = React.createRef();
    this.checkboxField = React.createRef();
    this.state = { inputValue: '', inputDate: '', checked: false, checkboxValue: false };
    this.setForm = this.setForm.bind(this);
  }

  setForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.setState({ inputValue: this.inputField.current?.value });
    this.setState({ inputDate: this.dateField.current?.value });
    this.setState({ checkboxValue: this.checkboxField.current?.checked });
    if (this.inputField.current?.value) {
      this.inputField.current.value = '';
    }
    if (this.dateField.current?.value) {
      this.dateField.current.value = '';
    }
    if (this.checkboxField.current?.checked) {
      this.checkboxField.current.checked = false;
    }
  }

  render() {
    return (
      <FormView
        inputValue={this.state.inputValue}
        inputDate={this.state.inputDate}
        checkboxValue={this.state.checkboxValue}
        inputField={this.inputField}
        dateField={this.dateField}
        checkboxField={this.checkboxField}
        setForm={this.setForm}
        checked={this.state.checked}
      />
    );
  }
}

export default Form;
