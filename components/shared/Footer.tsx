import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full flex flex-col justify-center items-center h-20 p-10">
      <p>Designed By Matias Villar</p>
      {/* copyright and year */}
      <div className="flex justify-center items-center text-white-100 text-xs mt-5">
        <p>&copy; {currentYear}. All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
