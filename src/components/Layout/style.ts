import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100vh;
    min-width: 315px;
    grid-template-columns: 200px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: "AS MH" "AS CT";
`;

export const MainHeader = styled.div`
    grid-area: MH;
    background: ${props => props.theme.colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    > h3 {
        color: ${props => props.theme.colors.white};
    }
`;

export const Aside = styled.div `
    grid-area: AS;
    background: ${props => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > h1 {
        color: ${props => props.theme.colors.white};
        padding-left: 10px;
    }

    > div {
        display: flex;
        flex-direction: column;
    }

    > p {
        color: ${props => props.theme.colors.white};
        margin: 0 auto;
    }
`;

export const Link = styled.a`
    padding: 10px;
    color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    transition: .3s;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
        text-decoration: none;
    }
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

export const Content = styled.div `
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.tertiary};
    padding: 15px;
    height: calc(100vh - 70px);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0.5px;
        height: 0.5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-corner {
        background-color: none;
    }
`;