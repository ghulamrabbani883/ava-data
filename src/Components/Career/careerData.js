import {
  MdOutlineDesignServices,
  MdWebAsset,
  MdOutlineMobileScreenShare,
  MdOutlineCloudQueue,
  MdVolunteerActivism
} from "react-icons/md";
import {GiClockwork,GiTransparentSlime,GiMoneyStack,GiGrowth} from 'react-icons/gi'
import {FcWorkflow} from 'react-icons/fc'
import { SiBlockchaindotcom, SiMusicbrainz,SiWordpress } from "react-icons/si";
import workLife from "../../images/careerBanner.avif";
import Rewards from "../../images/rewards.avif";
import Celebrations from "../../images/celebrations.avif";
import Leadership from "../../images/leadership.avif";
export const jobOpenings = [
  {
    id: 1,
    category: "Front-end developer",
    icon: <MdOutlineDesignServices size={120} style={{ color: "#0A56A4" }} />,
    title: "UI/UX Design",
    para: "Ava-Data Offers the best End-To-End UI/UX Design Services in India That Transform Your Brand Image And Boost Customer Satisfaction. Ava-Data Offers the best End-To-End UI/UX Design Services in India That Transform Your Brand Image And Boost Customer Satisfaction. ",
  },
  {
    id: 2,
    category: "Front-end developer",
    icon: <SiBlockchaindotcom size={120} style={{ color: "#0A56A4" }} />,
    title: "ReactJs Developer",
    para: "We are looking for a skilled react.js developer to join our front-end development team. In this role, you will be responsible.      ",
  },
  {
    id: 3,
    category: "Backend developer",
    icon: <MdWebAsset size={120} style={{ color: "#0A56A4" }} />,
    title: "Web Development",
    para: "We are currently looking for .Net Developers to join our dynamic technical team.      ",
  },
  {
    id: 4,
    category: "Backend developer",
    icon: (
      <MdOutlineMobileScreenShare size={120} style={{ color: "#0A56A4" }} />
    ),
    title: "Python Development",
    para: " We are looking for an experienced Python developer who will be responsible for writing and testing scalable code.      ",
  },
  {
    id: 5,
    category: "Backend developer",
    icon: <SiMusicbrainz size={120} style={{ color: "#0A56A4" }} />,
    title: "Java Developer",
    para: "We are looking for a Java Developer with experience in building high-performing, scalable, enterprise-grade applications.    ",
  },
  {
    id: 6,
    category: "DevOps",
    icon: <MdOutlineCloudQueue size={120} style={{ color: "#0A56A4" }} />,
    title: "Devops",
    para: "We are looking for a atleast 3 years experience in DevOps field. Candidate should have knowledge of Docker, Kubernetes, Nginix, AWS and Azure technology. Anybody who holds these tech skills can appy here",
  },
  {
    id: 7,
    category: "Full-stack",
    icon:<SiWordpress size={120} style={{ color: "#0A56A4" }} />,
    title: "Wordpress developer",
    para: "WordPress Developers are responsible for both back-end and front-end development, including creating WordPress themes and plugins.      ",
  },
];
export const careerPerksData = [
  {
    id:1,
    icon:<GiClockwork size={42} style={{ color: "#0A56A4" }} />,
    title:'Flexible Working Hours',
    para:'We are a work oriented company where work is our priority. According to our research flexible working hours are one of the factors which lessen your stress from work.'
  },
  {
    id:2,
    icon:<MdVolunteerActivism size={42} style={{ color: "#0A56A4" }}  />,
    title:'Company Activities',
    para:'Fun is an integral part at Ava-Data. We celebrate together, play together and work together at the same time. We arrange fun activities at office to loose stress.'
  },
  {
    id:3,
    icon:<FcWorkflow size={42} style={{ color: "#0A56A4" }} />,
    title:'Awesome Co-workers',
    para:'Everyone at Ava-Data maintains cordial relationships with peers. Though we have different departments but we are a big team'
  },
  {
    id:4,
    icon:<GiTransparentSlime size={42} style={{ color: "#0A56A4" }} />,
    title:'Transparency From Top To Bottom',
    para:'We at Hyperlink InfoSystem preserve complete transparency through each hierarchy. Everyone has a right to put their point of view and freedom to speak.    '
  },
  {
    id:5,
    icon:<GiMoneyStack size={42} style={{ color: "#0A56A4" }} />,
    title:'Competitive Salaries',
    para:'Hyperlink InfoSystem values a true talent and everyone gets their fair part of salary. We believe in performance so there is no bar for right skills.    '
  },
  {
    id:6,
    icon:<GiGrowth size={42} style={{ color: "#0A56A4" }} />,
    title:'Growth Opportunity',
    para:'Growth is never ending at Hyperlink InfoSystem. Whether it is about monetary or skills & talent or personal growth, everything is taken care of. The company has a goal to "Grow together".    '
  }
  
]
export const careerJoinData = [
  {
    id: 1,
    image: workLife,
    title: "Work Life Balance Support",
    para: "We understnad the significance of good work life balance and that's why our objective is to strategically distribute the workload so that employees can deliver the maximum productivity without burdening  themselves",
  },
  {
    id: 2,
    image: Leadership,
    title: "Leadership and Career Development",
    para: '"Leadership is the key to unlock exponential growth!". We strongly believe in this qoute and try to implement it thorughout the organization. Our work culture encourages every employee to come forward, take control of the reins and develope the required leadership and technical skills to deliver best of best.',
  },
  {
    id: 3,
    image: Rewards,
    title: "Recognition and Rewards",
    para: "At Ava-Data we are a firm beleiver in rewarding excellence and quality work. In addition to regular incentives and bonuses, we also reward employees in the form of gifts and team outings to showcase our appreciation of the hardwork and dedication that they put in while working.",
  },
  {
    id: 4,
    image: Celebrations,
    title: "Celebrations and More",
    para: "We understand that sitting in front of the computer screen for 40 hours in a week is not ideal way to achieve maximum productivity. That's why we organises regular birthday wishesh, in-house celebrations, and dedicated parties to give employees the opportunity to entertain themselves.",
  },
];
