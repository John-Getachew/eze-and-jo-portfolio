import {
  Description,
  SectionHeader,
  ServiceRoot,
  ServicesCardsContainer,
} from "./style";
import { FaChalkboardTeacher, FaTools, FaUserFriends } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import ServiceCard from "./service-card";

const Services = () => {
  const services = [
    {
      serviceName: "Web/App development",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <FaTools size={50} color={"#ffffff"} />,
      serviceLink: "/",
      serviceImageBackground: "#bf0043",
    },
    {
      serviceName: "Live Classes",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <FaChalkboardTeacher size={50} color={"#ffffff"} />,
      serviceLink: "/",
      serviceImageBackground: "#00bfb2",
    },
    {
      serviceName: "Recruitment",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <FaUserFriends size={50} color={"#ffffff"} />,
      serviceLink: "/",
      serviceImageBackground: "#bd00c7",
    },
    {
      serviceName: "Job Assistance",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <IoMdHelp size={50} color={"#ffffff"} />,
      serviceLink: "/",
      serviceImageBackground: "#bd7800",
    },
  ];

  return (
    <ServiceRoot>
      <SectionHeader>What do we provide?</SectionHeader>
      <Description>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. <br /> It is a
        long established fact.
      </Description>
      <ServicesCardsContainer>
        {services.map((service) => (
          <ServiceCard
            key={service.serviceName}
            serviceImage={service.serviceImage}
            serviceName={service.serviceName}
            serviceDescription={service.serviceDescription}
            serviceLink={service.serviceLink}
            serviceImageBackground={service.serviceImageBackground}
          />
        ))}
      </ServicesCardsContainer>
    </ServiceRoot>
  );
};

export default Services;
