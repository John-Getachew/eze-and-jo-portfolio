import { createContext, useContext, useState } from "react";

const IS_DRAWER_TOGGLE_CLICKED = {
  initial: false,
  clicked: null,
};

export const DrawerContext = createContext(IS_DRAWER_TOGGLE_CLICKED);

const useDrawerContextValues = () => {
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
  return {
    isDrawerClosed: isDrawerToggleClicked,
    toggleDrawer: handleToggleClick,
  };
};

export default useDrawerContextValues;
