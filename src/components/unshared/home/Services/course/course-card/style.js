import styled from "@emotion/styled";

export const CardRoot = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const CourseCardTextContainer = styled.div`
  color: #000000aa;
  background-color: #fff;
  padding: 10px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 6px 6px;
`;

export const CourseImage = styled.img`
  width: 100%;
  background-size: contain;
  border-radius: 6px 6px 0 0;
`;

export const ServiceName = styled.h4`
  font-size: 40px;
`;

export const ServiceDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
`;

export const ServiceLink = styled.a``;
