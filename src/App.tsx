/* eslint-disable no-underscore-dangle */
import { useState, FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage/MainPage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import FormPage from './Components/Pages/FormPage/FormPage';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Header from './Components/Organisms/Header/Header';
import './App.scss';

interface IMovie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}
interface IMovies {
  state: IMovie[];
}

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [movies, setMovies] = useState<IMovies>({ state: [] });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
  };
  const url = 'https://the-one-api.dev/v2/movie';
  useEffect(() => {
    fetch(url, {
      method: 'get',
      headers: new Headers({
        Authorization: 'Bearer eMgefz583gEwRGUTXbWl',
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setMovies({ state: result.docs });
      });
  }, []);

  return (
    <div className="app">
      <Header searchValue={searchValue} handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<MainPage searchValue={searchValue} movies={movies.state} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
