import Link from "next/link";
import {
  CardRoot,
  ServiceDescription,
  ServiceLink,
  ServiceName,
  TopFlexContainer,
} from "./style";

const ServiceCard = ({
  serviceName,
  serviceDescription,
  serviceImage,
  serviceLink,
}) => {
  return (
    <CardRoot>
      <TopFlexContainer>
        <ServiceName>{serviceName}</ServiceName>
        {serviceImage}
      </TopFlexContainer>
      <ServiceDescription>{serviceDescription}</ServiceDescription>
      <Link href={serviceLink} passHref>
        <ServiceLink>Read more</ServiceLink>
      </Link>
    </CardRoot>
  );
};

export default ServiceCard;
