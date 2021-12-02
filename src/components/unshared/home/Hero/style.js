import styled from "@emotion/styled";

export const HeroRoot = styled.div`
  position: relative;
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.xl} {
    margin-top: 100px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    flex-direction: column-reverse;
    margin-top: 0px;
    padding: 5rem 1rem;
  }
  /* border: 1px solid #fff; */
`;

export const SectionTitle = styled.h2`
  font-weight: bolder;
  font-size: 4.5rem;
  background: linear-gradient(
    121.57deg,
    #13adc7 18.77%,
    #945dd6 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.5rem;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 3.12rem;
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
  max-width: 10rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-self: center;
    margin-top: 5rem;
  }
`;

export const LeftFlex = styled.div``;

export const RightFlex = styled.div`
  display: flex;flex-direction: column;
  justify-content: center;
  margin: auto;
  position: relative;
  top: -8rem;
`;
