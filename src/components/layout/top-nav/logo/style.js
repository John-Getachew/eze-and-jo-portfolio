import styled from "@emotion/styled";
import { SiWeblate } from "react-icons/si";

export const LogoRootS = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.main};
`;
export const LogoIconS = styled(SiWeblate)`
  transform: rotate(180deg);
  margin-right: 4px;
  font-size: 20px;
`;

export const LogoNameS = styled.h3`
  font-weight: 300;
`;
