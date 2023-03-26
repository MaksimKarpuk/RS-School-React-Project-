/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component } from 'react';

interface IProps {
  dateField: React.RefObject<HTMLInputElement>;
}
class Date extends Component<IProps, unknown> {
  render() {
    return (
      <>
        <label htmlFor="dateFile"> Сhoose your date of birth</label>
        <input type="date" id="dateFile" ref={this.props.dateField} data-testid="date" />
      </>
    );
  }
}
export default Date;
