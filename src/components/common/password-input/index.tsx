import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'components/common';
import { ThemeProps } from 'components/themes';

interface Props {}

interface AppThemeProps {
  theme: ThemeProps
}

const PasswordInputWrapper = styled.div`
  display: flex;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid ${({ theme }: AppThemeProps) => theme.lightGray};
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: ${({ theme }: AppThemeProps) => theme.whiteColor};
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: ${({ theme }: AppThemeProps) => theme.blackColor};
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const PasswordInput: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </ToggleButton>
      </PasswordInputWrapper>
      {/* showPassword ? props.value : '' */}
    </>
  );
};
export { PasswordInput };
