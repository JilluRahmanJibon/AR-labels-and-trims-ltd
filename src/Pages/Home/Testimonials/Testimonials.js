import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () =>
{

    const testimonialsData = [
        {
            name: "John Doe",
            feedback:
                "AR-Labels & Trims Ltd. provided excellent services and top-notch quality products.",
            position: "CEO, Fashion House",
            image: "https://via.placeholder.com/100",
        },
        {
            name: "Jane Smith",
            feedback:
                "The team at AR-Labels & Trims Ltd. is highly professional and efficient.",
            position: "Head of Operations, Garment Co.",
            image: "https://via.placeholder.com/100",
        },
        {
            name: "Michael Johnson",
            feedback:
                "Great experience with the team, timely delivery and excellent support!",
            position: "Manager, Apparel Inc.",
            image: "https://via.placeholder.com/100",
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <Slider {...settings}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Testimonials
