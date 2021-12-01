import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  CardRoot,
  CourseCardTextContainer,
  ServiceDescription,
  CourseImage,
  ServiceLink,
  ServiceName,
} from "./style";

const CourseCard = ({
  serviceName,
  serviceDescription,
  courseImage,
  serviceLink,
}) => {
  const cardRef = useRef(null);
  const handleCardHover = () => {
    gsap.to(cardRef.current, {
      rotationX: 15,
      rotationY: -15,
    });
  };

  const handleCardLeave = () => {
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
    });
  };

  return (
    <CardRoot
      ref={cardRef}
      onMouseOver={handleCardHover}
      onMouseOut={handleCardLeave}
    >
      <CourseImage src={courseImage} alt={"service"} />
      <CourseCardTextContainer>
        <ServiceName>{serviceName}</ServiceName>
        <ServiceDescription>{serviceDescription}</ServiceDescription>
        <Link href={serviceLink} passHref>
          <ServiceLink>Read more</ServiceLink>
        </Link>
      </CourseCardTextContainer>
    </CardRoot>
  );
};

export default CourseCard;
