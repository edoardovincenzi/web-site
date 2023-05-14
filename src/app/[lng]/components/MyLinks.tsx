import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import ChangeLanguages from './ChangeLanguages';

const Footer = () => {
  return (
    <footer className="w-[80vw] mx-auto h-[60px] border-b-2 border-textPrimary flex justify-center items-center gap-x-7">
      <FaLinkedin className="footer-icon" />
      <FaGithub className="footer-icon" />
      <MdOutlineEmail className="footer-icon" />
      <ChangeLanguages />
    </footer>
  );
};

export default Footer;
