import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import ChangeLanguages from './ChangeLanguages';

const MyLinks = () => {
  return (
    <div className=" mx-3">
      <div className="container mx-auto h-[60px] border-b-2 border-textPrimary flex justify-center items-center gap-x-7">
        <FaLinkedin className="footer-icon" />
        <FaGithub className="footer-icon" />
        <MdOutlineEmail className="footer-icon" />
        <ChangeLanguages />
      </div>
    </div>
  );
};

export default MyLinks;
