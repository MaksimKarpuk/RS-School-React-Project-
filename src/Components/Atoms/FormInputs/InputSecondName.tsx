import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';

interface IFormValues {
  secondName?: string;
}

interface IProps {
  label: string;
  register: UseFormRegister<IFormValues>;
  placeholder: string;
}
const InputText: FC<IProps> = ({ label, register, placeholder }: IProps) => {
  return (
    <>
      <label>
        {label}
        <input
          placeholder={placeholder}
          {...register('secondName', {
            required: true,
          })}
        />
      </label>
    </>
  );
};

export default InputText;
