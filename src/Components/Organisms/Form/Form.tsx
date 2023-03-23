/* eslint-disable no-alert */

import * as React from 'react';
import { Component } from 'react';
import uuid from 'react-uuid';
import FormView from './FormView';

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
interface IState extends IValue {
  cards: ICards[];
  error: boolean;
}

class Form extends Component<unknown, IState> {
  inputField: React.RefObject<HTMLInputElement>;

  dateField: React.RefObject<HTMLInputElement>;

  checkboxField: React.RefObject<HTMLInputElement>;

  radioFieldPhone: React.RefObject<HTMLInputElement>;

  radioFieldEmail: React.RefObject<HTMLInputElement>;

  fileField: React.RefObject<HTMLInputElement>;

  selectField: React.RefObject<HTMLSelectElement>;

  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    this.dateField = React.createRef();
    this.checkboxField = React.createRef();
    this.selectField = React.createRef();
    this.fileField = React.createRef();
    this.radioFieldPhone = React.createRef();
    this.radioFieldEmail = React.createRef();
    this.state = {
      inputValue: '',
      inputDate: '',
      checkboxValue: false,
      selectValue: '',
      radioValue: '',
      fileValue: new File([''], ''),
      cards: [],
      error: false,
    };
    this.setForm = this.setForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  setForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    !this.inputField.current?.value
      ? this.setState({ error: true })
      : !this.checkboxField.current?.checked
      ? this.setState({ error: true })
      : !this.selectField.current?.value
      ? this.setState({ error: true })
      : !this.inputField.current?.value
          .split('')[0]
          .localeCompare(this.inputField.current?.value.split('')[0].toLowerCase())
      ? this.setState({ error: true })
      : this.submitForm();
  }

  submitForm() {
    this.setState({
      inputValue: this.inputField.current?.value,
      inputDate: this.dateField.current?.value,
      checkboxValue: this.checkboxField.current?.checked,
      selectValue: this.selectField.current?.value,
      fileValue: this.fileField.current?.files![0],
      error: false,
    });

    this.radioFieldEmail.current?.checked
      ? this.setState({ radioValue: this.radioFieldEmail.current?.value })
      : this.radioFieldPhone.current?.checked
      ? this.setState({ radioValue: this.radioFieldPhone.current?.value })
      : this.setState({ radioValue: '' });

    this.state.cards.push({
      id: uuid(),
      value: {
        inputValue: this.state.inputValue,
        inputDate: this.state.inputDate,
        checkboxValue: this.state.checkboxValue,
        selectValue: this.state.selectValue,
        radioValue: this.state.radioValue,
        fileValue: this.state.fileValue,
      },
    });
    localStorage.setItem('cards', JSON.stringify(this.state.cards));
    if (this.inputField.current?.value) {
      this.inputField.current.value = '';
    }
    if (this.dateField.current?.value) {
      this.dateField.current.value = '';
    }
    if (this.checkboxField.current?.checked) {
      this.checkboxField.current.checked = false;
    }
    if (this.radioFieldEmail.current?.checked) {
      this.radioFieldEmail.current.checked = false;
    }
    if (this.radioFieldPhone.current?.checked) {
      this.radioFieldPhone.current.checked = false;
    }
    if (this.selectField.current?.value) {
      this.selectField.current.value = '';
    }
    if (this.fileField.current?.files![0]) {
      this.fileField.current.files![0] = new File([''], '');
    }
    alert('The form has been saved successfully');
  }

  render() {
    return (
      <div>
        <FormView
          inputField={this.inputField}
          dateField={this.dateField}
          checkboxField={this.checkboxField}
          selectField={this.selectField}
          fileField={this.fileField}
          radioFieldEmail={this.radioFieldEmail}
          radioFieldPhone={this.radioFieldPhone}
          setForm={this.setForm}
          cards={this.state.cards}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default Form;
