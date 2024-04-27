import Header from "../../components/Header/Header.jsx";
import {Outlet} from "react-router";
import Footer from "../../components/Footer/Footer.jsx";
import {Container} from "../../components/container/Container.jsx";


export default function Layout() {
    return (
        <div>
            <Container>
                <>
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </>
            </Container>

        </div>
    )


}