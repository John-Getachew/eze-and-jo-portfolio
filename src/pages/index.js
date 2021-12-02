import AboutUs from "../components/unshared/home/AboutUs";
import Hero from "../components/unshared/home/Hero";
import Services from "../components/unshared/home/Services";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>Masha - Your Tech solution</title>
      </Head>
      <Hero />
      <Services />
      <AboutUs />
    </>
  );
};

export default Home;
