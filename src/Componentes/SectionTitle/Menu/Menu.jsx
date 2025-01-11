

const Menu = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="flex space-x-4 ">
            <img className="w-24" style={{ borderRadius: "0 200px 200px 200px" }} src={image} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default Menu;