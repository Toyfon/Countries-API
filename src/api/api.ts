import axios from "axios";

const instance = axios.create({
    baseURL: 'https://restcountries.com/v2/'
})


export const api = {
    getAllCountries() {
       return instance.get<ResponseCountryType[]>('all?fields=name,capital,flags,population,region')
    },
    searchByCountry (name:string) {
        return instance.get<ResponseCountryType>(`name/${name}`)
    },
    searchByCode (codes:Array<string>) {
        return instance.get(`alpha?codes=${codes.join(',')}`)
    }

}


//types
export type ResponseCountryType = {
    "name": string,
    "topLevelDomain": string[],
    "alpha2Code": string,
    "alpha3Code": string,
    "callingCodes": string[],
    "capital": string,
    "altSpellings": string[],
    "subregion": string,
    "region": string,
    "population": number,
    "latlng": number[],
    "demonym": string,
    "area": number,
    "timezones": string[],
    "borders": string[],
    "nativeName": string,
    "numericCode": string,
    "flags": {
        svg: string
        png: string
    },
    "currencies": CurrencyType[],
    "languages": LanguageType[],
    "translations": TranslationsType,
    "flag": string,
    "regionalBlocs": RegionalBlockType[],
    "cioc": string,
    "independent": boolean
}

type CurrencyType = {
    "code": string,
    "name": string,
    "symbol": string
}
type LanguageType = {
    "iso639_1": string,
    "iso639_2": string,
    "name": string,
    "nativeName": string
}
type TranslationsType = {
    "br": string,
    "pt": string,
    "nl": string,
    "hr": string,
    "fa": string,
    "de": string,
    "es": string,
    "fr": string,
    "ja": string,
    "it": string,
    "hu": string
}
type RegionalBlockType = {
    "acronym": string,
    "name": string
}