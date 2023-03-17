import React, { useState, useEffect } from "react";
import "./ContextMenu.scss";
const ContextMenu = () => {
  const [contextMenuOpened, setContextMenuOpened] = useState(false);

  const handleContextMenuClick = (e) => {
    setContextMenuOpened(!!e);
    e.preventDefault();
  };
  return (
    <>
      <div
        data-testid="context-menu"
        className="contextMenu"
        onContextMenu={(e) => handleContextMenuClick(e)}
      ></div>
      ( contextMenuOpened && ( <></>) )
    </>
  );
};

export default ContextMenu;
