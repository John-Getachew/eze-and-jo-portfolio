import styled from "@emotion/styled";
import { BsArrowRight } from "react-icons/bs";

export const CoursesListRoot = styled.div`
  margin-top: 180px;
`;

export const CoursesText = styled.h3`
  font-size: 40px;
  @media ${({ theme }) => theme.breakpoints.md} {
    text-align: center;
  }
`;

export const CoursesListContainer = styled.div`
  .course:nth-child(2n) {
    flex-direction: row-reverse;
  }
`;

export const Course = styled.div`
  display: flex;
  margin: 100px 0;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column-reverse !important;
    text-align: center;
  }
`;

export const CourseDescription = styled.div`
  padding: 0 50px;
  h3 {
    font-weight: lighter;
    font-size: 60px;
    margin-bottom: 50px;
  }
  p {
    line-height: 1.7;
    color: #ffffffcc;
  }
  button {
    margin-top: 30px;
    background-color: #ffffff;
    border: none;
    outline: none;
    padding: 12px 24px;
    font-weight: bold;
    color: #000000cc;
    display: flex;
    align-items: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    h3 {
      font-size: 30px;
    }
    p {
      max-width: 700px;
    }
  }
  /* flex-basis: 40%;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-basis: 0;
  } */
`;

export const RightArrow = styled(BsArrowRight)`
  margin-left: 12px;
  margin-top: -2px;
  font-size: 20px;
  font-weight: bold;
`;

export const CourseImage = styled.div`
  background-image: ${({ imageSrc }) => `url(${imageSrc})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  /* flex-basis: 60%; */
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    height: 200px;
  }
`;
