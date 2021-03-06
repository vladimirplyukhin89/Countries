import styled from "styled-components";

import { IoSearchOutline } from "react-icons/io5";

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;


    border-radius: var(--radius); 
    box-shadow: var(--shadow);
    width: 60%;
    margin-bottom: 1rem;

    @media(max-width: 767px) {
        margin-bottom: 1rem;
        width: 280px;
       
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--colors-text);
    background-color: var(--colors-ui-base);
`;

export const Search = ({ search, setSearch }) => {

    const getValue = (e) => {
        let val = e.target.value;
        if (val.length > 12) {
            let res = val.replace(/ +/g, ' ').trimEnd();
            return setSearch(res);
        }

        return setSearch(val);
    };
    return (
        <InputContainer>
            <IoSearchOutline />
            <Input onChange={getValue} value={search} />
        </InputContainer>
    );
};