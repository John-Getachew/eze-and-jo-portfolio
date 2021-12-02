import {
  AboutUsRoot,
  Experience,
  ExperienceNumber,
  ExperienceText,
  Header,
  Number,
  PlusSign,
  Proficiency,
  SectionDescription,
  SectionTitle,
  Stacks,
  TestimonialCardsContainer,
} from "./style";
import TestimonialCard from "./testimonialCard";
const AboutUs = () => {
  return (
    <AboutUsRoot>
      <SectionTitle>Who are we?</SectionTitle>
      <SectionDescription>
        Let us tell you a bit about ourselves
      </SectionDescription>
      <Experience>
        <ExperienceNumber>
          <Number>5</Number>
          <PlusSign>+</PlusSign>
        </ExperienceNumber>
        <ExperienceText>Years Of Experience</ExperienceText>
      </Experience>
      <Stacks>
        <div>
          <img src="./assets/images/react.svg" alt={"react-logo"} />
          <span>React</span>
        </div>
        <div>
          <img src="./assets/images/angular.svg" alt={"react-logo"} />
          <span>Angular</span>
        </div>
        <div>
          <img src="./assets/images/nodejs.svg" alt={"react-logo"} />
          <span>Node</span>
        </div>
        <div>
          <img src="./assets/images/postgresql.svg" alt={"react-logo"} />
          <span>SQL</span>
        </div>
        <div>
          <img src="./assets/images/mongodb.svg" alt={"react-logo"} />
          <span>Mongo DB</span>
        </div>
        <div>
          <img src="./assets/images/graphql.svg" alt={"react-logo"} />
          <span>GraphQL</span>
        </div>
      </Stacks>
      <SectionTitle>What prople say about us.</SectionTitle>
      <TestimonialCardsContainer>
        <TestimonialCard image={"./assets/images/person2.jpg"} />
        <TestimonialCard image={"./assets/images/person1.jpg"} />
        <TestimonialCard image={"./assets/images/person3.jpg"} />
      </TestimonialCardsContainer>
    </AboutUsRoot>
  );
};

export default AboutUs;
