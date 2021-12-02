import styled from "@emotion/styled";

export const AboutUsRoot = styled.div`
  margin-top: 80px;
`;

export const SectionTitle = styled.h3`
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
`;

export const SectionDescription = styled.p`
  text-align: center;
  margin-bottom: 80px;
`;

export const Experience = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffffaa;
  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column-reverse;
  }
`;

export const ExperienceNumber = styled.div`
  position: relative;
`;

export const Number = styled.span`
  font-size: 200px;
`;

export const PlusSign = styled.span`
  position: absolute;
  top: 0;
  right: -50px;
  font-size: 100px;
`;

export const ExperienceText = styled.p`
  margin-left: 100px;
  font-weight: bold;
  font-size: 40px;
  @media ${({ theme }) => theme.breakpoints.md} {
    margin-left: 0;
    text-align: center;
  }
`;

// export const Proficiency = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// export const Header = styled.h3`
//   font-size: 60px;
//   margin-right: 100px;
// `;

export const Stacks = styled.div`
  margin: 60px 0 120px 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100px;
      opacity: 0.4;
    }
  }
  span {
    font-size: 25px;
    opacity: 0.4;
    text-align: center;
    padding: 10px 30px;
    min-width: 100px;
    margin: 10px;
    border-radius: 4px;
  }
`;

export const TestimonialCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`;
