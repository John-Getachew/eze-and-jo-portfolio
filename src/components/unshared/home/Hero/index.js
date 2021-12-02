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

      <RightFlex>
          <SectionTitle>
              We Solve <br />
              Your Technology Problems.
          </SectionTitle>
          <TypedServices>
              <Typewriter
                  words={[
                      "WEB DEVELOPMENT",
                      "APP DEVELOPMENT",
                      "COURSES & TRAINING",
                      "ASSISTANCE & MENTORING",
                  ]}
                  cursor
                  cursorStyle={"|"}
                  loop={0}
              />
          </TypedServices>
          <Particles />
          <GetStartedButton>Get Started</GetStartedButton>
      </RightFlex>
    </HeroRoot>
  );
};

export default Hero;
