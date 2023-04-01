import {
  MdOutlineHealthAndSafety,
  MdOutlineCastForEducation,
  MdOutlineShoppingCart,
  MdOutlineStore,
  MdOutlineAirplanemodeActive,
  MdOutlineLocalShipping,
  MdMusicNote,
  MdOutlineFireplace,
  MdMoney,
  MdOutlineDesignServices,
  MdWebAsset,
  MdOutlineMobileScreenShare,
  MdOutlineCloudQueue,
  MdOutlineSearch,
  MdOutlineAppsOutage,
} from "react-icons/md";
import { SiBlockchaindotcom, SiDatabricks } from "react-icons/si";
import work1 from '../images/work1.avif'
import work2 from '../images/work2.avif'
import work3 from '../images/work3.avif'
import work4 from '../images/work4.avif'
import work5 from '../images/work5.avif'
import work6 from '../images/work6.avif'
import work7 from '../images/work7.avif'
import work8 from '../images/work8.avif'
import work9 from '../images/work9.avif'
import work10 from '../images/work10.avif'

export const workData = [
  {
    id:1,
    image:work1,
    title:"Ava-Data, A portfolio website to showcase the company profile",
    category:'website',
    tech:'Reactjs'
  },
  {
    id:2,
    image:work2,
    title:"AtAdventure, A mobile application to showcase adventures lifestyle ",
    category:'Mobile App',
    tech:'React Native'
  },
  {
    id:3,
    image:work3,
    title:"GetDeveloper, A web based recruitment job portal",
    category:'website',
    tech:'PHP/Laravel'
  },
  {
    id:4,
    image:work4,
    title:"AVUUI, A cross-platform Ad-tech mobile app",
    category:'Mobile App',
    tech:'Flutter'
  },
  {
    id:5,
    image:work5,
    title:"Foodie, A food delivery app",
    category:'Mobile App',
    tech:'Flutter'
  }
  ,{
    id:6,
    image:work6,
    title:"ServiceMesh, A web-based services marketplace",
    category:'website',
    tech:'MERN stack'
  },
  {
    id:7,
    image:work7,
    title:"Get2Know, A scial media platform for professionals and students",
    category:'Mobile App',
    tech:'Flutter, Node'
  },
  {
    id:8,
    image:work8,
    title:"Rental, A website for finding new house for rent and buy",
    category:'website',
    tech:'Ruby Rails'
  },
  {
    id:9,
    image:work9,
    title:"Mobile application to track health and fitness",
    category:'Mobile App',
    tech:'React Native'
  },
  {
    id:10,
    image:work10,
    title:"Web based video Chat appliaction",
    category:'website',
    tech:'MERN and WebRTC'
  }
]
export const serviceLeftData = [
  {
    id: 1,
    icon: <MdOutlineHealthAndSafety size={20} />,
    para: "Healthcare",
  },
  {
    id: 2,
    icon: <MdOutlineCastForEducation size={20} />,
    para: "Education / Elearning",
  },
  {
    id: 3,
    icon: <MdOutlineShoppingCart size={20} />,
    para: "Retail",
  },
  {
    id: 4,
    icon: <MdOutlineStore size={20} />,
    para: "Real Estate",
  },
  {
    id: 5,
    icon: <MdOutlineAirplanemodeActive size={20} />,
    para: "Travel & Hospitality",
  },
  {
    id: 6,
    icon: <MdOutlineLocalShipping size={20} />,
    para: "Logistics & Distribution",
  },
  ,
  {
    id: 7,
    icon: <MdMusicNote size={20} />,
    para: "Media & Entertainment",
  },
  {
    id: 8,
    icon: <MdOutlineFireplace size={20} />,
    para: "Oil & Gas",
  },
  {
    id: 9,
    icon: <MdMoney size={20} />,
    para: "Fintech",
  },
];
export const serviceRightData = [
  {
    id: 1,
    icon: <MdOutlineMobileScreenShare size={24} />,
    title: "Mobile Apps",
    serviceList: [
      "Native iOS Apps",
      "Native Android Apps",
      "Cross Platform",
      "Hybrid Apps",
      "PWA",
    ],
  },
  {
    id: 2,
    icon: <MdWebAsset size={24} />,
    title: "Web development",
    serviceList: [
      "Enterprise Solutions",
      "ECommerce",
      "CMS",
      "API & Backend",
      "Custom Development",
      "WordPress Development",
    ],
  },
  {
    id: 3,
    icon: <MdOutlineDesignServices size={24} />,
    title: "Mobile Apps",
    serviceList: [
      "Discovery Workshop",
      "Analysis",
      "Wireframe",
      "UI/UX Design",
      "Branding Design",
    ],
  },
  {
    id: 4,
    icon: <MdOutlineCloudQueue size={24} />,
    title: "DevOps",
    serviceList: ["Setup", "Automation", "Continuous Delivery", "Monitoring"],
  },
  {
    id: 5,
    icon: <MdOutlineSearch size={24} />,
    title: "QA",
    serviceList: [
      "Manual QA Testing",
      "Web Testing Automation",
      "Mobile App Testing",
      "Performance Testing",
    ],
  },
  {
    id: 6,
    icon: <SiBlockchaindotcom size={24} />,
    title: "Block Chain",
    serviceList: [
      "DeFi App",
      "Tokenization",
      "Rollups Development",
      "NFT and Metaverse",
      "Supply Chains",
      "Blockchain Explorer",
    ],
  },
  {
    id: 7,
    icon: <MdOutlineAppsOutage size={24} />,
    title: "AI & ML",
    serviceList: [
      "Decision-Making Solution",
      "Predictive Modeling",
      "Chat bots",
      "Natural language processing",
      "Computer vision",
    ],
  },
];
export const technologyRight = [
  {
    id: 1,
    icon: <MdOutlineMobileScreenShare size={24} />,
    title: "Mobile",
    serviceList: [
      "IOS",
      "React native",
      "Android",
      "Flutter",
      "Ionic",
      "Xamarin",
    ],
  },
  {
    id: 2,
    icon: <MdWebAsset size={24} />,
    title: "Backend",
    serviceList: ["Nodejs", "PHP", ".Net", "Java", "Python", "Rails"],
  },
  {
    id: 3,
    icon: <MdWebAsset size={24} />,
    title: "Front-end",
    serviceList: ["Angular", "React", "Vuejs", "Typescript", "HTML5"],
  },
  {
    id: 4,
    icon: <MdOutlineCloudQueue size={24} />,
    title: "Infra & DevOps",
    serviceList: ["Google cloud", "AWS", "Azure", "Digital Ocean"],
  },
  {
    id: 5,
    icon: <SiDatabricks size={24} />,
    title: "Database",
    serviceList: ["MySQL", "MongoDB", "Firebase", "PostgreSQL", "Redis"],
  },
  {
    id: 6,
    icon: <SiBlockchaindotcom size={24} />,
    title: "CMS",
    serviceList: ["Mageneto", "Wordpress", "Shopify", "Laravel"],
  },
];
export const hireDeveloperRight = [
  {
    id: 1,
    icon: <MdWebAsset size={24} />,
    title: "Hire Web Developers",
    serviceList: [
      "Hire PHP Developers",
      "Hire Laravel Developers",
      "Hire Shopify Developers",
      "Hire Mageneto Developers",
      "Hire Wordpress Developers",
      "Hire Yii Developers",
    ],
  },
  {
    id: 2,
    icon: <MdOutlineMobileScreenShare size={24} />,
    title: " Hire Mobile Developers",
    serviceList: [
      "Hire iOS Developers",
      "Hire Android Developers",
      "Hire React native Developers",
      "Hire Ionic Developers",
      "Hire Xamarin Developers",
      "Hire Flutter Developers",
    ],
  },
  {
    id: 3,
    icon: <MdWebAsset size={24} />,
    title: "Hire Frontend Developers",
    serviceList: [
      "Hire React Developers",
      "Hire Angular Developers",
      "Hire Vue Js Developers",
      "Hire Typescript Developers",
      "Hire HTML5 Developers",
    ],
  },
  {
    id: 4,
    icon: <SiDatabricks size={24} />,
    title: "Hire Backend Developers",
    serviceList: [
      "Hire Nodejs Developers",
      "Hire Python Developers",
      "Hire Java Developers",
      "Hire ASP .Net Developers",
    ],
  },
];
