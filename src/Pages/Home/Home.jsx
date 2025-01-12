import Banner from "./Components/Banner";
import Category from "./Components/Category";
import Featured from "./Components/Featured";
import PopularMenu from "./Components/PopularMenu";
import Testimonial from "./Components/Testimonial";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;