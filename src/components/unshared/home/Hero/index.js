import { Typewriter } from "react-simple-typewriter";
import Particles from "./Particles";
import {
  GetStartedButton,
  SectionTitle,
  TypedServices,
  LeftFlex,
  HeroRoot,
  RightFlex,
} from "./style";
const Hero = () => {
  return (
    <HeroRoot>
      <LeftFlex>
        <SectionTitle>
          We Solve <br />
          Your Techonology Problems.
        </SectionTitle>
        <TypedServices>
          <Typewriter
            words={[
              "WEB DEVELOPMENT",
              "APP DEVELOPMENT",
              "COURSES",
              "ASSISTANCE",
            ]}
            cursor
            cursorStyle={"|"}
            loop={0}
          />
        </TypedServices>
        <GetStartedButton>Get Started</GetStartedButton>
      </LeftFlex>
      <RightFlex>
        <Particles />
      </RightFlex>
    </HeroRoot>
  );
};

export default Hero;
