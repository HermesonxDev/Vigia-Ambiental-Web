import styled from "styled-components";

import form_bg from '../../assets/img/Form_background.png'

export const Container = styled.div`
    height: 100%;
    background-color: ${props => props.theme.colors.tertiary};
`;

export const Content = styled.div`
    width: 60%;
    height: 100%;
    background-image: url(${form_bg});
    background-repeat: no-repeat;
    background-position: center right;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 50px;
    margin-inline: auto;
`;

export const Form = styled.form`
    height: 50%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div p {
        font-size: 14px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 2px;
    }

    > div p a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Fields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Button = styled.button`
    height: 10%;
    border-radius: 5px;
    color: white;
    background-color: ${props => props.theme.colors.secondary};
    font-size: 25px;
    font-weight: bold;
    transition: .3s;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
`;