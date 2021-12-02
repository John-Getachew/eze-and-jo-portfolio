import styled from "@emotion/styled";
import { SiWeblate } from "react-icons/si";

export const FooterRoot = styled.div`
  display: flex;
  border-top: 3px solid #ffffff;
  padding-top: 20px;
  margin: 80px 0 20px 0;
  justify-content: space-between;
  align-items: flex-end;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
  }
  h3 {
    margin-bottom: 18px;
  }
  span {
    margin-bottom: 10px;
    opacity: 0.6;
    font-size: 15px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const LogoIconS = styled(SiWeblate)`
  transform: rotate(180deg);
  font-size: 80px;
`;

export const LogoName = styled.p`
  margin: 0 0 20px 0;
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.6;
`;

export const SocialMedia = styled.div`
  * {
    opacity: 1;
    padding-right: 10px;
    font-size: 25px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OtherNavigations = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
