import React from 'react';
import Image from 'next/image';
import { ChatForm } from './ChatForm';
import SectionTitle from './SectionTitle';
import { MdEmail } from 'react-icons/md';
import DialogModalContact from './DialogModalContact';

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <section
      className="max-w-7xl items-center h-[80vh] lg:h-[60vh] justify-center pb-20 pt-36 text-white-200 lg:mb-20"
      id="contact"
    >
      <div className="flex flex-col gap-8 md:max-w-2xl lg:max-w-[70vw] mx-auto items-center justify-center">
        <p className="text-purple-100 text-md text-center">04. What Now?</p>
        <h3 className="text-5xl text-white font-bold tracking-wider">
          Get in Touch
        </h3>
        <p className="text-lg text-gray-300 text-center max-w-[55vw]">
          I am currently seeking new opportunities as a Software Engineer. If
          you're looking for someone passionate about building scalable web
          applications and innovative solutions, feel free to reach out! I'd
          love to contribute to a forward-thinking team and bring value through
          my technical skills and dedication.
        </p>

        <DialogModalContact />
      </div>
    </section>
  );
};

export default ContactMe;
