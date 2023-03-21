import { Component } from 'react';

interface IProps {
  selectField: React.RefObject<HTMLSelectElement>;
}
class SelectRef extends Component<IProps> {
  render() {
    return (
      <label htmlFor="selectRef">
        Выберите город
        <select
          name="selectRef"
          id="selectRef"
          defaultValue="Take one"
          ref={this.props.selectField}
        >
          <option value="Take one" disabled>
            Take one
          </option>
          <option value="Minsk">Minsk</option>
          <option value="Brest">Brest</option>
          <option value="Gomel">Gomel</option>
          <option value="Grodno">Grodno</option>
          <option value="Vitebsk">Vitebsk</option>
          <option value="Mogilev">Mogilev</option>
        </select>
      </label>
    );
  }
}
export default SelectRef;
