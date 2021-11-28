import styled from "@emotion/styled";

export const ServiceRoot = styled.div`
  margin-top: 120px;
`;

export const SectionHeader = styled.h3`
  font-size: 40px;
  margin-bottom: 50px;
`;

export const ServicesCardsContainer = styled.div`
  position: relative;
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(300px, auto);
  grid-auto-flow: dense;
  grid-gap: 10px;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-template-rows: repeat(auto, auto);
  }
`;
