import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  color: {
    white: '#fff',
    greyL1: '#9ba5a0',
    greyL2: '#eee',
    greyL3: '#ebebeb',
    greyL4: '#e8e8e8',
    greyL5: '#666',
    greyD1: '#383838',
    greyD2: '#868e96',
    cyanL1: '#56b6c2',
    whiteL1: '#F0F3F7',
    whiteL2: '#dfe2e5',
    whiteL3: '#f6f8fa'
  }
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
