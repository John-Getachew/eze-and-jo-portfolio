import Link from "next/link";
import {
  LearnMoreButton,
  ServiceCardDescription,
  ServiceCardIconContainer,
  ServiceCardName,
  ServiceCardRoot,
} from "./style";

const ServiceCard = ({
  serviceName,
  serviceImage,
  serviceDescription,
  serviceLink,
  serviceImageBackground,
}) => {
  return (
    <ServiceCardRoot>
      <ServiceCardIconContainer background={serviceImageBackground}>
        {serviceImage}
      </ServiceCardIconContainer>
      <ServiceCardName>{serviceName}</ServiceCardName>
      <ServiceCardDescription>{serviceDescription}</ServiceCardDescription>
      {/*<Link href={serviceLink} passHref>*/}
      {/*  <LearnMoreButton>LEARN MORE</LearnMoreButton>*/}
      {/*</Link>*/}
    </ServiceCardRoot>
  );
};

export default ServiceCard;
