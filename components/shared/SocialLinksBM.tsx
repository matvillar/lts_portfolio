import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import Link from 'next/link';
type Props = {};

const SocialLinksBM = (props: Props) => {
  return (
    <div className="flex justify-center gap-3 items-center p-5">
      <Link href="https://www.linkedin.com/">
        <AiOutlineLinkedin
          className="text-white-200 font-semibold hover:text-purple-100 hover:scale-105 transition-all cursor-pointer"
          size={28}
        />
      </Link>
      <Link href="https://github.com/matvillar?">
        <FiGithub
          className="text-white-200 font-semibold hover:text-purple-100 hover:scale-105 transition-all cursor-pointer"
          size={28}
        />
      </Link>
      <Link href="https://www.facebook.com/">
        <CiFacebook
          className="text-white-200 font-semibold hover:text-purple-100 hover:scale-105 transition-all cursor-pointer"
          size={28}
        />
      </Link>
    </div>
  );
};

export default SocialLinksBM;
