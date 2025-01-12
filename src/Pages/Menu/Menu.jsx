import { Helmet } from "react-helmet-async";
import Cover from "../../Componentes/Cover/Cover";
import imageBg from "../../assets/menu/banner3.jpg"
import PopularMenu from "../Home/Components/PopularMenu";
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                image={imageBg}
                title="Our Menu"
            ></Cover>
            <PopularMenu></PopularMenu>

        </div>
    );
};

export default Menu;