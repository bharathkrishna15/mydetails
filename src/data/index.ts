import { SkillType, ServiceType, AchievementType, ProjectType, SocialLinkType } from '../types';

export const socialLinks: SocialLinkType[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bharathk15/',
    icon: 'linkedin'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/bharathkrishna15',
    icon: 'github'
  },
  {
    platform: 'LeetCode',
    url: 'https://leetcode.com/u/bharath1522',
    icon: 'code'
  }
];

export const skills: SkillType[] = [
  {
    name: 'Python Programming',
    icon: 'python',
    color: '#3776AB',
    progress: 90
  },
  {
    name: 'SQL Programming',
    icon: 'database',
    color: '#4479A1',
    progress: 50
  },
  {
    name: 'C & C++ Programming',
    icon: 'code',
    color: '#00599C',
    progress: 80
  },
  {
    name: 'HTML',
    icon: 'html',
    color: '#E34F26',
    progress: 85
  },
  {
    name: 'CSS',
    icon: 'css',
    color: '#FFC300',
    progress: 75
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
    color: '#F7931E',
    progress: 70
  }
];

export const services: ServiceType[] = [
  {
    title: 'Web Development',
    icon: 'code',
    description: 'I design and develop responsive websites using HTML, CSS, and JavaScript, ensuring smooth user experience and functionality.'
  },
  {
    title: 'AI & ML',
    icon: 'brain',
    description: 'I build AI/ML models using Python to solve real-world problems, including data analysis, predictions, and automation.'
  },
  {
    title: 'Software Development',
    icon: 'terminal',
    description: 'I develop efficient software solutions using C, C++, and Python, focusing on optimized algorithms and performance.'
  }
];


export const achievements: AchievementType[] = [
  {
    title: 'C/C++ Programming Certification',
    icon: 'code-2',
    description: 'Completed foundational and advanced concepts in C and C++ programming, enhancing core programming proficiency.'
  },
  {
    title: 'Machine Learning Certification',
    icon: 'brain',
    description: 'Covered supervised and unsupervised learning, as well as model evaluation techniques in ML coursework.'
  },
  {
    title: 'Oracle Cloud AI Foundations',
    icon: 'cloud',
    description: 'Gained expertise in Oracle Cloud AI services and data science workflows through certification.'
  },
  {
    title: 'CCNA: Introduction to Networks',
    icon: 'network',
    description: 'Learned networking fundamentals including IP addressing, protocols, and network architecture via Cisco Networking Academy.'
  }
];

export const projects: ProjectType[] = [
  {
    title: 'Weather App',
    description: 'A web-based weather application that provides real-time weather updates using API integration.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
    projectUrl: 'https://bharathkrishna15.github.io/PRODIGY_WD_05'
  },
  {
    title: 'Tic-Tac-Toe Web App',
    description: 'A simple yet interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2076/2076561.png',
    projectUrl: '#'
  },
  {
    title: 'AI Chatbot',
    description: 'An intelligent chatbot built using Python and Machine Learning to assist with queries.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/4712/4712033.png',
    projectUrl: '#'
  }
];

export const personalInfo = {
  name: 'Bharath K',
  title: 'Artificial Intelligence & Machine Learning',
  bio: 'A highly motivated and skilled Computer Science Engineer specializing in "Artificial Intelligence and Machine Learning" and Web Development. Demonstrates a proven ability to design and implement innovative solutions, including web applications, AI-powered models, and satellite data analytics. Possesses strong problem-solving skills, combined with expertise in Python, advanced machine learning frameworks, and real-time data processing. Dedicated to creating impactful, user-centric systems that seamlessly blend cultural awareness with cutting-edge AI technologies',
  resumeUrl: '/Bharath.pdf',
  avatarUrl: 'public/image45.jpg',
  aboutImageUrl: 'public/image1.jpg'
};
