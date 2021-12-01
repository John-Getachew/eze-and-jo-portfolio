import styled from "@emotion/styled";

export const CourseRoot = styled.div`
  display: flex;
  align-items: center;
`;

export const CoursesListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  flex-basis: 50%;
  @media ${(props) => props.theme.breakpoints.lg} {
    /* grid-template-columns: 2fr 1fr; */
  }
  @media ${(props) => props.theme.breakpoints.md} {
    /* grid-template-columns: 1fr; */
  }
`;

export const CourseTextContainer = styled.div`
  flex-basis: 50%;
  text-align: center;
  margin-top: -10px;
`;

export const CourseSectionTitle = styled.h2`
  font-size: 50px;
  margin-bottom: 30px;
`;

export const CourseSectionDescription = styled.p`
  padding: 0 40px;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 40px;
`;

export const MoreButton = styled.button`
  border: 2px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  padding: 8px 24px;
  font-size: 16px;
  font-weight: bold;
`;
