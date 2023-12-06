import img1 from './images/Frame1.svg';

/* eslint-disable no-unused-vars */
import { FcLinux } from "react-icons/fc";
import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGitSquare, FaGithubSquare, FaWindows, FaLinux, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiContentful } from "react-icons/si";
// Import Icons from React Library and render it as component inside the array of data, read the documentation for more

export const heroIcons = [
  {
    id:nanoid(),
    href: 'https://github.com/endrixh7',
    icon: <FaGithubSquare/>
  },
  {
    id:nanoid(),
    href: 'https://www.linkedin.com/in/endri-xhukellari-0592311a5/https://github.com/endrixh7',
    icon: <FaLinkedin/>
  },
  {
    id:nanoid(),
    href: 'https://twitter.com/XhukellariEndri',
    icon: <FaTwitter/>
  }
]

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-orange-600' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },

  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-sky-400' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-yellow-400' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-cyan-500	' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node JS',
    icon: <FaNodeJs className='h-16 w-16 text-green-600	' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className='h-16 w-16 text-green-600' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'Contentful CMS',
    icon: <SiContentful className='h-16 w-16 text-blue-700' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGitSquare className='h-16 w-16 text-orange-600' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Github',
    icon: <FaGithubSquare className='h-16 w-16' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'Windows',
    icon: <FaWindows className='h-16 w-16 text-blue-900' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Linux',
    icon: <FcLinux className='h-16 w-16'/>,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: img1,
    url: 'https://endrixhukellari-shopping-list.netlify.app/',
    github: 'https://github.com/endrixh7/endrixhukellari-shopping-list',
    title: 'Shopping List',
    text: 'My first projects in Vanilla JS, CRUD Operations.',
  },
  {
    id: nanoid(),
    img:img1,
    url: 'https://endrixhukellari-flixx-app.netlify.app/',
    github: 'https://github.com/endrixh7/endrixhukellari-flixx-app',
    title: 'Flixx App',
    text: 'My second project in Vanilla JS, Fetch API, TMDb Api, promises and async/await.',
  },
  {
    id: nanoid(),
    img:img1,
    url: 'https://backroads-app-html-to-react-app.netlify.app/',
    github: 'https://github.com/endrixh7/backroads-app',
    title: 'backroads app',
    text: 'my third project, converting an existing web from HTML/CSS/JS to ReactJS Framework',
  },
  {
    id: nanoid(),
    img:img1,
    url: 'https://endrixhukellari-birthday-buddy.netlify.app/',
    github: 'https://github.com/endrixh7/endrixhukellari-birthday-buddy',
    title: 'birthday buddy',
    text: 'Mini-project, continuing the road with ReactJS, useState-hook.',
  },
  {
    id: nanoid(),
    img:img1,
    url: 'https://endrixhukellari-tours.netlify.app/',
    github: 'https://github.com/endrixh7/endrixhukellari-tours',
    title: 'Tours',
    text: 'Mini-project, continuing the road with ReactJS, useEffect-hook',
  },
  {
    id: nanoid(),
    img:img1,
    url: 'https://endrixhukellari.dev',
    github: 'https://github.com/endrixh7/endrixhukellari-dev',
    title: 'My Portofolio - endrixhukellari.dev',
    text: 'My portofolio, continuing the road with ReactJS, useEffect/useState-hook',
  },
];



export const social = [

  {
    id:nanoid(),
    url: 'https://linkedin.com',
    icon: <FaGithubSquare className='h-6 w-6'/>
  },

  {
    id:nanoid(),
    url: 'https://linkedin.com',
    icon: <FaLinkedin className='h-6 w-6'/>
  },

  {
    id:nanoid(),
    url: 'https://linkedin.com',
    icon: <FaTwitter className='h-6 w-6'/>
  },
]
