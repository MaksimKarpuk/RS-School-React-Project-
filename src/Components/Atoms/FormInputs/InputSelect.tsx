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
