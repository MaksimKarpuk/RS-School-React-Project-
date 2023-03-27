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
    if (!inputField.current?.value) {
      setState({ ...state, error: true });
    } else {
      setState({ ...state, error: false });
    }
    if (!selectField.current?.value) {
      setState({ ...state, selectError: true });
    } else {
      setState({ ...state, selectError: false });
    }
    if (!checkboxField.current?.checked) {
      setState({ ...state, checkboxError: true });
    } else {
      setState({ ...state, checkboxError: false });
    }
    if (!dateField.current?.value) {
      setState({ ...state, dateError: true });
    } else {
      setState({ ...state, dateError: false });
    }
    if (!fileField.current?.files![0]) {
      setState({ ...state, fileError: true });
    } else {
      setState({ ...state, fileError: false });
    }
    if (!radioFieldMale.current?.checked && !radioFieldFimale.current?.checked) {
      setState({ ...state, radioError: true });
    } else {
      setState({ ...state, radioError: false });
    }
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
// class Form extends Component<unknown, IState> {
//   inputField: React.RefObject<HTMLInputElement>;

//   dateField: React.RefObject<HTMLInputElement>;

//   checkboxField: React.RefObject<HTMLInputElement>;

//   radioFieldPhone: React.RefObject<HTMLInputElement>;

//   radioFieldEmail: React.RefObject<HTMLInputElement>;

//   fileField: React.RefObject<HTMLInputElement>;

//   selectField: React.RefObject<HTMLSelectElement>;

//   constructor(props) {
//     super(props);
//     this.inputField = React.createRef();
//     this.dateField = React.createRef();
//     this.checkboxField = React.createRef();
//     this.selectField = React.createRef();
//     this.fileField = React.createRef();
//     this.radioFieldPhone = React.createRef();
//     this.radioFieldEmail = React.createRef();
//     this.state = {
//       error: false,
//       selectError: false,
//       checkboxError: false,
//       dateError: false,
//       fileError: false,
//       radioError: false,
//       cards: [],
//     };
//     this.setForm = this.setForm.bind(this);
//     this.submitForm = this.submitForm.bind(this);
//   }

//   setForm(e: React.MouseEvent<HTMLButtonElement>) {
//     e.preventDefault();
//     if (!this.inputField.current?.value) {
//       this.setState({ error: true });
//     } else {
//       this.setState({ error: false });
//     }
//     if (!this.selectField.current?.value) {
//       this.setState({ selectError: true });
//     } else {
//       this.setState({ selectError: false });
//     }
//     if (!this.checkboxField.current?.checked) {
//       this.setState({ checkboxError: true });
//     } else {
//       this.setState({ checkboxError: false });
//     }
//     if (!this.dateField.current?.value) {
//       this.setState({ dateError: true });
//     } else {
//       this.setState({ dateError: false });
//     }
//     if (!this.fileField.current?.files![0]) {
//       this.setState({ fileError: true });
//     } else {
//       this.setState({ fileError: false });
//     }
//     if (!this.radioFieldEmail.current?.checked && !this.radioFieldPhone.current?.checked) {
//       this.setState({ radioError: true });
//     } else {
//       this.setState({ radioError: false });
//     }
//     if (
//       this.inputField.current?.value &&
//       this.selectField.current?.value &&
//       this.checkboxField.current?.checked &&
//       this.dateField.current?.value &&
//       this.fileField.current?.files![0] &&
//       (this.radioFieldEmail.current?.checked || this.radioFieldPhone.current?.checked)
//     ) {
//       this.submitForm();
//     }
//   }

//   submitForm() {
//     const values = {
//       id: uuid(),
//       inputValue: this.inputField.current?.value,
//       inputDate: this.dateField.current?.value,
//       checkboxValue: this.checkboxField.current?.checked,
//       selectValue: this.selectField.current?.value,
//       fileValue: this.fileField.current?.files![0],
//       radioValue: this.radioFieldEmail.current?.value,
//     };
//     if (this.radioFieldEmail.current?.checked) {
//       values.radioValue = this.radioFieldEmail.current?.value;
//     } else if (this.radioFieldPhone.current?.checked) {
//       values.radioValue = this.radioFieldPhone.current?.value;
//     } else {
//       values.radioValue = '';
//     }
//     const state = { ...this.state };
//     state.cards.push(values);
//     this.setState(state);
//     localStorage.setItem('cards', JSON.stringify(state.cards));
//     if (this.inputField.current?.value) {
//       this.inputField.current.value = '';
//     }
//     if (this.dateField.current?.value) {
//       this.dateField.current.value = '';
//     }
//     if (this.checkboxField.current?.checked) {
//       this.checkboxField.current.checked = false;
//     }
//     if (this.radioFieldEmail.current?.checked) {
//       this.radioFieldEmail.current.checked = false;
//     }
//     if (this.radioFieldPhone.current?.checked) {
//       this.radioFieldPhone.current.checked = false;
//     }
//     if (this.selectField.current?.value) {
//       this.selectField.current.value = '';
//     }
//     this.setState({
//       error: false,
//       checkboxError: false,
//       selectError: false,
//       dateError: false,
//       fileError: false,
//       radioError: false,
//     });
//     alert('The form has been saved successfully');
//   }

//   componentDidMount(): void {
//     const initialCards = localStorage.getItem('cards');
//     if (initialCards) {
//       this.setState({ cards: JSON.parse(initialCards) });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <FormView
//           inputField={this.inputField}
//           dateField={this.dateField}
//           checkboxField={this.checkboxField}
//           selectField={this.selectField}
//           fileField={this.fileField}
//           radioFieldEmail={this.radioFieldEmail}
//           radioFieldPhone={this.radioFieldPhone}
//           setForm={this.setForm}
//           cards={this.state.cards}
//           error={this.state.error}
//           selectError={this.state.selectError}
//           checkboxError={this.state.checkboxError}
//           dateError={this.state.dateError}
//           fileError={this.state.fileError}
//           radioError={this.state.radioError}
//         />
//       </div>
//     );
//   }
// }

export default Form;
