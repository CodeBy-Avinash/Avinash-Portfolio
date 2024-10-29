import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Wrap the h1 with an anchor tag for the home link */}
        <a href="#" className="text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
          Avinash Portfolio
        </a>
      </div>
      <div className="flex items-center justify-center gap-6 text-xl">
        <a href="#Hero" className="hover:text-pink-300">Home</a>
        <a href="#About" className="hover:text-pink-300">About</a>
        <a href="#Technologies" className="hover:text-pink-300">Skills</a>
        <a href="#Projects" className="hover:text-pink-300">Projects</a>
        <a href="#Contact" className="hover:text-pink-300">Contact</a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/avinash-e-35a0b92a1/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/CodeBy-Avinash" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </nav>
  );
}

export default Navbar;
