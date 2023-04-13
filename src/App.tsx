/* eslint-disable import/no-import-module-exports */
/* eslint-disable no-alert */
import { FC, KeyboardEvent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './store/hooks/useTypedSelector';
import MainPage from './Components/Pages/MainPage/MainPage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import FormPage from './Components/Pages/FormPage/FormPage';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Header from './Components/Organisms/Header/Header';
import { setSearchValue } from './store/Persons';

import './App.scss';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const handleChange = async (e: KeyboardEvent<HTMLInputElement>) => {
    try {
      if (e.key === 'Enter') {
        dispatch(setSearchValue((e.target as HTMLInputElement).value));
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="app">
      <Header handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
  module.exports = handleChange;
};

export default App;
