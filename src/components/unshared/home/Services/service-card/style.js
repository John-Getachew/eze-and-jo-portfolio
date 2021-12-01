import styled from "@emotion/styled";

export const ServiceCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  text-align: center;
`;

export const ServiceCardIconContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ServiceCardName = styled.h3`
  margin-top: 20px;
`;

export const ServiceCardDescription = styled.p`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.6;
  color: #ffffffdd;
`;

export const LearnMoreButton = styled.a`
  font-size: 14px;
  margin-top: 20px;
  font-weight: bold;
  color: #ffffffcc;
  border: 2px solid #ffffff;
  padding: 4px 10px;
`;
