import { Component } from 'react';

interface IProps {
  checkboxField: React.RefObject<HTMLInputElement>;
  checked: boolean;
}
class CheckboxRef extends Component<IProps> {
  render() {
    return (
      <label htmlFor="checkboxRef">
        <input type="checkbox" id="checkboxRef" ref={this.props.checkboxField} />
        Permition
      </label>
    );
  }
}
export default CheckboxRef;
