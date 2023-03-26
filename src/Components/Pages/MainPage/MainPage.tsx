import { Component, ReactNode } from 'react';
import Cards from '../../Molecules/Cards/Cards';

interface IProps {
  searchValue: string;
}
class MainPage extends Component<IProps, unknown> {
  render(): ReactNode {
    return (
      <div data-testid="main-page">
        <Cards searchValue={this.props.searchValue} />
      </div>
    );
  }
}

export default MainPage;
