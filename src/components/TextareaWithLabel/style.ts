import styled from "styled-components";

interface IContainerProps {
  width?: string;
  height?: string;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  margin: 10px 0;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  flex-grow: 1;
`;

export const Label = styled.label<{ isFocused: boolean }>`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? '-0.625rem' : '1.25rem')};
  left: ${({ isFocused }) => (isFocused ? '0px' : '12px')};
  font-size: ${({ isFocused }) => (isFocused ? '0.75rem' : '0.9375rem')};
  background-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.tertiary : '#ffffff'};
  color: ${props => props.theme.colors.gray};
  padding: 0 4px;
  transition: 0.2s ease all;
  pointer-events: none;
  transform: translateY(-50%);
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 16px 12px 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.gray};
  }
`;
