import { Component, ReactNode } from 'react';
import MainPage from './Components/Pages/Main';
import AboutPage from './Components/Pages/About';
import ErrorPage from './Components/Pages/Error';
import Header from './Components/Organisms/Header';
import './App.scss';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </>
    );
  }
}

export default App;
