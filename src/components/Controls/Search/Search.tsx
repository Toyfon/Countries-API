import {ChangeEvent, FC} from "react";

import {IoSearch} from 'react-icons/io5'
import {InputContainer} from "./InputContainer";
import {Input} from "./Input";


type PropsType = {
    search: string
    setSearch: (search: string) => void
}


export const Search: FC<PropsType> = ({ search, setSearch }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    return (
        <InputContainer>
            <IoSearch/>
            <Input onChange={onChangeHandler} value={search}/>
        </InputContainer>
    )
}