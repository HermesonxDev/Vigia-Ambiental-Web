import styled from "styled-components";

export const Container = styled.div<{ width?: string }>`
    position: relative;
    margin: 10px 0;
    width: ${({ width }) => width || '100%'};
    flex-grow: 1;
`;

export const Label = styled.label<{ isFocused: boolean }>`
    position: absolute;
    top: ${({ isFocused }) => (isFocused ? '-0.625rem' : '50%')};
    left: ${({ isFocused }) => (isFocused ? '0px' : '12px')};
    font-size: ${({ isFocused }) => (isFocused ? '0.75rem' : '0.9375rem')};
    color: #666;
    background-color: ${props => props.theme.colors.white};
    padding: 0 4px;
    transform: translateY(-50%);
    transition: 0.2s ease all;
    pointer-events: none;

    // MEDIA QUERY MONITOR (1920x1080)
    @media(max-width: 1920px) and (max-height: 1080px) {
      top: ${({ isFocused }) => (isFocused ? '-0.625rem' : '45%')};
    }

    // MONITOR (1440x900)
    @media(max-width: 1440px) and (max-height: 900px) {
      left: 5px;
      top: ${({ isFocused }) => (isFocused ? '-0.625rem' : '55%')};
      font-size: ${({ isFocused }) => (isFocused ? '0.75rem' : '0.9rem')};
    }

    // MONITOR (1366x768)
    @media(max-width: 1366px) and (max-height: 768px) {
        top: ${({ isFocused }) => (isFocused ? '-0.625rem' : '70%')};
        font-size: ${({ isFocused }) => (isFocused ? '0.75rem' : '0.8rem')};
    }

    // MONITOR (1280x1024)
    @media(max-width: 1280px) and (max-height: 1024px) {
      top: ${({ isFocused }) => (isFocused ? '-0.625rem' : '45%')};
      font-size: ${({ isFocused }) => (isFocused ? '0.75rem' : '0.9rem')};
    }
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

    // MONITOR (1920x1080)
    @media(max-width: 1920px) and (max-height: 1080px) {
      padding: 12px 16px;
      margin-left: 81%;
    }

    // MONITOR (1440x900)
    @media(max-width: 1440px) and (max-height: 900px) {
      padding: 8px 16px;
      margin-left: 78%;
    }

    // MONITOR (1366x768)
    @media(max-width: 1366px) and (max-height: 768px) {
      padding: 4px 10px;
      margin-left: 79%;
    }

    // MONITOR (1280x1024)
    @media(max-width: 1280px) and (max-height: 1024px) {
      padding: 0.625rem;
      margin-left: 77%;
    }
`;