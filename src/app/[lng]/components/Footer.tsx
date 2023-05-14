import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="w-screen h-[60px] flex justify-center items-center gap-x-7">
      <FaLinkedin className="footer-icon" />
      <FaGithub className="footer-icon" />
      <MdOutlineEmail className="footer-icon" />
    </footer>
  );
};

export default Footer;
