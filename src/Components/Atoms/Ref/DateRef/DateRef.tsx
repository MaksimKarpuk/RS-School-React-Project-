/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';

interface IProps {
  dateField: React.MutableRefObject<HTMLInputElement | undefined>;
}
const Date: FC<IProps> = (props) => {
  return (
    <>
      <label htmlFor="dateFile"> Choose your date of birth</label>
      <input type="date" ref={props.dateField} id="dateFile" data-testid="date" />
    </>
  );
};

export default Date;
