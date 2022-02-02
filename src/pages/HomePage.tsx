import React, {useState,useEffect} from 'react';

import { Card } from '../components/Card/Card'
import { List } from "../components/List/List";
import { Controls } from "../components/Controls/Controls";
import {api, ResponseCountryType} from "../api/api";


export type ResponseCountryInfoType ={
    title: string,
    description:string
}

export const HomePage = () => {

    const [countries, setCountries] = useState<Array<ResponseCountryType>>([])

    console.log(countries)
    useEffect(() => {
        api.getAllCountries().then(
            ({data}) => setCountries(data)
        )
    }, [])


    return(
     <>
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
     </>
    )
}