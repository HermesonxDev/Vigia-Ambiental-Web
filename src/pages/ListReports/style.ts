import styled, { type DefaultTheme } from "styled-components";

interface IGridHeaderRowProps {
  gridCols: string;
  background: keyof DefaultTheme['colors'];
}

interface IGridHeaderItemProps {
  padding?: string;
}

interface IGridBodyRowProps {
  gridCols: string;
  background: keyof DefaultTheme['colors'];
}

interface IGridBodyItemProps {
  padding?: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
`;

export const GridContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.375rem;
    overflow: hidden;
`;

export const GridHeaderRow = styled.div<IGridHeaderRowProps>`
    display: grid;
    grid-template-columns: ${({ gridCols }) => gridCols};
    background-color: ${({ theme, background }) => theme.colors[background] || background};
    color: white;
    font-weight: bold;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
`;

export const GridHeaderItem = styled.div<IGridHeaderItemProps>`
    text-align: center;
    padding: ${({ padding }) => padding || '0'};
`;

export const GridBodyRow = styled.div<IGridBodyRowProps>`
    display: grid;
    grid-template-columns: ${({ gridCols }) => gridCols};
    background-color: ${({ theme, background }) => theme.colors[background] || background};
`;

export const GridBodyItem = styled.div<IGridBodyItemProps>`
    padding: ${({ padding }) => padding || '0'};
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Button = styled.button`
    color: ${props => props.theme.colors.white};
    background-color: #FF0000;
    font-weight: bold;
    padding: 3px 10px;
    border-radius: 3px;
    transition: .3s;

    &:hover {
        background-color:rgb(187, 0, 0);
    }
`;