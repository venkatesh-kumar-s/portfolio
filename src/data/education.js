// import lpu from "../assets/images/icons/education/lpu.png";
// import sc from "../assets/images/icons/education/sri-chaitanya.png";
// import jnv from "../assets/images/icons/education/jnv.png";
import university from "../assets/images/icons/education/university.png";
import certificate from "../assets/images/icons/education/certificate.png";
import school from "../assets/images/icons/school.ico";

import lpu from "../assets/images/education/lpu-banner.jpeg";
import lpuLogo from "../assets/images/lpu-logo-caption.svg";
import jnv from '../assets/images/icons/education/school-edu-banner.jpg'
import jnvLogo from '../assets/images/icons/education/jnv.png'
import sc from '../assets/images/icons/education/inter-edu-banner.jpg'
import scLogo from '../assets/images/icons/education/sri-chaitanya-logo.png'

export const EducationHistory = [
  {
    degree: "Bachelors Degree",
    course: "Computer Science and Engineering",
    timeline: "2014 - 2018",
    scoreType: "Class",
    score: "First",
    logo: lpuLogo,
    banner: lpu,
    board: "Lovely Professional University",
    institute: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    icon: university,
    type: 'lpu',
    certificates:[
      {
        type:'Academic Transcript',
        file: 'Academic Transcript.pdf'
      },
      {
        type:'Degree (Convocation)',
        file: 'B-tech Degree (Convocation).pdf'
      },
      {
        type:'Migration Certificate',
        file: 'Migration Certificate.pdf'
      }
    ]
  },
  {
    degree: "Higher Secondary School",
    course: "Mathematics, Physics & Chemistry",
    timeline: "2012 - 2014",
    scoreType: "%",
    score: "92.4",
    logo: scLogo,
    banner: sc,
    board: "Board of Intermediate Education (AP)",
    institute: "Sri Chaitanya Educational Institute",
    location: "Vijayawada, Andhra Pradesh",
    icon: certificate,
    type: "inter",
    certificates:[
      {
        type:'Pass Certificate',
        file: '12th.pdf',
      },
    ]
  },
  {
    degree: "Secondary School",
    course: "General Science",
    timeline: "2010 - 2012",
    scoreType: "CGPA",
    score: "9.2",
    logo: jnvLogo,
    banner: jnv,
    board: "CBSE",
    institute: "Jawahar Navodaya Vidyalaya",
    location: "Krishna, Andhra Pradesh",
    icon: school,
    type: 'jnv',
    certificates:[
      {
        type:'Grade/Performance Certificate',
        file: '10th.pdf'
      }
    ]
  },
];
