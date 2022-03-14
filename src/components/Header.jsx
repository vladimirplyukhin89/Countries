import styled from "styled-components";
import { useState, useEffect } from "react";
import { Container } from "./Container";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const HeaderEl = styled.header` 
    box-shadow: var(--shadow);
    background-color: (--colors-ui-base);
`;

const Wrapper = styled.div``;

const Title = styled.a.attrs({
    href: '/',
})``;

const ModeSwitcher = styled.div``;

export const Header = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        <IoMoonOutline /> Light Theme
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};