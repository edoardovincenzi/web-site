import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="w-screen h-[60px] flex justify-center items-center gap-x-7">
      <FaLinkedin className="text-4xl" />
      <FaGithub className="text-4xl" />
      <MdOutlineEmail className="text-4xl" />
    </footer>
  );
};

export default Footer;
