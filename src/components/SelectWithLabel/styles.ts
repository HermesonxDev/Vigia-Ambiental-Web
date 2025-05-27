import styled from 'styled-components';

interface ContainerProps {
    width?: string;
}

interface ILabelProps {
  isFocused: boolean,
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    margin: 10px 0;
    width: ${({ width }) => width || '100%'};
    flex-grow: 1;
`;

export const Label = styled.label<ILabelProps>`
    position: absolute;
    top: ${({ isFocused }) => (isFocused ? '-0.625rem' : '50%')};
    left: ${({ isFocused }) => (isFocused ? '0px' : '12px')};
    font-size: ${({ isFocused }) => (isFocused ? '0.75rem' : '1rem')};
    color: ${props => props.theme.colors.gray};
    background-color: transparent;
    padding: 0 4px;
    transform: translateY(-50%);
    transition: 0.2s ease all;
    pointer-events: none;
`;

export const Select = styled.select`
    width: 100%;
    padding: 16px 12px 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: ${props => props.theme.colors.white};
    appearance: none;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.black};
    }

    option {
      font-size: 16px;
    }
`;
