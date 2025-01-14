import { useEffect, useState } from "react";
import SectionTitle from "../../../Componentes/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css"; // Ensure Rating styles are imported

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className="my-6">
            <SectionTitle
                heading="Testimonial"
                subHeading="Check Our Reviews"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map((item) => (
                    <SwiperSlide key={item._id}>
                        <div className="text-center px-10">
                            <Rating
                                style={{ maxWidth: 180, margin: "0 auto" }}
                                value={item.rating}
                                readOnly
                            />
                            <p className="mt-4 text-gray-700 italic">{item.details}</p>
                            <h3 className="mt-2 font-semibold text-lg text-gray-900">{item.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonial;
