import styled from 'styled-components';
import { ThemeProps } from 'components/themes';

interface MenuProps {
  open: boolean;
}

interface AppThemeProps {
  theme: ThemeProps
}

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.primaryColor},
    ${({ theme }) => theme.secondaryColor}
  );
  border-bottom: 3px solid ${({ theme }: AppThemeProps) => theme.secondaryColor};
`;

const Menu = styled.nav<MenuProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${({ theme }: AppThemeProps) => theme.secondaryColor};
  background: ${({ theme }: AppThemeProps) => theme.whiteColor};
  a {
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    text-decoration: none;
    color: ${({ theme }: AppThemeProps) => theme.blackColor};
  }
  .active {
    font-weight: bold;
  }
  @media (min-width: 768px) {
    display: flex;
    background: none;
    top: 0;
    left: initial;
    right: initial;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
`;

const MobileMenuIcons = styled.div`
  width: 2%;
  min-width: 2%;
  padding: 5px;
  margin: auto 0 auto auto;
  cursor: pointer;
  > div {
    height: 3px;
    background: ${({ theme }: AppThemeProps) => theme.blackColor};
    margin: 5px 0;
    width: 100px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export { HeaderWrapper, Menu, MobileMenuIcons };
