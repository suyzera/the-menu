import React from "react";
import { MenuStyled } from "./MenuStyle.js";
const Menu = () => {
  return (
    <MenuStyled>
      <ul>
        <li>Copiar</li>
        <li>Recortar</li>
        <li>Colar</li>
      </ul>
    </MenuStyled>
  );
};

export default Menu;
