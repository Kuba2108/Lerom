import News from "../../components/News/News.jsx";
import Category from "../../components/Category/Category";
import Presentation from "../../components/Presentation/Presentation";

const HomePage = () => {
  return (
    <div>
      <Category />
      <Presentation />
      <News />
    </div>
  );
};

export default HomePage;
