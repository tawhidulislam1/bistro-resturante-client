import SectionTitle from "../../../Componentes/SectionTitle/SectionTitle";
import featuerd from "../../../assets/home/featured.jpg"
import "./home.css";

const Featured = () => {
    return (
        <div className="feature-image text-white my-7">
            <SectionTitle
                heading="Featured Items"
                subHeading="Check It Out"
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-600 opacity-80 items-center px-36 pb-20 pt-12">
                <div>
                    <img className="w-full" src={featuerd} alt="" />
                </div>
                <div className="md:ml-5">
                    <h2>March 20 2024</h2>
                    <h1>When I get some Item?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit impedit voluptatem, provident distinctio consectetur unde eaque modi quam error quod obcaecati ad eveniet cum explicabo, doloribus accusamus earum amet necessitatibus placeat cupiditate! Magnam accusamus nulla id ab temporibus odio officia tempora aut blanditiis. Nihil.</p>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;