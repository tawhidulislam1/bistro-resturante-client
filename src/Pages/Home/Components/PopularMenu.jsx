import { useEffect, useState } from "react";
import SectionTitle from "../../../Componentes/SectionTitle/SectionTitle";
import Menu from "../../../Componentes/SectionTitle/Menu/Menu";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(item => item.category === "popular");
                setMenu(filter)
            })
    }, [])
    console.log(menu);
    return (
        <div className="my-6">
            <SectionTitle
                subHeading="From The Menu"
                heading="Popular Menu"
            ></SectionTitle>
            <div className="grid gap-7 grid-cols-1 md:grid-cols-2  lg:grid-cols-2">
                {
                    menu.map(item => <Menu key={item._id} item={item}></Menu>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;