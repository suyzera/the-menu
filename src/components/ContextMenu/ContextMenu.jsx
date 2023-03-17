import React, { useState } from "react";
import { MenuContextContainer } from "./ContextMenuStyle";
import { Menu } from "./../Menu/Menu";

const ContextMenu = () => {
  const [contextMenuOpened, setContextMenuOpened] = useState(false);

  const handleContextMenuClick = (e) => {
    setContextMenuOpened(!!e);
    e.preventDefault();
  };
  return (
    <>
      <MenuContextContainer
        data-testid="context-menu"
        className="contextMenuWrapper"
        onContextMenu={(e) => handleContextMenuClick(e)}
      ></MenuContextContainer>
      {contextMenuOpened && <Menu></Menu>}
    </>
  );
};

export default ContextMenu;
