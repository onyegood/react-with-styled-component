import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  HeaderWrapper,
  Menu,
  MobileMenuIcons,
} from 'components/common/header/style';
import { Toggle } from '../toggle';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const {id, setTheme} = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <MobileMenuIcons onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </MobileMenuIcons>
      <Menu open={menuOpen}>
        <NavLink className={(l) => (l.isActive ? 'active' : '')} to="/home">
          Home
        </NavLink>
        <NavLink className={(l) => (l.isActive ? 'active' : '')} to="/login">
          Login
        </NavLink>
        <Toggle
          isActive={id === 'dark'}
          onClick={setTheme}
        />
      </Menu>
    </HeaderWrapper>
  );
};

export { Header };
