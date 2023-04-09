/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';

interface IProps {
  placeholder: string;
  inputField: React.MutableRefObject<HTMLInputElement | undefined>;
}
const InputRef: FC<IProps> = (props) => {
  return (
    <>
      <label htmlFor="name" />
      Enter a name
      <input type="text" id="name" placeholder={props.placeholder} ref={props.inputField} />
    </>
  );
};

export default InputRef;
