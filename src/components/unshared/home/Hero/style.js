import styled from "@emotion/styled";

export const HeroRoot = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
  position: relative;
  @media ${(props) => props.theme.breakpoints.xl} {
    margin-top: 100px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    flex-direction: column-reverse;
    margin-top: 0px;
  }
  /* border: 1px solid #fff; */
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 60px;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-weight: 600;
    font-size: 40px;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    font-weight: 600;
    font-size: 30px;
  }
`;

export const TypedServices = styled.h5`
  /* background-image: linear-gradient(270deg, #13adc7 0%, #945dd6 100%); */
  color: #d4f5ff;
  font-size: 30px;
  margin: 20px 0 30px 0;
`;

export const GetStartedButton = styled.button`
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border-radius: 6px;
  outline: none;
  border: none;
  padding: 2px;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 30px 10px 30px;
  cursor: pointer;
`;

export const LeftFlex = styled.div``;

export const RightFlex = styled.div``;
