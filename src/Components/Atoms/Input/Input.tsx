import { FC, KeyboardEvent } from 'react';

interface IProps {
  handleChange: (e: KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
}
const Input: FC<IProps> = (props) => {
  return (
    <div>
      <input type="text" placeholder={props.placeholder} onKeyDown={props.handleChange} />
    </div>
  );
};

export default Input;
