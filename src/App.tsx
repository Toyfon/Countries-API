import React from 'react';
import 'normalize.css';
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Main} from './main/Main'
import { HomePage } from './pages/HomePage'
import { NotFound } from './pages/NotFound'
import { Details } from './pages/Details'





function App() {

  return (
    <>
      <Header/>
        <Main>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/country/:name'} element={<Details/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Main>
    </>
  );
}

export default App;
