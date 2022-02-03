import React, {useEffect, useState} from 'react';
import 'normalize.css';
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Main} from './main/Main'

import { HomePage } from './pages/HomePage'
import { NotFound } from './pages/NotFound'
import { Details } from './pages/Details'
import {api, ResponseCountryType} from "./api/api";





function App() {
    const [countries, setCountries] = useState<Array<ResponseCountryType>>([])


    useEffect(() => {
        if (!countries.length) {
            api.getAllCountries().then(
                ({data}) => setCountries(data)
            )
        }
    }, [])

  return (
    <>
      <Header/>
        <Main>
            <Routes>
                <Route path={'/'} element={<HomePage countries={countries} />}/>
                <Route path={'/country/:name'} element={<Details/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Main>
    </>
  );
}

export default App;
