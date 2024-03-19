import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from "./layouts/SearchBookPage/SearchBooksPage";
import { Route, Routes } from 'react-router-dom';


export const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>

        <Route exact path='/'>
          <HomePage/>
        </Route>

        <Route path='/home'>
          <HomePage/>
        </Route>

        <Route path='/search'>
          <SearchBooksPage/>
        </Route>

        </Routes>

        <Footer />
      </div>
    </>
  );
}
