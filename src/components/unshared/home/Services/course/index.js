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
    serviceName: "Frontend Engineer",
    serviceDescription:
      "This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too. By the end, you’ll have the portfolio and interview skills you need to start your new career",
    courseImage: "./assets/images/html.png",
    serviceLink: "/",
  },
  {
    serviceName: "Backend Engineer",
    serviceDescription:
      "This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too. By the end, you’ll have in depth knowledge of how things works at the back and interview skills you need to start your new career as Backend engineer.",
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
      "Prepare for an in-depth guided course & walk-through of all the fundamentals of a NestJS application.",
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
          we are providing classes that are upto industry standard and give you all things you need to knockout interviews and land your dream job.
        </CourseSectionDescription>
        <MoreButton>Join Now</MoreButton>
      </CourseTextContainer>
    </CourseRoot>
  );
};

export default Course;
