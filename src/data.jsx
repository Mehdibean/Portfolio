import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Mehdi',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Miraoui',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '19 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Algerian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Algers',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+213779203918',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'mehdi.miraoui.pro@gmail.com',
  },

  {
    id: 9,
    title: 'discord : ',
    description: 'sanmehdi',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'French, English, Arabe',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },
];

export const resume = [

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021 - Ongoing',
    title: 'Architectural Studies at <span>University Abou Bekr Belkaid</span>',
    desc: 'Studying architecture has equipped me with design, problem-solving, and attention-to-detail skills. These complement my web development expertise, allowing me to bring a unique and holistic perspective to design and development projects.',
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Front-End Web Development Training at <span>Dahlias institute</span>',
    desc: 'Throughout an immersive Front-End Web Development program, I acquired proficiency in HTML, CSS, JavaScript, and popular libraries such as React, Bootstrap, and Tailwind, equipping me with the skills to craft engaging and responsive user interfaces.',
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: "Photoshop Training at <span>CFTI</span>",
    desc: "Equipped with comprehensive training in Photoshop , I gained hands-on expertise in leveraging digital design tools to create captivating visual content and enhance user interfaces."

  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'Bachelor Degree <span> High School Ibn Tofail </span>',
    desc: 'With a Bachelors degree in Mathematical Techniques earned in 2021 with a good distinction , I bring a strong foundation in mathematical problem-solving and analytical thinking, enhancing my approach to crafting intuitive and efficient solutions in front-end development.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '65',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Bootstrap',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Tailwind',
    percentage: '65',
  },
  {
    id: 6,
    title: 'React',
    percentage: '51',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Landing page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Landing page',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'in my github',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design & Code',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'in my github',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'E-comerce jewelry',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'in my github',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Note Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Note app',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'in my github',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Password Generator',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: '',
      },
      {
        title: 'Language : ',
        desc: 'Html',
      },
      {
        title: 'Preview : ',
        desc: 'in my github',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Designs',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Logo and visit card design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'AB cnc',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
