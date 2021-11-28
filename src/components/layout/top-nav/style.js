import styled from "@emotion/styled";

export const TopNavRootS = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RightFlexContainerS = styled.div`
  display: flex;
`;

export const ToggleButton = styled.div`
  z-index: ${({ theme }) => theme.zIndex.drawerToggle};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.white.main};
`;

export const ToggleButtonBurger = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${({ isDrawerToggleClicked }) =>
    isDrawerToggleClicked ? "transparent" : "#000A"};
  border-radius: 5px;
  box-shadow: ${({ isDrawerToggleClicked }) =>
    isDrawerToggleClicked ? "none" : "0 2px 5px rgb(255, 101, 47, 0.2)"};
  transition: all 0.5s ease-in-out;
  transform: ${({ isDrawerToggleClicked }) =>
    isDrawerToggleClicked ? "translateX(-50px)" : "none"};
  &::before {
    transform: ${({ isDrawerToggleClicked }) =>
      isDrawerToggleClicked
        ? "rotate(45deg) translate(35px, -35px)"
        : "translateY(-6px)"};
  }

  &::after {
    transform: ${({ isDrawerToggleClicked }) =>
      isDrawerToggleClicked
        ? "rotate(-45deg) translate(35px, 35px)"
        : "translateY(6px)"};
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #000a;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgb(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
`;
