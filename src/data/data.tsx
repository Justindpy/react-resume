import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import mobilefusspflegelogo from '../images/portfolio/justin_logo_lilievorne-removebg-preview.png';
//import getjustitlogo from '../images/portfolio/gejustitlogo.jpeg';
import stahltonlogo from '../images/portfolio/Logo_StahlTon_Grau-1.png';
//import profilepic from '../images/justinProfilePic.jpeg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Justin Alderath Resume',
  description: "The Resume of Justin Alderath",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Justin Alderath.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm currently a dual <strong className="text-stone-100">Computer Science Student</strong>, currently working
        at <strong className="text-stone-100">DEVK Versicherungen</strong> developing Software in Java.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training young adults at <strong className="text-stone-100">Football</strong>,
        analyzing <strong className="text-stone-100">(American) Football</strong>, or exploring the beautiful{' '}
        <strong className="text-stone-100">Landscape of Europe</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/ResumeJustinAlderath.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
 // profileImageSrc: //profilepic,
  description: `I am a passionate athlete who enjoys playing both soccer and basketball. In my free time, 
  I love watching football, which never fails to excite me. I played soccer myself for 14 years 
  and have now shifted my focus to coaching, where I enjoy training young players. 
  Professionally and as a hobby, I am deeply involved in the world of software development. 
  My main programming language is Java, and I particularly enjoy working with Vaadin to create appealing and 
  functional web applications. Additionally, I have fun enhancing my skills in data visualization using Python. 
  Learning and applying new technologies is an exciting challenge that I am always eager to embrace.`,
  aboutItems: [
    {label: 'Location', text: 'Cologne, Germany', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Germany', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, American Football, Adventures', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Applied Science Bonn-Rhein-Sieg', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'DEVK Versicherungen', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'German',
        level: 10,
      },
      {
        name: 'Englisch',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 3,
      }
      /*,
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
      */
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'Python',
        level: 4,
      },
      {
        name: 'C#',
        level: 2,
      },
    ],
  }
  /*,
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },*/
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Own Company',
    description: 'I founded my own Company and build a Website for it',
    url: 'https://getjust-it.de',
    image: stahltonlogo, //provisorisch
  },
  {
    title: 'StahlTon Website',
    description: 'I rebuilt an outdated website.',
    url: 'https://stahl-ton.de',
    image: stahltonlogo,
  },
  {
    title: 'StahlTon Shop',
    description: 'The client was very satisfied, so I also designed their first shop using WooCommerce.',
    url: 'https://shop.stahl-ton.de',
    image: stahltonlogo,
  },
  {
    title: 'Website for mobile foot care.',
    description: 'I designed another website for a client in mobile foot care.',
    url: 'https://mobile-fusspflege-by-azra-kisselev.de',
    image: mobilefusspflegelogo,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2021 - August 2025',
    location: 'University for Applied Science Bonn-Rhein-Sieg',
    title: 'Bachelor in Computer Science',
    content: <p>Focus Area: Business Informatics</p>,
  },
  {
    date: 'August 2012 – July 2020',
    location: 'Hoelderlin Gymnasium, Cologne',
    title: 'Abitur (German High School Diploma)',
    content: <p>I  completed my Abitur, which has provided me with a strong foundation 
      in a variety of academic subjects and prepared me for future educational and professional endeavors.
      My main focus was in the Subjects of English and Geographics.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    location: 'DEVK Versicherung',
    date: 'August 2021 - Present',
    title: 'Java Software Developement (Dual Student)',
    content: (
      <p>
        I have primarily developed Java applications, which I have visualized using Vaadin (versions 14 and 24). 
        Additionally, I have independently migrated several applications from Java 8 to versions 17 and 21.
        During this process, I also upgraded Vaadin from version 14 to 24.
      </p>
    ),
  },
  {
    date: 'March 2023 - Present',
    location: 'getJust-IT',
    title: 'Freelancer',
    content: (
      <p>
         Primarily focused on website development, frequently utilizing Wordpress. 
         Additionally, I provided advisory services, assisting clients with technical solutions and platform selection.
         I managed projects from inception to completion, collaborating closely with designers and content creators. 
         My expertise includes optimizing websites for performance and SEO, implementing industry best practices to enhance user experience and achieve business objectives.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here are some ways where you can contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'justin.alderath@getJust-it.de',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Erftstadt, Germany',
      href: 'https://maps.app.goo.gl/g3d9C4wX6TCsbvUQ8',
    },
    {
      type: ContactType.Instagram,
      text: '@getjustit',
      href: 'https://www.instagram.com/getjustit/',
    },
    {
      type: ContactType.Github,
      text: 'Justindpy',
      href: 'https://github.com/Justindpy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Justindpy'},
 // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/justinalderath/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/getjustit/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
