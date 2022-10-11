import { ThemeProps } from 'components/themes';
import React from 'react';
import styled from 'styled-components';

interface AppThemeProps {
  theme: ThemeProps;
}

interface Props {
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<HTMLDivElement>;
}

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid ${({ theme }: AppThemeProps) => theme.lightGray};
  margin: auto;
  display: flex;
  background-image: linear-gradient(
    to bottom, ${({ theme }: AppThemeProps) => theme.primaryColor},
    ${({ theme }: AppThemeProps) => theme.secondaryColor}
  );
`;

const Notch = styled.div<Props>`
  height: 21px;
  width: 21px;
  border: 1px solid ${({ theme }: AppThemeProps) => theme.lightGray};
  margin: 1px;
  background: ${({ theme }: AppThemeProps) => theme.whiteColor};
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${({ isActive }) => (isActive ? '26px' : '1px')});
`;

const Toggle: React.FC<Props> = ({ isActive, onClick }) => {
  return (
    <ToggleWrapper onClick={onClick}>
      <Notch isActive={isActive} onClick={onClick} />
    </ToggleWrapper>
  );
};

export { Toggle };
