import styled from "@emotion/styled";

export const LayoutRootS = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 30px 50px 0 50px;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 30px 20px 0 20px;
  }
  overflow-x: hidden;
  /* border: 4px solid #fff; */
`;
