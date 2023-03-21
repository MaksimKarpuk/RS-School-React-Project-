import { Component } from 'react';

interface IProps {
  inputValue: string | undefined;
  inputDate: string | undefined;
}
class FormCard extends Component<IProps> {
  render() {
    return (
      <div>
        <div>{this.props.inputValue}</div>
        <div>{this.props.inputDate}</div>
      </div>
    );
  }
}
export default FormCard;
