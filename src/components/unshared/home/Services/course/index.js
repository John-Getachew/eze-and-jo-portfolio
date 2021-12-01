import {
  CourseRoot,
  CourseSectionDescription,
  CourseSectionTitle,
  CoursesListContainer,
  CourseTextContainer,
  MoreButton,
} from "./style";
import CourseCard from "./course-card";
const coursesData = [
  {
    serviceName: "Html Basics",
    serviceDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    courseImage: "./assets/images/html.png",
    serviceLink: "/",
  },
  {
    serviceName: "Node js basics",
    serviceDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    courseImage: "./assets/images/node-js.png",
    serviceLink: "/",
  },
  {
    serviceName: "Intermediate React js",
    serviceDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    courseImage: "./assets/images/react.jpg",
    serviceLink: "/",
  },
  {
    serviceName: "Nest JS Beginners",
    serviceDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    courseImage: "./assets/images/nestjs.png",
    serviceLink: "/",
  },
];

const Course = () => {
  return (
    <CourseRoot>
      <CoursesListContainer>
        {coursesData.map((courseData) => (
          <CourseCard
            key={courseData.serviceName}
            serviceName={courseData.serviceName}
            serviceDescription={courseData.serviceDescription}
            courseImage={courseData.courseImage}
            serviceLink={courseData.serviceLink}
          />
        ))}
      </CoursesListContainer>
      <CourseTextContainer>
        <CourseSectionTitle>Live classes</CourseSectionTitle>
        <CourseSectionDescription>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </CourseSectionDescription>
        <MoreButton>Go to classes</MoreButton>
      </CourseTextContainer>
    </CourseRoot>
  );
};

export default Course;
