import {IoMoon, IoMoonOutline} from 'react-icons/io5'
import {useEffect, useState} from 'react'

import {HeaderElement} from "./HeaderElement";
import {Container} from './Container'
import {Wrapper} from "./Wrapper";
import {Title} from "./Title";
import {ThemeSwitcher} from "./ThemeSwitcher";


export const Header = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <HeaderElement>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ThemeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size='14px'/>
                        ) : (
                            <IoMoon size='14px'/>
                        )}
                        {' '}
                        <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </HeaderElement>
    )
}