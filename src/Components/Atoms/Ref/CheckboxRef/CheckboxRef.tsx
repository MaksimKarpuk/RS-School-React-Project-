/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component } from 'react';

interface IProps {
  checkboxField: React.RefObject<HTMLInputElement>;
}
class CheckboxRef extends Component<IProps> {
  render() {
    return (
      <>
        <input type="checkbox" id="checkboxRef" ref={this.props.checkboxField} />
        <label htmlFor="checkboxRef">I consent to my personal data</label>
      </>
    );
  }
}
export default CheckboxRef;
