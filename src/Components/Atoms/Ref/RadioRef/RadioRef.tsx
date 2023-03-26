import { Component } from 'react';

interface IProps {
  radioField: React.RefObject<HTMLInputElement>;
  label: string;
}
class RadioRef extends Component<IProps> {
  render() {
    return (
      <>
        <input
          type="radio"
          id="radioRef"
          ref={this.props.radioField}
          name="radio"
          value={this.props.label}
          data-testid="radio"
        />
        <label htmlFor="radioRef">{this.props.label}</label>
      </>
    );
  }
}
export default RadioRef;
