import { Helmet } from "react-helmet-async";
import Cover from "../../Componentes/Cover/Cover";
import imageBg from "../../assets/menu/banner3.jpg"
import Pizza from "../../assets/menu/pizza-bg.jpg"
import Dessert from "../../assets/menu/dessert-bg.jpeg"
import Salad from "../../assets/menu/salad-bg.jpg"
import Saup from "../../assets/menu/soup-bg.jpg"

import MenuCategory from "./Components/MenuCategory";
import SectionTitle from "../../Componentes/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
const Menu = () => {
    const [menu] = useMenu()
    const Offered = menu.filter(item => item.category === "offered");
    const pizza = menu.filter(item => item.category === "pizza");
    const dessert = menu.filter(item => item.category === "dessert");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
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
            <MenuCategory items={Offered}></MenuCategory>
            <MenuCategory items={pizza} img={Pizza} title={"pizza"}></MenuCategory>
            <MenuCategory items={salad} img={Salad} title={"salad"} ></MenuCategory>
            <MenuCategory items={soup} img={Saup} title={"saup"} ></MenuCategory>
            <MenuCategory items={dessert} img={Dessert} title={"dessert"}  ></MenuCategory>

        </div>
    );
};

export default Menu;