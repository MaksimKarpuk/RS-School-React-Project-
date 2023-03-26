import { Component } from 'react';

interface IProps {
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
class Input extends Component<IProps> {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Input;
