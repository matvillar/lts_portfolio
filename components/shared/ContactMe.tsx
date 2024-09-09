import React from 'react';
import Image from 'next/image';
import { ChatForm } from './ChatForm';
import SectionTitle from './SectionTitle';

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <section
      className="max-w-7xl items-center h-[80vh] lg:h-[60vh] justify-center pb-20 pt-36 text-white-200 lg:mb-20"
      id="contact"
    >
      <div className="md:max-w-2xl lg:max-w-[70vw] mx-auto justify-center">
        <SectionTitle sectionNum="04." sectionName="Contact Me" />

        <div className="flex w-full rounded-lg chat-bg">
          <div className="flex p-10">
            <Image
              className="bg-white"
              src="/chat.svg"
              alt="Chat"
              width={500}
              height={500}
            />
            <div className="border-4">
              <ChatForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
