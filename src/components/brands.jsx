import { motion } from "framer-motion";
import { fadeInZoomIn, slideInFromBottom, staggerChildren } from "../utils/animations";
import dteezCakes from "../assets/dteez-cakes.jpg";
import dteezFood from "../assets/dteez-food.jpg";
import dteezGrills from "../assets/dteez-grills.jpg";
import { useNavigate } from "react-router-dom";

const brands = [
    {
        name: "Dteez Cakes",
        image: dteezCakes,
        description: "Custom cakes for every occasion.",
        link: "/cake-gallery"
    },
    {
        name: "Dteez Foods",
        image: dteezFood,
        description: "Delicious home-cooked meals, made fresh daily.",
        link: "/food-gallery"
    },
    {
        name: "Dteez Chops & Grills",
        image: dteezGrills,
        description: "Tasty grilled delicacies and small chops for your events.",
        link: "/grills-gallery"
    }
];

export default function MeetOurBrands() {
    const navigate = useNavigate();

    return (
        <section id="meet-our-brands" className="py-16 bg-white text-center">
            <motion.h2
                className="text-4xl font-oleo text-gray-900 mb-8"
                variants={slideInFromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Meet Our Brands
            </motion.h2>

            <motion.div
                className="grid gap-8 px-4 md:grid-cols-3"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {brands.map((brand, index) => (
                    <motion.div
                        key={index}
                        className="rounded-lg shadow-lg overflow-hidden cursor-pointer group bg-white p-4"
                        variants={fadeInZoomIn}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => navigate(brand.link)}
                    >
                        <div className="text-center mb-4">
                            <h3 className="text-xl font-oleo text-gray-900">{brand.name}</h3>
                            <p className="text-gray-700 text-lg font-medium  font-cormorant mt-2">{brand.description}</p>
                        </div>
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="bg-tan font-oleo text-gray-800 px-4 py-2 rounded-lg font-semibold shadow-md">
                                Explore {brand.name}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
