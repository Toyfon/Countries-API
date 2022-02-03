import {useState, useEffect, FC} from "react";
import styled from "styled-components";

import {Search} from './Search/Search'
import {CustomSelect} from './CustomSelect/CustomSelect'


const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Oceania', label: 'Oceania'},
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
type PropsType = {
    onSearch: (search: string, region: string) => void
}

export const Controls: FC<PropsType> = ({onSearch}) => {
    const [search, setSearch] = useState<string>('')
    const [region, setRegion] = useState<string>('')

    useEffect(() => {
        //@ts-ignore
        const regionValue = region?.value || ''
        onSearch(search,regionValue)
        //eslint-disable-next-line
    }, [search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect
                options={options}
                placeholder='Filter by region'
                isClearable
                isSearchable={false}
                value={region}
                //@ts-ignore
                onChange={setRegion}
            />
        </Wrapper>
    )
}