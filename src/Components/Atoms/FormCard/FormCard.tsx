import { Component } from 'react';

interface IProps {
  inputValue: string | undefined;
}
class FormCard extends Component<IProps> {
  render() {
    return <div>{this.props.inputValue}</div>;
  }
}
export default FormCard;
