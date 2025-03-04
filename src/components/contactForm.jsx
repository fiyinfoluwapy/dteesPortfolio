import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";

export default function ContactForm() {
    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-300">Name</label>
                    <input
                        type="text"
                        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label className="block text-gray-300">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label className="block text-gray-300">Message</label>
                    <textarea
                        rows="4"
                        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                    Send Message
                </motion.button>
            </form>
        </motion.div>
    );
}
