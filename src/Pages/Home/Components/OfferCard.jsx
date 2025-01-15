
import useMenu from '../../../Hooks/useMenu';
import ItemCard from '../../../Componentes/ItemCard/ItemCard';
import SectionTitle from '../../../Componentes/SectionTitle/SectionTitle';

const OfferCard = () => {
    const [menu] = useMenu();
    const offers = menu.filter(item => item.category === "offered");
    return (
        <section>
            <SectionTitle
                heading="Offer Food"
                subHeading="Check Our Food"
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    offers.map(item => <ItemCard key={item._id} item={item}></ItemCard>)

                }
            </div>
        </section>
    );
};

export default OfferCard;