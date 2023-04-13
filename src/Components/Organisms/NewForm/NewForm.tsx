/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */

import { FC } from 'react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import FormCard from '../../Molecules/FormCard/FormCard';
import style from './styles.module.scss';
import Popup from '../../Atoms/Popup/Popup';
import InputFirstName from '../../Atoms/FormInputs/InputFirstName';
import InputSecondName from '../../Atoms/FormInputs/InputSecondName';
import InputSelector from '../../Atoms/FormInputs/InputSelect';
import InputDate from '../../Atoms/FormInputs/InputDate';
import InputCheckbox from '../../Atoms/FormInputs/InputCheckbox';
import InputRadio from '../../Atoms/FormInputs/InputRadio';
import { useAppSelector, useAppDispatch } from '../../../store/hooks/useTypedSelector';
import {
  setVisiblePopup,
  setUnvisiblePopup,
  addFormCard,
  getCardsFromLocalStorage,
} from '../../../store/Form';

const NewForm: FC = () => {
  const cards = useAppSelector((state) => state.Form.cards);
  const popup = useAppSelector((state) => state.Form.popup);
  const dispatch = useAppDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const openPopup = () => {
    dispatch(setVisiblePopup(true));
  };
  const closePopup = () => {
    dispatch(setUnvisiblePopup(false));
  };

  const onSubmit = (data) => {
    dispatch(addFormCard(data));
    openPopup();
    reset();
  };
  React.useEffect(() => {
    dispatch(getCardsFromLocalStorage());
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
        {cards.map((item) => (
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
      <Popup visiblePopup={popup} setPopup={closePopup} />
    </>
  );
};
export default NewForm;
