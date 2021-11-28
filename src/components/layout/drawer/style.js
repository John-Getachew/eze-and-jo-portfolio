import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
export const HamburgerMenuRootS = styled.div`
  display: none;
  z-index: ${({ theme }) => theme.zIndex.drawer};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const MenuSecondaryBackgroundColor = styled.div`
  z-index: ${({ theme }) => theme.zIndex.drawerSecondaryBackground};
  background-color: ${({ theme }) => theme.palette.drawer.secondary};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const MenuLayer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.drawer.main};
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const cameraPan = keyframes`
  0% {
  background-position : 0% 0%;
  }
  25% {
    background-position : 40% 10%;
  }
  50% {
    background-position : 0% 10%;
  }
  75% {
    background-position : 10% 40%;
  }
  100% {
    background-position : 0% 0%;
  }

`;

export const MenuCityBackground = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-repeat: no-repeat;
  background-size: cover;
  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
  animation: ${cameraPan} 30s infinite;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Nav = styled.div`
  display: block;
`;

export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const MenuListItem = styled.li`
  list-style: none;
  font-size: 6rem;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: 700px;
  height: 135px;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4rem;
    height: 80px;
  }
`;

export const LinkAnchor = styled.a`
  position: absolute;
  color: ${({ theme }) => `${theme.palette.black.main}bb`};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => `${theme.palette.black.main}`};
  }
`;

export const Info = styled.div`
  color: ${({ theme }) => theme.palette.white.main};
  width: 300px;
  h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  p {
    margin: 0 auto;
    font-size: 0.8rem;
  }
`;

export const Locations = styled.div`
  position: absolute;
  bottom: -80px;
  color: white;
  margin-top: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  span {
    &:first-child {
      margin-left: 64px;
    }
    font-weight: 400;
    cursor: pointer;
    margin: 0 32px;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.palette.black.main};
      padding: 8px 24px;
      border-radius: 4px;
    }
  }
`;
