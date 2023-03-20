import { Component, ReactNode } from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/Main';
import AboutPage from './Components/Pages/About';
import FormPage from './Components/Pages/Form';
import ErrorPage from './Components/Pages/Error';
import Header from './Components/Organisms/Header';
import './App.scss';

interface IState {
  searchValue: string;
}
class App extends Component<unknown, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
    localStorage.setItem('searchValue', JSON.stringify(this.state.searchValue));
  };

  render(): ReactNode {
    return (
      <>
        <Header searchValue={this.state.searchValue} handleChange={this.handleChange} />
        <Container>
          <Routes>
            <Route path="/" element={<MainPage searchValue={this.state.searchValue} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </>
    );
  }
}

export default App;
