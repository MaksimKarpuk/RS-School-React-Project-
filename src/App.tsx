import { Component, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage/MainPage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import FormPage from './Components/Pages/FormPage/FormPage';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Header from './Components/Organisms/Header/Header';
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
      <div className="app">
        <Header searchValue={this.state.searchValue} handleChange={this.handleChange} />
        <Routes>
          <Route path="/" element={<MainPage searchValue={this.state.searchValue} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
