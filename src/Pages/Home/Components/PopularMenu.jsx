
import SectionTitle from "../../../Componentes/SectionTitle/SectionTitle";
import Menu from "../../../Componentes/SectionTitle/Menu/Menu";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category === "popular");
    return (
        <div className="my-6">
            <SectionTitle
                subHeading="From The Menu"
                heading="Popular Menu"
            ></SectionTitle>
            <div className="grid gap-7 grid-cols-1 md:grid-cols-2  lg:grid-cols-2">
                {
                    popularMenu.map(item => <Menu key={item._id} item={item}></Menu>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;