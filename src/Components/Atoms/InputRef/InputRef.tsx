import { Component } from 'react';

interface IProps {
  placeholder: string;
  inputField: React.RefObject<HTMLInputElement>;
}
class InputRef extends Component<IProps> {
  render() {
    return (
      <div>
        <input type="text" placeholder={this.props.placeholder} ref={this.props.inputField} />
      </div>
    );
  }
}
export default InputRef;
