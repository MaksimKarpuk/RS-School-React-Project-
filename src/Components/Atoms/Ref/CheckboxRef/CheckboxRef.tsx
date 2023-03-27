/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';

interface IProps {
  checkboxField: React.MutableRefObject<HTMLInputElement | undefined>;
}
const CheckboxRef: FC<IProps> = (props) => {
  return (
    <>
      <input type="checkbox" id="checkboxRef" ref={props.checkboxField} data-testid="checkbox" />
      <label htmlFor="checkboxRef">I consent to my personal data</label>
    </>
  );
};

export default CheckboxRef;
