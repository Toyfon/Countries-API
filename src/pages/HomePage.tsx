import React, {FC, useState} from 'react';
import {useNavigate} from 'react-router-dom'

import {Card} from '../components/Card/Card'
import {List} from "../components/List/List";
import {Controls} from "../components/Controls/Controls";
import {ResponseCountryType} from "../api/api";


export type ResponseCountryInfoType = {
    title: string,
    description: string
}
type PropsType = {
    countries: ResponseCountryType[]
}
export const HomePage: FC<PropsType> = ({countries}) => {

    const [filteredCountries, setFilteredCountries] = useState<ResponseCountryType[]>(countries)

    const navigate = useNavigate()

    const handleSearch = (search:string, region:string) => {
        let data = [...countries]

        if(region) {
            data = data.filter(c => c.region.includes(region))
        }
        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data)
    }


    const resultCountries = filteredCountries.length ? filteredCountries : countries


    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {resultCountries.map(c => {
                    const countryInfo = {
                        img: c.flags.png,
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
                              onClick={() => navigate(`/country/${c.name}`)}/>
                    )
                })}
            </List>
        </>
    )
}