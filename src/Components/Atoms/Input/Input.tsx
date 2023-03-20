import { Component } from 'react';

interface IProps {
  searchValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
class Input extends Component<IProps> {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.props.searchValue}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Input;
