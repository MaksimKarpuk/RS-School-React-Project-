import { FC } from 'react';

interface IProps {
  radioField: React.MutableRefObject<HTMLInputElement | undefined>;
  label: string;
}

const RadioRef: FC<IProps> = (props) => {
  return (
    <>
      <input
        type="radio"
        id="radioRef"
        ref={props.radioField}
        name="radio"
        value={props.label}
        data-testid="radio"
      />
      <label htmlFor="radioRef">{props.label}</label>
    </>
  );
};

export default RadioRef;
