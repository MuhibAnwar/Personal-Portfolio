import { MdOutlineMenuBook, MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="container mx-auto pt-8 flex items-center justify-between">
      {/* Left side - "PERSONAL PORTFOLIO" title */}
      <div className="item-left flex-grow">
        <h2 className="text-xl font-bold">PERSONAL PORTFOLIO</h2>
      </div>

      {/* Right side - Desktop Menu (hidden on small screens) */}
      <ul className="gap-10 lg:gap-16 hidden md:flex">
        <li className="menuLink"><a href="#hero">Home</a></li>
        <li className="menuLink"><a href="#about">About</a></li>
        <li className="menuLink"><a href="#projects">Projects</a></li>
        <li className="menuLink"><a href="#skills">Skills</a></li>
        <li className="menuLink"><a href="#contact">Contact me</a></li>
      </ul>

      {/* Mobile Menu Toggle Button (visible on small screens) */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        {isMenuOpen ? <MdOutlineClose size={24} /> : <MdOutlineMenuBook size={24} />}
      </div>

      {/* Mobile Menu (visible when the menu is toggled) */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 bg-white shadow-lg p-5 mt-8 rounded-md md:hidden">
          <ul className="space-y-4">
            <li><a href="#hero" className="menuLink">Home</a></li>
            <li><a href="#about" className="menuLink">About</a></li>
            <li><a href="#projects" className="menuLink">Projects</a></li>
            <li><a href="#skills" className="menuLink">Skills</a></li>
            <li><a href="#contact" className="menuLink">Contact me</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
