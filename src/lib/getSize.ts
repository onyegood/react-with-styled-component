import {css} from 'styled-components';

export type ITEM_SIZE = 'large' | 'small' | 'medium';
export const getSize = (size?: ITEM_SIZE) => {
  switch (size) {
    case 'large':
      return css`
        font-weight: bold;
        padding: 12px;
        font-size: 1.2em;
      `;
    case 'small':
      return css`
        font-weight: 300;
        padding: 8px;
        font-size: 1em;
    `
    default:
      return css`
        font-weight: 500;
        padding: 10px;
        font-size: 1.2em;
    `;
  }
}
