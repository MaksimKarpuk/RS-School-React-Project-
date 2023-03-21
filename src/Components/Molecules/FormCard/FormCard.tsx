import { Component } from 'react';

interface IProps {
  inputValue: string | undefined;
  inputDate: string | undefined;
  checkboxValue: boolean | undefined;
}
class FormCard extends Component<IProps> {
  render() {
    return (
      <div>
        <div>{this.props.inputValue}</div>
        <div>{this.props.inputDate}</div>
        <div>
          {!this.props.checkboxValue || this.props.checkboxValue === null
            ? ''
            : 'Permition was got'}
        </div>
      </div>
    );
  }
}
export default FormCard;
