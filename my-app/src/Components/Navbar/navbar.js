import React from "react";
import * as S from './navbar.styles';

const Header = () => (
  <nav>
  <S.Navbar>
      <S.NavbarItem>Item 1</S.NavbarItem>
      <S.NavbarItem>Item 2</S.NavbarItem>
      <S.NavbarItem>Item 3</S.NavbarItem>
  </S.Navbar>
  </nav>
);

export default Header;
