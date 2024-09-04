import { link } from 'fs';

export const dataProjects = [
  {
    title: 'RexRide App',
    projectName: 'RexRide',
    description:
      'A ride-sharing platform connecting students within the university community. Built with React, Next.js, and TailwindCSS for a seamless user experience.',
    srcImg: '/rexride.png',
    imgClassName:
      'rounded-lg object-cover w-full lg:max-w-[50%] transform transition duration-200 ease-in-out filter grayscale hover:grayscale-0 cursor-pointer hover:scale-105',
    defaultImg: '/images/default.jpg',
    id: 1,
    projectTools: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    isReverse: false,
    linkLiveView: 'https://rexride.vercel.app/',
    linkGithub: 'https://github.com/matvillar/rexride',
  },
  {
    title: 'React Ecommerce',
    projectName: 'React Ecommerce',
    description:
      'An e-commerce platform built with React, Redux, and NodeJS. Features include user authentication, product search, and cart functionality.',
    srcImg: '/react-eco.png',
    imgClassName:
      'rounded-lg object-cover w-full lg:max-w-[50%] transform transition duration-200 ease-in-out filter grayscale hover:grayscale-0 cursor-pointer hover:scale-105',
    id: 2,
    projectTools: ['React', 'Redux', 'NodeJS', 'MongoDB'],
    isReverse: true,
    linkLiveView: 'https://reactecommerce-6nwc.onrender.com',
    linkGithub: 'https://github.com/matvillar/reactEcommerce',
  },
  {
    title: 'Previous Portfolio',
    projectName: 'Previous Portfolio',
    description:
      'My previous portfolio built with React, Next.js, and TailwindCSS. Features include a dark mode toggle, smooth scroll, and a responsive design.',
    srcImg: '/prev-portfolio.png',
    imgClassName:
      'rounded-lg object-cover w-full lg:max-w-[50%] transform transition duration-200 ease-in-out filter grayscale hover:grayscale-0 cursor-pointer hover:scale-105',
    id: 3,
    projectTools: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    isReverse: false,
    linkLiveView: 'https://matiasvillar.netlify.app',
    linkGithub: '',
  },
];

// [
//   {
//     id: 1,
//     title: 'I prioritize client collaboration, fostering open communication',
//     description: '',
//     className: 'lg:col-span-2 md:col-span-1',
//     imgClassName: 'w-full h-full',
//     titleClassName: 'justify-end',
//     img: '/b1.svg',
//     spareImg: '',
//   },
//   {
//     id: 2,
//     title: "I'm very flexible with time zone communications",
//     description: '',
//     className: 'lg:col-span-1 md:col-span-1',
//     imgClassName: 'w-full h-full',
//     titleClassName: 'justify-start',
//     img: '',
//     spareImg: '',
//   },
//   {
//     id: 3,
//     title: 'My tech stack',
//     description: 'I constantly try to improve',
//     className: 'lg:col-span-1 md:col-span-1',
//     imgClassName: 'w-full h-full',
//     titleClassName: 'justify-center',
//     img: '',
//     spareImg: '',
//   },
//   {
//     id: 4,
//     title: 'Tech enthusiast with a passion for development.',
//     description: '',
//     className: 'lg:col-span-1 md:col-span-1',
//     imgClassName: 'w-full h-full',
//     titleClassName: 'justify-start',
//     img: '/grid.svg',
//     spareImg: '/b4.svg',
//   },

//   {
//     id: 5,
//     title: 'Currently building a JS Animation library',
//     description: 'The Inside Scoop',
//     className: 'lg:col-span-1 md:col-span-1',
//     imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
//     titleClassName: 'justify-center md:justify-start lg:justify-center',
//     img: '/b5.svg',
//     spareImg: '/grid.svg',
//   },
//   {
//     id: 6,
//     title: 'Do you want to start a project together?',
//     description: '',
//     className: 'lg:col-span-1 md:col-span-1',
//     imgClassName: '',
//     titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
//     img: '',
//     spareImg: '',
//   },
//   {
//     id: 7,
//     title: 'Do you want to start a project together?',
//     description: '',
//     className: 'lg:col-span-2 ',
//     imgClassName: '',
//     titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
//     img: '',
//     spareImg: '',
//   },
// ];
