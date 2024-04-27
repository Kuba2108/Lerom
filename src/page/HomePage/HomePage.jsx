import News from "../../components/News/News.jsx";
import Category from "../../components/Category/Category";
import Presentation from "../../components/Presentation/Presentation";
import Slider from "../../components/Slider/Slider.jsx";
import Order from "../../components/order/Order.jsx";
import {Container} from "../../components/container/Container.jsx";
import {Outlet} from "react-router-dom";


const HomePage = () => {
    return (
        <div>
            <Container>
                <>
                    {/*<Slider/>*/}
                    {/*<Category/>*/}
                    {/*<Presentation/>*/}
                    {/*<News/>*/}
                </>
                <Outlet/>
            </Container>

        </div>
    );

};

export default HomePage
