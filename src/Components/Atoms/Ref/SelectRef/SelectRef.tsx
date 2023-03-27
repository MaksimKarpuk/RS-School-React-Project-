import { FC } from 'react';

interface IProps {
  selectField: React.MutableRefObject<HTMLSelectElement | undefined>;
}

const SelectRef: FC<IProps> = (props) => {
  return (
    <label htmlFor="selectRef">
      Choose location
      <select name="selectRef" id="selectRef" ref={props.selectField} data-testid="select">
        <option value="">Select one</option>
        <option value="Minsk">Minsk</option>
        <option value="Brest">Brest</option>
        <option value="Gomel">Gomel</option>
        <option value="Grodno">Grodno</option>
        <option value="Vitebsk">Vitebsk</option>
        <option value="Mogilev">Mogilev</option>
      </select>
    </label>
  );
};

export default SelectRef;
