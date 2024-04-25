import News from "../../components/News/News.jsx";
import Category from "../../components/Category/Category";
import Presentation from "../../components/Presentation/Presentation";
import Ckarusel from "../../components/Ckarusel/Ckarusel.jsx";
import Order from "../../components/order/Order.jsx";

const HomePage = () => {
  return (
    <div>
        <Ckarusel/>
      <Category />
      <Presentation />
      <News />
        <Order/>
    </div>
  );
};

export default HomePage;
