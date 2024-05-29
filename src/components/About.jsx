import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <h1 className="text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">Avinash Portfolio</h1>
      </div>
      <div className="flex items-center justify-center gap-4 text-xl">
        <a href="#about" className="hover:text-pink-300">About</a>
        <a href="#projects" className="hover:text-pink-300">Projects</a>
        <a href="#contact" className="hover:text-pink-300">Contact</a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
