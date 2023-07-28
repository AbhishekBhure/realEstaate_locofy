import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainerr from "../components/area-containerr";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discoveryour perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full  flex flex-col items-center justify-start">
        <Header hamburger={false} logoOpacity="0.3" />
        <Hero />
        <AreaContainerr />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
