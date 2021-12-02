import {
  Contact,
  FooterRoot,
  LogoIconS,
  LogoName,
  LogoSection,
  OtherNavigations,
  Services,
  SocialMedia,
} from "./style";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <FooterRoot>
      <LogoSection>
        <div>
          <LogoIconS />
          <LogoName>
            <b>Masha</b> takes care of all your modern technological needs.
          </LogoName>
        </div>
        <SocialMedia>
          <AiFillTwitterCircle style={{ color: "#1DA1F2" }} />
          <AiFillInstagram style={{ color: "#fb3958" }} />
          <AiFillFacebook style={{ color: "#4267B2" }} />
          <AiFillLinkedin style={{ color: "#1188bf" }} />
        </SocialMedia>
      </LogoSection>
      <Contact>
        <h3>Contact</h3>
        <span>masha@gmail.com</span>
        <span>masha2@gmail.com</span>
        <span>+251 987 67 89 10</span>
        <span>+251 987 67 89 10</span>
      </Contact>
      <Services>
        <h3>Services</h3>
        <span>Web/App development</span>
        <span>Live classes</span>
        <span>Recruitment</span>
        <span>Job assistance</span>
      </Services>
      <OtherNavigations>
        <h3>Company</h3>
        <span>About us</span>
        <span>Contact us</span>
        <span>Blog</span>
        <span>Home</span>
      </OtherNavigations>
    </FooterRoot>
  );
};

export default Footer;
