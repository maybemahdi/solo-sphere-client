import Carousel from "../Components/Carousel";
import Loader from "../Components/Loader";
import TabCategories from "../Components/TabCategories";
import useAuth from "../Hooks/useAuth";

const Home = () => {
  const { loading } = useAuth();
  if (loading) return <Loader />;
  return (
    <div>
      <Carousel />
      <TabCategories />
    </div>
  );
};

export default Home;
