import styled from 'styled-components';
import { ThemeProps } from 'components/themes';

interface AppThemeProps {
  theme: ThemeProps
}

const Input = styled.input`
  padding: 4px 8px;
  border: 1px solid ${({ theme }: AppThemeProps) => theme.lightGray};
  border-radius: 4px;
  font-size: 1em;
  font-family: 'Open Sans';
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
`;

export { Input }
