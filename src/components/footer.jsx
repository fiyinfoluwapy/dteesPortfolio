import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Brand & Mission */}
                <motion.div variants={fadeIn} initial="hidden" animate="visible">
                    <h2 className="text-2xl font-bold font-chakra">Dteez</h2>
                    <p className="text-gray-300 mt-2 font-lobster font-extrabold">Serving delight in every bite!</p>
                </motion.div>

                {/* Quick Links */}
                <motion.div variants={fadeIn} initial="hidden" animate="visible">
                    <h3 className="text-lg font-semibold mb-3 font-oleo">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-gray-400 font-chakra hover:text-white">Home</Link></li>
                        <li><Link to="/cake-gallery" className="text-gray-400 font-chakra hover:text-white">Cakes</Link></li>
                        <li><Link to="/grills-gallery" className="text-gray-400 font-chakra hover:text-white">Grills & Chops</Link></li>
                        <li><Link to="/food-gallery" className="text-gray-400 font-chakra hover:text-white">Foods</Link></li>
                    </ul>
                </motion.div>

                {/* Social Media & Contact */}
                <motion.div variants={fadeIn} initial="hidden" animate="visible">
                    <h3 className="text-lg font-semibold mb-3 font-oleo">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                        <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                    </div>
                    <p className="text-gray-400 mt-4">Email: contact@dteez.com</p>
                </motion.div>

                {/* Contact Form */}
                <motion.div variants={fadeIn} initial="hidden" animate="visible">
                    <h3 className="text-lg font-semibold mb-3 font-oleo">Contact Us</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-orange-500" />
                        <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-orange-500" />
                        <textarea placeholder="Your Message" className="w-full p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-orange-500" rows="3"></textarea>
                        <motion.button whileHover={{ scale: 1.05 }} className="w-full py-2 bg-orange-500 text-white font-semibold font-chakra rounded-lg shadow-md hover:bg-orange-600 transition-all">
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </footer>
    );
}
