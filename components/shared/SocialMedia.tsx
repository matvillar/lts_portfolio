import Link from 'next/link';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
const SocialMedia = () => {
  return (
    <div className="fixed bottom-0 flex w-full z-30">
      <div className="hidden ml-10 md:flex md:flex-col gap-5">
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

        <div className="border-l-4 border-white h-24 ml-3"></div>
      </div>
    </div>
  );
};

export default SocialMedia;
