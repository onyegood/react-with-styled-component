import styled from 'styled-components';
import { COLOR_VARIANT, getColor } from 'lib';
import { getSize, ITEM_SIZE } from 'lib';
import { ThemeProps } from 'components/themes';

interface Props {
  color?: COLOR_VARIANT;
  size?: ITEM_SIZE;
  rounded?: boolean;
}

interface AppThemeProps {
  theme: ThemeProps
}

const Button = styled.button<Props>`
  color: ${({ theme }: AppThemeProps) => theme.whiteColor};
  background: ${({ color = 'primary', theme }) => getColor(color, theme)};
  ${({ size }) => getSize(size)};
  border-radius:  ${({ rounded }) => rounded ? '50px' : ''};
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  cursor: pointer;
  margin-top: 10px;
  &:disabled {
    background: ${({ theme }: AppThemeProps) => theme.lightGray};
    color: ${({ theme }: AppThemeProps) => theme.grayColor};
  }
`;

export { Button };
