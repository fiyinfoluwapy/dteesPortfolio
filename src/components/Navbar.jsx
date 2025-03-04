import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { motion } from "framer-motion";
import { fadeIn, slideInFromTop, slideInFromRight, staggerChildren } from "../utils/animations";
import menuOpenIcon from "../assets/menu-open.png";
import menuCloseIcon from "../assets/menu-close.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate for manual routing

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Food Gallery", link: "/food-gallery" },
    { name: "Cake Gallery", link: "/cake-gallery" },
    { name: "Grills & Chops", link: "/grills-gallery" },
    { name: "Contact", link: "/contact" }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Handle mobile navigation properly
  const handleMobileNav = (link) => {
    setIsOpen(false); // Close menu
    // setTimeout(() => navigate(link), 100); // Navigate after closing animation
  };

  return (
    <motion.nav
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full bg-babyPink shadow-lg p-4 flex justify-between items-center z-50"
    >
      {/* Logo */}
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold font-chakra"
      >
        Dteez
      </motion.h1>

      {/* Desktop Navigation */}
      <motion.ul
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="hidden md:flex gap-8"
      >
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            variants={fadeIn}
            className="hover:text-orange-500 hover:font-chakra transition duration-300"
          >
            <Link to={link.link} className="cursor-pointer">{link.name}</Link> 
          </motion.li>
        ))}
      </motion.ul>

      {/* Mobile Menu Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="md:hidden z-50"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <img
          src={isOpen ? menuCloseIcon : menuOpenIcon}
          alt={isOpen ? "Close menu" : "Open menu"}
          className="w-8 transition-transform duration-300"
        />
      </motion.button>

      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? "bg-black bg-opacity-10" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <motion.div
        variants={slideInFromRight}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform md:hidden transition-all duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 mt-20 text-lg">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index} 
              variants={fadeIn} 
              className="cursor-pointer hover:text-orange-500 hover:font-chakra transition duration-300 active:scale-95"
            >
              <button
                onClick={() => handleMobileNav(link.link)} // Use manual navigation
                className="text-lg"
              >
                {link.name}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
