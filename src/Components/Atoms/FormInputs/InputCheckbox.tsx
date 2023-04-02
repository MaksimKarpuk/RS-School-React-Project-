/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';

interface IFormValues {
  checkbox?: string;
}

interface IProps {
  label: string;
  register: UseFormRegister<IFormValues>;
}
const InputCheckbox: FC<IProps> = ({ label, register }: IProps) => {
  return (
    <>
      <input
        type="checkbox"
        {...register('checkbox', {
          required: true,
        })}
        data-testid="new-form-checkbox"
      />
      <label>{label}</label>
    </>
  );
};

export default InputCheckbox;
