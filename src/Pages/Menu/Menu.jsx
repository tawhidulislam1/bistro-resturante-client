import { Helmet } from "react-helmet-async";
import Cover from "../../Componentes/Cover/Cover";
import imageBg from "../../assets/menu/banner3.jpg"
import MenuCategory from "./Components/MenuCategory";
import SectionTitle from "../../Componentes/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
const Menu = () => {
    const [menu] = useMenu()
    const Offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                image={imageBg}
                title="Our Menu"
            ></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Todays Offer"></SectionTitle>
            <MenuCategory items={Offered} ></MenuCategory>

        </div>
    );
};

export default Menu;