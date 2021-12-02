import styled from "@emotion/styled";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export const TestimonialCardRoot = styled.div`
  border: 2px solid #ffffff55;
  border-radius: 8px;
  text-align: center;
  color: #ffffff;
  margin: 40px;
  padding: 40px 30px;
  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 20px;
    padding: 40px 15px;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 10px;
    padding: 40px 15px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 10px 0;
  }
  transition: all 0.3s;
  &:hover {
    border: 2px solid #ffffff;
    p {
      opacity: 1;
    }
  }
  p {
    margin: 100px 0;
    line-height: 1.8;
    opacity: 0.6;
    position: relative;
  }
  h3 {
    opacity: 0.9;
  }
  h4 {
    margin-top: 10px;
    font-size: 14px;
    opacity: 0.9;
  }
`;

export const ProfileImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
`;

export const LeftQuote = styled(ImQuotesLeft)`
  font-size: 50px;
  margin-right: 10px;
  position: absolute;
  top: -50px;
  left: 0;
  color: #ff004caa;
`;

export const RightQuote = styled(ImQuotesRight)`
  font-size: 50px;
  margin-left: 10px;
  position: absolute;
  right: 0;
  bottom: -50px;
  color: #ff004caa;
`;
