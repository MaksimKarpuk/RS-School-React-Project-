/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component } from 'react';

interface IProps {
  placeholder: string;
  inputField: React.RefObject<HTMLInputElement>;
}
class InputRef extends Component<IProps> {
  render() {
    return (
      <>
        <label htmlFor="name" />
        Enter a name
        <input
          type="text"
          id="name"
          placeholder={this.props.placeholder}
          ref={this.props.inputField}
        />
      </>
    );
  }
}
export default InputRef;
