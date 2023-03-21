import { Component } from 'react';

interface IProps {
  value?: string;
}
class Date extends Component<IProps, unknown> {
  render() {
    return (
      <div>
        <input
          type="date"
          // placeholder={this.props.placeholder}
          value={this.props.value}
          // onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Date;
