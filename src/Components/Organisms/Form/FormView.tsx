import * as React from 'react';
import { FC } from 'react';
import Input from '../../Atoms/Ref/InputRef/InputRef';
import Date from '../../Atoms/Ref/DateRef/DateRef';
import FormCard from '../../Molecules/FormCard/FormCard';
import Checkbox from '../../Atoms/Ref/CheckboxRef/CheckboxRef';
import Radio from '../../Atoms/Ref/RadioRef/RadioRef';
import Select from '../../Atoms/Ref/SelectRef/SelectRef';
import File from '../../Atoms/Ref/FileRef/FileRef';
import style from './styles.module.scss';

interface IValue {
  id: string;
  inputValue: string | undefined;
  inputDate: string | undefined;
  checkboxValue: boolean | undefined;
  selectValue: string | undefined;
  radioValue: string | undefined;
  fileValue: File | Blob | undefined;
}
interface IProps {
  inputField: React.MutableRefObject<HTMLInputElement | undefined>;
  dateField: React.MutableRefObject<HTMLInputElement | undefined>;
  checkboxField: React.MutableRefObject<HTMLInputElement | undefined>;
  radioFieldMale: React.MutableRefObject<HTMLInputElement | undefined>;
  radioFieldFimale: React.MutableRefObject<HTMLInputElement | undefined>;
  selectField: React.MutableRefObject<HTMLSelectElement | undefined>;
  fileField: React.MutableRefObject<HTMLInputElement | undefined>;
  setForm: (e: React.MouseEvent<HTMLButtonElement>) => void;
  cards: IValue[];
  error: boolean;
  selectError: boolean;
  checkboxError: boolean;
  dateError: boolean;
  fileError: boolean;
  radioError: boolean;
}

const FormView: FC<IProps> = (props) => {
  return (
    <>
      <form className={style.form}>
        <div className={style.form__container}>
          <div className={style.container__inputs}>
            <div className={style.container__input}>
              <Input placeholder="Name" inputField={props.inputField} />
              {props.error ? <div className={style.error}>It is necessary to fill</div> : null}
            </div>
            <div className={style.container__date}>
              <Date dateField={props.dateField} />
              {props.dateError ? (
                <div className={style.error}>It is necessary to select</div>
              ) : null}
            </div>
            <div className={style.container__select}>
              <Select selectField={props.selectField} />
              {props.selectError ? (
                <div className={style.error}>It is necessary to select</div>
              ) : null}
            </div>
            <div className={style.container__radio}>
              <div className={style.radio__btns}>
                <Radio radioField={props.radioFieldMale} label="Male" />
                <Radio radioField={props.radioFieldFimale} label="Fimale" />
              </div>
              {props.radioError ? (
                <div className={style.error}>It is necessary to select</div>
              ) : null}
            </div>
            <div className={style.container__file}>
              <File fileField={props.fileField} label="Add your photo" />
              {props.fileError ? <div className={style.error}>It is necessary to fill</div> : null}
            </div>
            <div className={style.container__checkbox}>
              <Checkbox checkboxField={props.checkboxField} />
              {props.checkboxError ? (
                <div className={style.error}>It is necessary to confirm</div>
              ) : null}
            </div>
            <button type="submit" onClick={props.setForm} data-testid="button">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className={style.container__card}>
        {props.cards.map((item) => (
          <FormCard
            key={item.id}
            inputValue={item.inputValue}
            inputDate={item.inputDate}
            checkboxValue={item.checkboxValue}
            radioValue={item.radioValue}
            selectValue={item.selectValue}
            fileValue={item.fileValue as BlobPart}
          />
        ))}
      </div>
    </>
  );
};

export default FormView;
