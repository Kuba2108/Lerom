import News from "../../components/News/News.jsx";
import Category from "../../components/Category/Category";
import Presentation from "../../components/Presentation/Presentation";
import Slider from "../../components/Slider/Slider.jsx";
import Order from "../../components/order/Order.jsx";

const HomePage = () => {
  return (
    <div>
        <Slider/>
      <Category />
      <Presentation />
      <News />
        <Order/>
    </div>
  );

};

export default HomePage;
