import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import the mail icon

const FooterApp = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <br />
        <br />
        <br />
        <nav className="mb-6 flex flex-col items-center py-6">
          <div className="flex items-center justify-center gap-6 text-xl mb-4">
            <a href="#" className="hover:text-pink-300">Home</a>
            <a href="#About" className="hover:text-pink-300">About</a>
            <a href="#Technologies" className="hover:text-pink-300">Skills</a>
            <a href="#Projects" className="hover:text-pink-300">Projects</a>
            <a href="#Contact" className="hover:text-pink-300">Contact</a>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl mb-4">
            <a href="https://www.linkedin.com/in/avinash-e-35a0b92a1/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/CodeBy-Avinash" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
              <FaGithub />
            </a>
            <a href="mailto:eavinash077@gmail.com" className="hover:text-pink-300"> {/* Add mailto link */}
              <FaEnvelope />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default FooterApp;
