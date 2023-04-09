/* eslint-disable import/no-import-module-exports */
/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import { useState, FC, KeyboardEvent } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import MainPage from './Components/Pages/MainPage/MainPage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import FormPage from './Components/Pages/FormPage/FormPage';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Header from './Components/Organisms/Header/Header';
import { IMovies } from './interfaces';
import './App.scss';

const App: FC = () => {
  const [movies, setMovies] = useState<IMovies>({ state: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = async (e: KeyboardEvent<HTMLInputElement>) => {
    try {
      if (e.key === 'Enter') {
        const url = `https://swapi.dev/api/people/?search=${
          (e.target as HTMLInputElement).value.length ? (e.target as HTMLInputElement).value : null
        }`;
        setLoading(true);
        const response = await axios.get(url);
        const persons = response.data;
        setMovies({ state: persons.results });
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="app">
      <Header handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<MainPage movies={movies.state} loading={loading} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
  module.exports = handleChange;
};

export default App;
