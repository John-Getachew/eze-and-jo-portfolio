import styled from "@emotion/styled";

export const ServiceRoot = styled.div`
  margin-top: 120px;
  text-align: center;
`;

export const SectionHeader = styled.h3`
  font-size: 40px;
  margin-bottom: 50px;
`;

export const Description = styled.p`
  margin-bottom: 80px;
`;

export const ServicesCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 100px 40px;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;
