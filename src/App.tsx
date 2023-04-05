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
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: [];
  starships: string[];
  url: string;
  vehicles: string[];
  // _id: string;
  // name: string;
  // runtimeInMinutes: number;
  // budgetInMillions: number;
  // boxOfficeRevenueInMillions: number;
  // academyAwardNominations: number;
  // academyAwardWins: number;
  // rottenTomatoesScore: number;
}
interface IMovies {
  state: IMovie[];
}

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [movies, setMovies] = useState<IMovies>({ state: [] });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', JSON.stringify(searchValue));
    };
  }, [searchValue]);
  const url = 'https://swapi.dev/api/people';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setMovies({ state: result.results });
        console.log(result);
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
