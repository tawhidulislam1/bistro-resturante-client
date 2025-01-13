/* eslint-disable react/prop-types */
import Cover from "../../../Componentes/Cover/Cover";
;
import Menu from "../../../Componentes/SectionTitle/Menu/Menu"

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && img && <Cover image={img} title={title} />}

            <div className="grid gap-7 grid-cols-1 md:grid-cols-2  lg:grid-cols-2">
                {
                    items.map(item => <Menu key={item._id} item={item}></Menu>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;