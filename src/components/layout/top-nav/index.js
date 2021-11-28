import { useRef } from "react";
import Logo from "./logo";
import {
  RightFlexContainerS,
  ToggleButton,
  ToggleButtonBurger,
  TopNavRootS,
} from "./style";

const TopNav = ({ isDrawerToggleClicked, handleToggleClick }) => {
  const toggleButtonRef = useRef(null);
  return (
    <TopNavRootS>
      <Logo />
      <RightFlexContainerS>
        <ToggleButton ref={toggleButtonRef} onClick={handleToggleClick}>
          <ToggleButtonBurger
            isDrawerToggleClicked={isDrawerToggleClicked.clicked}
          ></ToggleButtonBurger>
        </ToggleButton>
      </RightFlexContainerS>
    </TopNavRootS>
  );
};

export default TopNav;
