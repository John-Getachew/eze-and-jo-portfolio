import { useState } from "react";
import Drawer from "./drawer";
import { LayoutRootS } from "./style";
import TopNav from "./top-nav";

const Layout = ({ children }) => {
  const [isDrawerToggleClicked, setDrawerToggleClicked] = useState({
    initial: false,
    clicked: null,
  });
  const handleToggleClick = () => {
    if (isDrawerToggleClicked.initial === false) {
      setDrawerToggleClicked({ initial: null, clicked: true });
    } else if (isDrawerToggleClicked.clicked === true) {
      setDrawerToggleClicked({ initial: null, clicked: false });
    } else if (isDrawerToggleClicked.clicked === false) {
      setDrawerToggleClicked({ initial: null, clicked: true });
    }
  };
  return (
    <LayoutRootS>
      <TopNav
        isDrawerToggleClicked={isDrawerToggleClicked}
        handleToggleClick={handleToggleClick}
      />
      <Drawer
        isDrawerToggleClicked={isDrawerToggleClicked}
        handleToggleClick={handleToggleClick}
      />
      {children}
    </LayoutRootS>
  );
};

export default Layout;
