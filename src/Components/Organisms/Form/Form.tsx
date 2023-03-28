/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import * as React from 'react';
import { FC } from 'react';
import uuid from 'react-uuid';
import FormView from './FormView';

interface IValue {
  id: string;
  inputValue: string | undefined;
  inputDate: string | undefined;
  checkboxValue: boolean | undefined;
  selectValue: string | undefined;
  radioValue: string | undefined;
  fileValue: File | Blob | undefined;
}
interface IErrors {
  error: boolean;
  selectError: boolean;
  checkboxError: boolean;
  dateError: boolean;
  fileError: boolean;
  radioError: boolean;
}

interface IState {
  cards: IValue[];

  error: boolean;
  selectError: boolean;
  checkboxError: boolean;
  dateError: boolean;
  fileError: boolean;
  radioError: boolean;
}

const Form: FC = () => {
  const inputField = React.useRef<HTMLInputElement>();
  const dateField = React.useRef<HTMLInputElement>();
  const checkboxField = React.useRef<HTMLInputElement>();
  const radioFieldMale = React.useRef<HTMLInputElement>();
  const radioFieldFimale = React.useRef<HTMLInputElement>();
  const fileField = React.useRef<HTMLInputElement>();
  const selectField = React.useRef<HTMLSelectElement>();
  const [state, setState] = React.useState<IState>({
    error: false,
    selectError: false,
    checkboxError: false,
    dateError: false,
    fileError: false,
    radioError: false,
    cards: [],
  });
  const submitForm = () => {
    const values = {
      id: uuid(),
      inputValue: inputField.current?.value,
      inputDate: dateField.current?.value,
      checkboxValue: checkboxField.current?.checked,
      selectValue: selectField.current?.value,
      fileValue: fileField.current?.files![0],
      radioValue: radioFieldMale.current?.value,
    };
    if (radioFieldMale.current?.checked) {
      values.radioValue = radioFieldMale.current?.value;
    } else if (radioFieldFimale.current?.checked) {
      values.radioValue = radioFieldFimale.current?.value;
    } else {
      values.radioValue = '';
    }
    const stateValue = { ...state };
    stateValue.cards.push(values);
    setState(stateValue);
    localStorage.setItem('cards', JSON.stringify(stateValue.cards));
    if (inputField.current?.value) {
      inputField.current.value = '';
    }
    if (dateField.current?.value) {
      dateField.current.value = '';
    }
    if (checkboxField.current?.checked) {
      checkboxField.current.checked = false;
    }
    if (radioFieldMale.current?.checked) {
      radioFieldMale.current.checked = false;
    }
    if (radioFieldFimale.current?.checked) {
      radioFieldFimale.current.checked = false;
    }
    if (selectField.current?.value) {
      selectField.current.value = '';
    }
    setState({
      ...state,
      error: false,
      checkboxError: false,
      selectError: false,
      dateError: false,
      fileError: false,
      radioError: false,
    });
    alert('The form has been saved successfully');
  };
  const setForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errors: IErrors = {
      error: false,
      selectError: false,
      checkboxError: false,
      dateError: false,
      fileError: false,
      radioError: false,
    };
    if (!inputField.current?.value) {
      errors.error = true;
    } else {
      errors.error = false;
    }
    if (!selectField.current?.value) {
      errors.selectError = true;
    } else {
      errors.selectError = false;
    }
    if (!checkboxField.current?.checked) {
      errors.checkboxError = true;
    } else {
      errors.checkboxError = false;
    }
    if (!dateField.current?.value) {
      errors.dateError = true;
    } else {
      errors.dateError = false;
    }
    if (!fileField.current?.files![0]) {
      errors.fileError = true;
    } else {
      errors.fileError = false;
    }
    if (!radioFieldMale.current?.checked && !radioFieldFimale.current?.checked) {
      errors.radioError = true;
    } else {
      errors.radioError = false;
    }
    setState({ ...state, ...errors });
    if (
      inputField.current?.value &&
      selectField.current?.value &&
      checkboxField.current?.checked &&
      dateField.current?.value &&
      fileField.current?.files![0] &&
      (radioFieldMale.current?.checked || radioFieldFimale.current?.checked)
    ) {
      submitForm();
    }
  };

  React.useEffect(() => {
    const initialCards = localStorage.getItem('cards');
    if (initialCards) {
      setState({ ...state, cards: JSON.parse(initialCards) });
    }
  }, []);
  return (
    <div>
      <FormView
        inputField={inputField}
        dateField={dateField}
        checkboxField={checkboxField}
        selectField={selectField}
        fileField={fileField}
        radioFieldMale={radioFieldMale}
        radioFieldFimale={radioFieldFimale}
        setForm={setForm}
        cards={state.cards}
        error={state.error}
        selectError={state.selectError}
        checkboxError={state.checkboxError}
        dateError={state.dateError}
        fileError={state.fileError}
        radioError={state.radioError}
      />
    </div>
  );
};

export default Form;
