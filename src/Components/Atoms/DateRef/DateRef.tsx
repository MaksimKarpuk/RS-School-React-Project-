import { Component } from 'react';

interface IProps {
  dateField: React.RefObject<HTMLInputElement>;
}
class Date extends Component<IProps, unknown> {
  render() {
    return (
      <div>
        <input type="date" ref={this.props.dateField} />
      </div>
    );
  }
}
export default Date;
