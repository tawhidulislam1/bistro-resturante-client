import Banner from "./Components/Banner";
import Category from "./Components/Category";
import Featured from "./Components/Featured";
import PopularMenu from "./Components/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;