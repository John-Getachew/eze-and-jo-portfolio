import AboutUs from "../components/unshared/home/AboutUs";
import Hero from "../components/unshared/home/Hero";
import Services from "../components/unshared/home/Services";
import Course from "../components/unshared/home/Services/course";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
        <Course />
      <AboutUs />
    </>
  );
};

export default Home;
