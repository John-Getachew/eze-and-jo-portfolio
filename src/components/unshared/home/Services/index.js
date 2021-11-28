import { SectionHeader, ServiceRoot, ServicesCardsContainer } from "./style";
import { FaBeer } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      serviceName: "Courses",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <FaBeer />,
      serviceLink: "/",
    },
    {
      serviceName: "Assistance",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <FaBeer />,
      serviceLink: "/",
    },
    {
      serviceName: "Development",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <FaBeer />,
      serviceLink: "/",
    },
    {
      serviceName: "Hiring",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <FaBeer />,
      serviceLink: "/",
    },
    {
      serviceName: "Bootcamp",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <FaBeer />,
      serviceLink: "/",
    },
    {
      serviceName: "Bootcamp",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <FaBeer />,
      serviceLink: "/",
    },
    {
      serviceName: "Bootcamp",
      serviceDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      serviceImage: <FaBeer />,
      serviceLink: "/",
    },
  ];
  return (
    <ServiceRoot>
      <SectionHeader>What do we provide?</SectionHeader>
      <ServicesCardsContainer>
        {servicesData.map((serviceData) => (
          <ServiceCard
            key={serviceData.serviceName}
            serviceName={serviceData.serviceName}
            serviceDescription={serviceData.serviceDescription}
            serviceImage={serviceData.serviceImage}
            serviceLink={serviceData.serviceLink}
          />
        ))}
      </ServicesCardsContainer>
    </ServiceRoot>
  );
};

export default Services;
