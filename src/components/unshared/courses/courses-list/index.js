import {
  Course,
  CourseDescription,
  CourseImage,
  CoursesListContainer,
  CoursesListRoot,
  CoursesText,
  RightArrow,
} from "./style";

const CoursesList = () => {
  const courses = [
    {
      name: "Front-End Basics",
      image: "../assets/images/front-end.jpg",
      description:
        "Here you will learn the basics of html, css and javascript. This is a comprehensive course for beginners that want to persue a career in front-end development.",
    },
    {
      name: "React Js for beginners",
      image: "../assets/images/react-course-image.jpg",
      description:
        "Want to learn the basics of react js, well here is a good start. Start one of the best react js course you will ever find",
    },
    {
      name: "Node Js basics",
      image: "../assets/images/nodejs-course-image.jpeg",
      description:
        "Here you will learn the basics of html, css and javascript. This is a comprehensive course for beginners that want to persue a career in front-end development.",
    },
    {
      name: "Basics of SQL",
      image: "../assets/images/sql-course-image.jpg",
      description:
        "Here you will learn the basics of html, css and javascript. This is a comprehensive course for beginners that want to persue a career in front-end development.",
    },
  ];
  return (
    <CoursesListRoot>
      <CoursesText>Courses</CoursesText>
      <CoursesListContainer>
        {courses.map((course) => (
          <Course key={course.name} className="course">
            <CourseDescription>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <button>
                GO TO COURSE <RightArrow />
              </button>
            </CourseDescription>
            <CourseImage imageSrc={course.image} />
          </Course>
        ))}
      </CoursesListContainer>
    </CoursesListRoot>
  );
};

export default CoursesList;
