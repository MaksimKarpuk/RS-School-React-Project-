import * as React from 'react';
import { Component } from 'react';
import FormView from './FormView';

interface IState {
  inputValue: string | undefined;
  inputDate: string;
}

class Form extends Component<unknown, IState> {
  inputField: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    this.state = { inputValue: '', inputDate: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ inputValue: this.inputField.current?.value });
  }

  render() {
    return (
      <FormView
        inputValue={this.state.inputValue}
        inputDate={this.state.inputDate}
        inputField={this.inputField}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Form;
