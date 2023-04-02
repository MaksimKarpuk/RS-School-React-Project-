import { FC } from 'react';

interface IProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
const Input: FC<IProps> = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Input;
