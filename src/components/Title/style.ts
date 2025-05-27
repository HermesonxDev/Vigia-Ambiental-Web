import styled from "styled-components";

interface IContainerProps {
    afterWidth?: string,
}

export const Container = styled.h1<IContainerProps>`
    font-size: 2.5rem;
    font-weight: bold;

    &::after {
        content: '';
        display: block;
        width: ${({ afterWidth }) => afterWidth || "60px"};
        border-bottom: 10px solid ${props => props.theme.colors.primary};
    }
`;