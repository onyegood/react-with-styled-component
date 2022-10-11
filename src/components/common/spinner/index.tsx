import { ThemeProps } from "components/themes";
import styled, {keyframes} from "styled-components";

interface AppThemeProps {
  theme: ThemeProps
}

const rotation  = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid ${({ theme }: AppThemeProps) => theme.spinnerBg};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;

export { Spinner };
