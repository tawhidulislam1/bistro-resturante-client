/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
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
            {title && img && <> <Link to={`/order/${title}`}>
                <button className="btn btn-wide btn-outline border-0 border-y-4 my-4">View More</button>
            </Link></>}

        </div>
    );
};

export default MenuCategory;