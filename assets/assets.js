import bg_about from './bg_about.png';
import bg_about02 from './bg_about02.png';
import bg_contact from './bg_contact.png';
import bg_contact02 from './bg_contact02.png';
import bg_skills from './bg_skills.png';
import bg_work from './bg_work.png';
import bg_hero from './bg_hero.png';
import bg_heros from './bg_heros.png';
import bg_work03 from './bg_Work03.png';
import bg_skills2 from './bg_skills2.png';
import award_img from './award_img.png';
import wordcloud from './wordcloud.png';
import p_profile from './p_profile.png';
import profile from './profile.png';
import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import top_arrow_white from './top-arrow-white.png';
import logo from './logo.png';
import solis_logo from './solis_logo.png';
import logo_dark from './logo_dark.svg';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import hero_n from './hero_n.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import { faCode, faGraduationCap, faDiagramProject} from '@fortawesome/free-solid-svg-icons';
import { SiAdobecreativecloud, SiAdobedreamweaver, SiApachenetbeanside, SiAtlassian, SiBootstrap, SiHtml5, SiJavascript, SiJquery, SiMongodb, SiMoodle, SiOracle, SiPostman, SiReact, SiSass, SiTailwindcss, SiFramer, SiWordpress } from 'react-icons/si';
import { FaAward, FaCode, FaLink } from 'react-icons/fa';
/*import {
  FaCode,
  FaDatabase,
  FaProjectDiagram,
  FaAward,
  FaLink,
  FaGraduationCap
} from 'react-icons/fa';
*/
import React from 'react';
import next from 'next';



export const assets = {
    bg_about,
      bg_about02,
   bg_contact,
    bg_contact02,
    bg_hero,
    bg_heros,
    bg_skills,
    // bg_work,
    bg_work03,
    bg_skills2,
    award_img,
    wordcloud,
    p_profile,
    profile,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    top_arrow_white,
    logo,
    solis_logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    hero_n,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Functional Analyst',
        description: 'University of Alberta - Worked on Slate CRM with basic knowledge of using Query Builder to extract specific datasets. Applied filters and joins to refine results. - Imported data via CSV and XLSX files using the Upload Dataset function. Ensured data matched the correct field mappings. - Configured forms in Slate for data collection and utilized queries to analyze data. - Supported and collaborated throughout the process of delivering the Provincial Allocation Letter from the Govt of Alberta to the applicants for study permits. - Updated averages in Campus Solutions and ran various queries to ensure data accuracy. Added new ASN numbers through UiPath to Campus Solutions. - Liquid Markup for Slate dataset',
        bgImage: '/work-1.png',
        date:'October 2023 - 2025'
    },
    {
        title: 'Learning Technology Specialist',
        description: 'NorQuest College - Developed and collaborated with instructional designers, on a large variety of online academic courses in Moodle, provided online Moodle support for various schools - Supported and collaborated with instructional designers, multimedia developers, and other team members to develop online learning for (eCampus Alberta 2016) - Resolved escalation issues from Faculty Development for LMS - Created HTML5/CSS3 web pages from storyboard content - Created H5P and quizzes in Respondus to apply in Moodle for assignments - JavaScript Framework Bootstrap 4 and 5 - Testing software application articulate 360, storyline and rise, pressbook. - Worked with infographic adobe spark-Express, Canva - Worked with tools NetBeans 8.2, Xampp, WampServer Windows web development environment. - Supported web applications with Apache2, PHP and a MySQL database. PhpMyAdmin to manage databases. - Supported web applications with Apache2, PHP and a MySQL database. PhpMyAdmin to manage databases.',
        bgImage: '/work-2.png',
        date:'June 2012 - October 2023'
    },
    {
        title: 'Course Production Tech',
        description: 'Grant Macewan University - Developed, maintained a large variety of online academic courses in Blackboard CE - Supported and collaborated with instructional designers, multimedia developers, and other team members to develop online learning for eCampus - Created HTML/CSS3 web pages from storyboard content - Created quizzes in Respondus to apply in Blackboard for assignments - Designed user interactive Flash ActionScript 3 templates - Provided online Blackboard support for various schools',
        bgImage: '/work-3.png',
             date:'April 2010 - May 2012'
    },
    {
        title: 'Web Content Developer ',
        description: 'BaseCorp Learning System - Developed, maintained and supported standards-compliant development including usability/accessibility standards adherence - Designed user interactive Flash CS3 templates for online testing - Created HTML/XHTML web pages from storyboard content, Managed site-wide projects in Visual Studio 2008 and Microsoft Visual SourceSafe to maintain and update web applications - Responsible for design and layout elements using XHTML, CSS, and Photoshop',
        bgImage: '/work-4.png',
     date:'April 2008 - Jan 2010'
    },
        {
        title: 'Technical Support Analyst ',
        description: 'DELL Canada Inc - Provided high-level technical support on operational issues or maintenance of PCs and/or peripherals over the telephone - Acted independently to field support calls that were technically complex in nature and in relation to software by using available resources to research and gather information to assist in resolution of the issue - Performed troubleshooting of issues with Windows XP and Vista - Removed spyware, rootkits and viruses from systems - Set up basic home networks and wireless networks - Achieved Dell Trained Six Sigma yellow belt for BPI',
        bgImage: '/work-4.png',
     date:'October 2005 - April 2008'
    },
    {
        title: 'Senior Multimedia Designer',
        description: 'Gurukul Online Learning Solutions - Worked on Computer Based Training (CBTs), Web Based Training (WBTs) and storyboards - Certified in Project Management for SDLC, Followed standards and specifications for LMS, such as SCORM and AICC conformance - Designed courses using animated visuals, demos, simulations, designing frames, designing characters, quizzes etc.',
        bgImage: '/work-4.png',
     date:'September 2002 - May 2005'
    },
    {
        title: 'Web Designer',
        description: 'Kairatech Pvt. Ltd - Successfully completed various multimedia and Internet communication projects including websites, etc.',
        bgImage: '/work-4.png',
     date:'July 2001 - September 2002'
    },
  
]

export const serviceData = [
  {
    icon: FaAward,
    iconDark: assets.award_icon_dark,
    title: 'Web design',
    description: 'My old web site',
  },
  {
    icon: FaCode,
    iconDark: assets.code_icon_dark,
    title: 'Moodle Help',
    description: 'The Moodle Help for Norquest College',
  },
  {
    icon: FaLink,
    iconDark: assets.link_icon_dark,
    title: 'Web Site Static',
    description: 'Old Project Site',
  },
  {
    icon: FaCode,
    iconDark: assets.project_icon_dark,
    title: 'Basic Mern-Stack',
    description: 'Learning Mern-Stack',
  },
];

export const infoList = [
  { 
    icon: faCode, 
    iconDark: assets.code_icon_dark, 
    title: 'Languages', 
    description: 'HTML, CSS, Sass, Bootstrap, JavaScript, (Learning-> React.js, Next.js, TypeScript, Tailwindcss)' 
  },
{ 
    icon: faDiagramProject, 
    iconDark: assets.project_icon_dark, 
    title: 'Projects', 
    description: '200+ Course Projects completed' 
  } ,
   
  { 
    icon: faGraduationCap, 
    iconDark: assets.edu_icon_dark, 
    title: 'Education', 
    description: 'Honors Diploma in Information & System Management / Application of Web Design and Development (2002) / NAIT- Web Developer Certificate (2017)' 
  }
];


export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git, 
];


export const toolsData2 = [
  { icon: SiAdobecreativecloud },
  { icon: SiAdobedreamweaver },
  { icon: SiMoodle },
  { icon: SiHtml5 },
  { icon: SiBootstrap },
  { icon: SiSass },
  { icon: SiTailwindcss },
  { icon: SiJavascript },
      { icon: SiWordpress },
  { icon: SiJquery },
  { icon: SiReact },
  { icon: SiOracle },
  { icon: SiAtlassian },
        { icon: SiApachenetbeanside },
  { icon: SiFramer }, 
];
