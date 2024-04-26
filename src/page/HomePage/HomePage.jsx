import News from "../../components/News/News.jsx";
import Category from "../../components/Category/Category";
import Presentation from "../../components/Presentation/Presentation";
import Slider from "../../components/Slider/Slider.jsx";


const HomePage = () => {
    return (
        <div>
            <Slider/>
            <Category/>
            <Presentation/>
            <News/>
        </div>
    );
};

export default HomePage;
