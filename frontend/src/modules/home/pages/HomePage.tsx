import HomeLayout from "../layouts/HomeLayout";
import HiddenLanding from "../components/HiddenLanding";
import StarsBackground from "../components/StarsBackground";
import Landing from "../components/Landing";
import Proyects from "../components/Proyects";

const HomePage = () => {
  return (
    <HomeLayout>
      <HiddenLanding />
      <StarsBackground />
      <Landing />
      <Proyects />
    </HomeLayout>
  );
};

export default HomePage;
