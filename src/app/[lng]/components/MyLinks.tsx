import { EMAIL, LINK_GITHUB, LINK_LINKLEDIN } from '@/costant';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import ChangeLanguages from './ChangeLanguages';

const MyLinks = () => {
  return (
    <div className=" mx-3">
      <div className="container mx-auto h-[60px] border-b-2 border-textPrimary flex justify-center items-center gap-x-7">
        <Link href={LINK_LINKLEDIN} target="_blank">
          <FaLinkedin className="footer-icon" />
        </Link>
        <Link href={LINK_GITHUB} target="_blank">
          <FaGithub className="footer-icon" />
        </Link>
        <Link href={`mailto:${EMAIL}`}>
          <MdOutlineEmail className="footer-icon" />
        </Link>
        <ChangeLanguages />
      </div>
    </div>
  );
};

export default MyLinks;
