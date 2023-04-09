/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';

interface IFormValues {
  date?: string;
}

interface IProps {
  label: string;
  register: UseFormRegister<IFormValues>;
}
const InputDate: FC<IProps> = ({ label, register }: IProps) => {
  return (
    <>
      <label>
        {label}
        <input
          type="date"
          {...register('date', {
            required: true,
          })}
        />
      </label>
    </>
  );
};

export default InputDate;
