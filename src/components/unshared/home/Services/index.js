import {
  Description,
  SectionHeader,
  ServiceRoot,
  ServicesCardsContainer,
} from "./style";
import { FaChalkboardTeacher, FaTools, FaUserFriends } from "react-icons/fa";
import {IoIosCode, IoMdHelp} from "react-icons/io";
import ServiceCard from "./service-card";

const Services = () => {
  const services = [
    {
      serviceName: "Web/App development",
      serviceDescription:
        "Developing scalable web apps and mobile apps.",
      serviceImage: <FaTools size={50} color={"#ffffff"} />,
      serviceLink: "/",
      serviceImageBackground: "#bf0043",
    },
    {
      serviceName: "Live Classes",
      serviceDescription:
        "Not all classes are created equal. we're the best in",
      serviceImage: <FaChalkboardTeacher size={50} color={"#ffffff"} />,
      serviceLink: "/",
      serviceImageBackground: "#00bfb2",
    },
    {
      serviceName: "Recruitment",
      serviceDescription:
        "We exclusively focused on identifying and engaging top engineering and technical talent.",
      serviceImage: <FaUserFriends size={50} color={"#ffffff"} />,
      serviceLink: "/",
      serviceImageBackground: "#bd00c7",
    },
    {
      serviceName: "Job Assistance",
      serviceDescription:
        "We help you on your job to be successful and make you more productive.",
      serviceImage: <IoMdHelp size={50} color={"#ffffff"} />,
      serviceLink: "/",
      serviceImageBackground: "#bd7800",
    },
  ];

  return (
    <ServiceRoot>
      <SectionHeader>What do we provide?</SectionHeader>
      <Description>
        We work at the intersection of business and technology to help clients improve performance and create sustainable value for stakeholders.
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
