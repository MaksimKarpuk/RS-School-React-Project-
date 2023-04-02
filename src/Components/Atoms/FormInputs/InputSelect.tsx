/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';

interface IFormValues {
  city?: string;
}

interface IProps {
  label: string;
  register: UseFormRegister<IFormValues>;
}
const InputSelector: FC<IProps> = ({ label, register }) => (
  <>
    <label>{label}</label>
    <select
      {...register('city', {
        required: true,
      })}
      data-testid="new-form-select"
    >
      <option value="">Select...</option>
      <option value="Minsk">Minsk</option>
      <option value="Brest">Brest</option>
      <option value="Grodno">Grodno</option>
      <option value="Vitebsk">Vitebsk</option>
      <option value="Gomel">Gomel</option>
      <option value="Mogilev">Mogilev</option>
    </select>
  </>
);
export default InputSelector;
