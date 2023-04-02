/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import uuid from 'react-uuid';
import FormCard from '../../Molecules/FormCard/FormCard';
import style from './styles.module.scss';
import Popup from '../../Atoms/Popup/Popup';
import InputFirstName from '../../Atoms/FormInputs/InputFirstName';
import InputSecondName from '../../Atoms/FormInputs/InputSecondName';
import InputSelector from '../../Atoms/FormInputs/InputSelect';
import InputDate from '../../Atoms/FormInputs/InputDate';
import InputCheckbox from '../../Atoms/FormInputs/InputCheckbox';
import InputRadio from '../../Atoms/FormInputs/InputRadio';

interface IValues {
  id: string;
  checkbox: boolean;
  city: string;
  date: string;
  file: File;
  firstName: string;
  radio: string;
  secondName: string;
}
interface IState {
  popup: boolean;
  cards: IValues[];
}

const NewForm: FC = () => {
  const [state, setState] = React.useState<IState>({
    cards: [],
    popup: false,
  });
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const setUnvisiblePopup = () => {
    setState({ ...state, popup: false });
  };
  const setVisiblePopup = () => {
    setState({ ...state, popup: true });
  };
  const onSubmit = (data) => {
    const values: IValues = {
      id: uuid(),
      checkbox: data.checkbox,
      city: data.city,
      date: data.date,
      file: data.file,
      firstName: data.firstName,
      radio: data.radio,
      secondName: data.secondName,
    };
    const stateValues = { ...state };
    stateValues.cards.push(values);
    setState(stateValues);
    localStorage.setItem('cards', JSON.stringify(stateValues.cards));
    setVisiblePopup();
    reset();
  };
  React.useEffect(() => {
    const initialCards = localStorage.getItem('cards');
    if (initialCards) {
      setState({ ...state, cards: JSON.parse(initialCards) });
    }
  }, []);
  const onChange = (e) => {
    const files = e.target.files[0];
    setValue('file', files);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="new-form">
        <div className={style.inputs__text}>
          <div className={style.text}>
            <InputFirstName label="First name:" register={register} placeholder="First name" />
            {errors?.firstName && (
              <div className={style.error} data-testid="new-form-firstName-error">
                Fill your first name
              </div>
            )}
          </div>
          <div className={style.text}>
            <InputSecondName label=" Second name:" register={register} placeholder="Second name" />
            {errors?.secondName && <div className={style.error}>Fill your second name</div>}
          </div>
        </div>
        <div className={style.input__date}>
          <InputDate label="Choose birthday date:" register={register} />
          {errors?.date && <div className={style.error}>Fill your birthday date</div>}
        </div>
        <div className={style.input__radios}>
          <div className={style.radios}>
            <div className={style.radio}>
              <InputRadio label="Male" register={register} value="Male" />
            </div>
            <div className={style.input__radio}>
              <InputRadio label="Fimale" register={register} value="Fimale" />
            </div>
          </div>

          {errors?.radio && <div className={style.error}>Choose gender</div>}
        </div>

        <div className={style.input__select}>
          <InputSelector label="Select your city:" register={register} />
          {errors?.city && <div className={style.error}>Select your city</div>}
        </div>
        <div className={style.input__file}>
          <label htmlFor="file">
            Choose photo:
            <input type="file" onChange={onChange} name="file" required />
          </label>
        </div>
        <div className={style.input__checkbox}>
          <div className={style.checkbox}>
            <InputCheckbox label="I consent to my personal data" register={register} />
          </div>
          {errors?.checkbox && <div className={style.error}>Give your permition</div>}
        </div>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
      <div className={style.container__card}>
        {state.cards.map((item) => (
          <FormCard
            key={item.id}
            firstName={item.firstName}
            secondName={item.secondName}
            inputDate={item.date}
            checkboxValue={item.checkbox}
            radioValue={item.radio}
            selectValue={item.city}
            fileValue={item.file as BlobPart}
          />
        ))}
      </div>
      <Popup visiblePopup={state.popup} setPopup={setUnvisiblePopup} />
    </>
  );
};
export default NewForm;
