import styled from "styled-components";

interface IContainerProps {
  width?: string
  height?: string
}

interface ILabelProps {
  isFocused: boolean,
}

export const Container = styled.div<IContainerProps>`
    position: relative;
    margin: 10px 0;
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    flex-grow: 1;
`;

export const Label = styled.label<ILabelProps>`
    position: absolute;
    top: ${({ isFocused }) => (isFocused ? '-0.625rem' : '50%')};
    left: ${({ isFocused }) => (isFocused ? '0px' : '12px')};
    font-size: ${({ isFocused }) => (isFocused ? '0.75rem' : '0.9375rem')};
    background-color: transparent;
    color: ${props => props.theme.colors.gray};
    padding: 0 4px;
    transform: translateY(-50%);
    transition: 0.2s ease all;
    pointer-events: none;
`;


export const Input = styled.input`
    width: 100%;
    padding: 16px 12px 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.gray};
    }
`;

export const FileButtonWrapper = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const HiddenFileInput = styled.input`
    display: none;
`;

export const StyledButton = styled.button`
    padding: 8px 16px;
    background-color: #1A73E8;
    color: ${props => props.theme.colors.white};
    font-size: 14px;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-left: 86%;

    &:hover {
      background-color: #1558b8;
    }
`;