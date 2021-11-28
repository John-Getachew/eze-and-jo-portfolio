import styled from "@emotion/styled";

export const CardRoot = styled.div`
  padding: 20px;
  display: grid;
  transition: 0.5s;
  cursor: pointer;
  position: relative;
  border: 2px solid #ffffff;
  border-radius: 4px;
  align-content: space-between;
  &:nth-child(1) {
    grid-column: span 2;
    grid-row: span 1;
  }
  &:nth-child(2) {
    grid-column: span 1;
    grid-row: span 2;
  }
  &:nth-child(4) {
    grid-column: span 1;
    grid-row: span 2;
  }
  &:nth-child(5) {
    grid-column: span 3;
    grid-row: span 1;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: unset !important;
    grid-row: unset !important;
  }
`;

export const TopFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ServiceName = styled.h4`
  font-size: 40px;
`;

export const ServiceDescription = styled.p`
  font-size: 15px;
  color: #fffc;
  line-height: 1.6;
`;

export const ServiceLink = styled.a``;
