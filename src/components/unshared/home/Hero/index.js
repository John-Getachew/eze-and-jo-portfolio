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
import Link from 'next/link';
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
          <Link href={"https://forms.gle/6ugAqbgGHu7cpMhR6"} passHref>
              <GetStartedButton>Get Started</GetStartedButton>
          </Link>
      </RightFlex>
    </HeroRoot>
  );
};

export default Hero;
