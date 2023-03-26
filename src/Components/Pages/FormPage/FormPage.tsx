import { Component, ReactNode } from 'react';
import Form from '../../Organisms/Form/Form';

class FormPage extends Component {
  render(): ReactNode {
    return (
      <div data-testid="form-page">
        <Form />
      </div>
    );
  }
}

export default FormPage;
