import React, {useState,useEffect} from 'react';
import 'normalize.css';

import {api, ResponseCountryType} from "./api/api";
import { Header } from "./components/Header/Header";
import { Main } from './main/Main'
import { Controls } from "./components/Controls/Controls";
import { Card } from './components/Card/Card'
import {List} from "./components/List/List";


export type ResponseCountryInfoType ={
    title: string,
    description:string
}

function App() {
    const [countries, setCountries] = useState<Array<ResponseCountryType>>([])

    console.log(countries)
    useEffect(() => {
        api.getAllCountries().then(
            ({data}) => setCountries(data)
        )
    }, [])


  return (
    <>
      <Header/>
        <Main>
            <Controls/>
            <List>
                {countries.map( c => {
                    const countryInfo = {
                        img:c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: c.region
                            },
                            {
                                title: 'Capital',
                                description: c.capital
                            },
                        ],
                    };

                    return (
                        <Card key={c.name}
                              img={countryInfo.img}
                              name={countryInfo.name}
                              info={countryInfo.info}
                              onClick={() => {}}/>
                    )
                })}
            </List>
        </Main>
    </>
  );
}

export default App;
