import styled from "@emotion/styled";

export const HeaderRoot = styled.div`
  margin-top: 100px;
`;

export const HeaderText = styled.h2`
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 40px;
    text-align: center;
  }
  font-size: 80px;
`;
