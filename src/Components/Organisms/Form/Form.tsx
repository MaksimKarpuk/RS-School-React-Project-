import * as React from 'react';
import { Component } from 'react';
import FormView from './FormView';

interface IState {
  inputValue: string | undefined;
  inputDate: string | undefined;
}

class Form extends Component<unknown, IState> {
  inputField: React.RefObject<HTMLInputElement>;

  dateField: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    this.dateField = React.createRef();
    this.state = { inputValue: '', inputDate: '' };
    this.setForm = this.setForm.bind(this);
  }

  setForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.setState({ inputValue: this.inputField.current?.value });
    this.setState({ inputDate: this.dateField.current?.value });
  }

  render() {
    return (
      <FormView
        inputValue={this.state.inputValue}
        inputDate={this.state.inputDate}
        inputField={this.inputField}
        dateField={this.dateField}
        setForm={this.setForm}
      />
    );
  }
}

export default Form;
