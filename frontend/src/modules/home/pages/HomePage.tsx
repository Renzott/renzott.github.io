import HomeLayout from "../layouts/HomeLayout";
import Landing from "../components/Landing";
import Proyects from "../components/Proyects";
import DeveloperInfo from "../components/DeveloperInfo";
import ScrollMenu from "../../../shared/components/ScrollMenu";

const HomePage = () => {
  return (
    <HomeLayout>
      <ScrollMenu />
      <Landing id="landing"/>
      <DeveloperInfo id="about"/>
      <Proyects id="proyects"/>
    </HomeLayout>
  );
};

export default HomePage;
