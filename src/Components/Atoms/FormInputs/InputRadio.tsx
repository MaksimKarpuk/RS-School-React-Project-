import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';

interface IFormValues {
  radio?: string;
}

interface IProps {
  label: string;
  value: string;
  register: UseFormRegister<IFormValues>;
}
const InputRadio: FC<IProps> = ({ label, register, value }: IProps) => {
  return (
    <>
      <label>
        <input
          type="radio"
          value={value}
          {...register('radio', {
            required: true,
          })}
        />
        {label}
      </label>
    </>
  );
};

export default InputRadio;
