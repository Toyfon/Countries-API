import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { IoArrowBack } from 'react-icons/io5'
import { api, ResponseCountryType } from "../api/api";
import { Button } from "../components/Button/Button";
import { Info } from "../components/Info/Info";

export const Details = () => {
    const { name } = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState<ResponseCountryType | null>(null)


    console.log(country)
    useEffect(() => {
        if(name) {
            api.searchByCountry(name).then(
                ({data}) => setCountry(data[0])
            )
        }
    }, [name])

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack/> Back
            </Button>
            {country &&
            <Info {...country}/> }
        </div>
    )
}