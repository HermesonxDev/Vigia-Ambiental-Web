import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Form = styled.form`
    margin-top: 60px;
    margin-left: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Fields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Button = styled.button`
    width: 15%;
    height: 30px;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 5px;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondary};
    transition: .3s;
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    &:hover {
        background: ${props => props.theme.colors.primary};
    }
`;