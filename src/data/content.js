import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

export const heroData = {
  name: "Rakshaa Viswanathan",
  title: "Software Engineer | Open Source Enthusiast | Diversity Advocate",
  subtitle: "Building scalable solutions and empowering communities.",
  email: "hi@rakshaa.dev",
  socialLinks: [
    { icon: FaGithub, url: "https://github.com/rakshaa2000", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/rakshaa-viswanathan-0aa891199/", label: "LinkedIn" },
    { icon: SiDevpost, url: "https://devpost.com/rakshaa2000", label: "Devpost" },
  ]
};

export const skillsData = [
  {
    category: "Languages",
    skills: ["C++", "Java", "Python", "C#", "JavaScript", "TypeScript", "Golang"]
  },
  {
    category: "Web & Frameworks",
    skills: ["React.js", "Node.js", ".NET", "Express.js", "GraphQL"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "SQL", "KQL", "Cosmos DB"]
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["Azure", "Linux (Kernel)", "Docker", "Kubernetes", "CI/CD (Azure DevOps)"]
  },
  {
    category: "Systems & Architecture",
    skills: ["Distributed Systems", "Microservices", "Kafka", "Event-Driven Architecture"]
  }
];

export const experienceData = [
  {
    role: "Software Engineer",
    company: "Microsoft (Azure Sovereign Platform)",
    duration: "Apr 2024 - Present",
    description: "Developing Azure Dependency Service Graph with GraphQL, Cosmos DB, and Kusto. Reduced incident resolution time by 30%. Led API upgrades in CloudSprout, increasing adoption by 40%. Designed event-driven configuration pipeline with Kafka.",
    icon: "💻"
  },
  {
    role: "Software Engineer",
    company: "Microsoft (Azure Linux)",
    duration: "Jun 2022 - Apr 2024",
    description: "Delivered critical security and performance improvements for Azure Linux (deployed to 100k+ servers). Built automated validation pipelines in Linux, Python, React, cutting regressions by 35%.",
    icon: "🐧"
  },
  {
    role: "SWE Intern",
    company: "Microsoft (Internship)",
    duration: "Jun 2021 - July 2021",
    description: "Designed a distributed compilation system for CBL-Mariner by parallelizing build pipelines, reducing build times by 33%. Enhanced build farm orchestration using Golang & Linux virtualization.",
    icon: "💻"
  },
  {
    role: "Research Intern",
    company: "NIT Trichy",
    duration: "Dec 2019 - Nov 2020",
    description: "Proposed and implemented a low-voltage DC Pico-grid for rural healthcare centres. Published results in IEEE.",
    icon: "⚡"
  }
];

export const educationData = [
  {
    degree: "B.Tech – Electrical & Electronics Engineering",
    institution: "NIT Trichy",
    duration: "2018 – 2022",
    details: "Minor in Computer Science & Engineering. CGPA: 8.51 / 10 (Distinction)."
  }
];

export const certificationsData = [
  {
    category: "Algorithms & Problem Solving",
    certs: [
      { name: "Algorithmic Toolbox", issuer: "UC San Diego (Coursera)" },
      { name: "Problem Solving (Basic)", issuer: "HackerRank" },
      { name: "C++", issuer: "SoloLearn" }
    ]
  },
  {
    category: "Linux, Systems & Infrastructure",
    certs: [
      { name: "Advanced Linux: The Linux Kernel", issuer: "LinkedIn" },
      { name: "Introduction to Linux", issuer: "LinkedIn" },
      { name: "Learning Linux Command Line", issuer: "LinkedIn" },
      { name: "Linux System Engineer: Bash Shell Scripting for Automation", issuer: "LinkedIn" },
      { name: "Linux: Files and Permissions", issuer: "LinkedIn" },
      { name: "Linux: Shells and Processes", issuer: "LinkedIn" },
      { name: "Linux: Package Management for CentOS", issuer: "LinkedIn" },
      { name: "Linux: Overview and Installation", issuer: "LinkedIn" }
    ]
  },
  {
    category: "Networking, OS & Distributed Systems",
    certs: [
      { name: "The Bits and Bytes of Computer Networking", issuer: "Google" },
      { name: "Intel® Network Academy – Network Transformation 101", issuer: "Intel" },
      { name: "Introduction to Cybersecurity", issuer: "Cisco" }
    ]
  },
  {
    category: "DevOps, Cloud & Production Engineering",
    certs: [
      { name: "DevOps Foundations", issuer: "LinkedIn" },
      { name: "Learning Kubernetes", issuer: "LinkedIn" },
      { name: "AWS Fundamental Course", issuer: "Udacity" },
      { name: "AWS Fundamentals: Going Cloud-Native", issuer: "AWS" },
      { name: "Build a Google Firebase Web Application", issuer: "Coursera" }
    ]
  },
  {
    category: "Software Engineering & Execution",
    certs: [
      { name: "20 Web Projects with Vanilla JavaScript", issuer: "Udemy" },
      { name: "Angular and NodeJS – The MEAN Stack Guide", issuer: "Udemy" },
      { name: "Developing Chatbots with Azure", issuer: "LinkedIn" }
    ]
  },
  {
    category: "AI / ML",
    certs: [
      { name: "Machine Learning", issuer: "Stanford Online" },
      { name: "Machine Learning with Python: Foundations", issuer: "LinkedIn" },
      { name: "Deep Learning Specialization", issuer: "DeepLearning.AI" },
      { name: "Structuring Machine Learning Projects", issuer: "DeepLearning.AI" }
    ]
  }
];

export const achievementsData = [
  {
    title: "Low Voltage DC Mini-grid for Isolated Healthcare Centres",
    description: "Published in IEEE (2021). Research on DC Pico-grid topology for rural healthcare."
  },
  {
    title: "Azure SPT Spot Award",
    description: "For platform reliability contributions."
  },
  {
    title: "yuHacks Bonus Prize",
    description: "Cloud category winner."
  },
  {
    title: "Wolfram Award",
    description: "For algorithm innovation."
  },
  {
    title: "Hack Solstice",
    description: "Popular Choice Award."
  },
  {
    title: "Quantahacks",
    description: "echoAR Winner (Top 1%)."
  }
];

export const communityData = [
  {
    role: "Founder",
    organization: "Superposition Chennai",
    description: "Scaled to 300+ members with coding workshops, peer learning, and structured mentorship."
  },
  {
    role: "Director",
    organization: "Kurinji Hacks",
    description: "Directed Chennai's largest hackathon for gender minorities with 500+ participants and a 95% project completion rate."
  },
  {
    role: "Mentor & Judge",
    organization: "Global Hackathons",
    description: "Mentored at 50+ global hackathons (MLH, Girls in Tech), supporting 1,500+ student developers."
  }
];

export const projectsData = [
  {
    title: "30 Days of ML",
    image: "/30_days_ml_thumbnail.png",
    description: "Repository for machine learning algorithms, project ideas and resources including Air Quality and Breast Cancer Prediction.",
    link: "https://github.com/rakshaa2000/30-Days-of-ML"
  },
  {
    title: "Azure Linux",
    image: "/azure_linux.png",
    description: "Contributions to Microsoft's Azure Linux OS (CBL-Mariner), deployed to 100k+ servers with security and performance improvements.",
    link: "https://github.com/microsoft/azurelinux"
  },
  {
    title: "Coding Chrysanthemums",
    image: "/coding_chrysanthemums_thumbnail.png",
    description: "A beginner-friendly project that lists resources for learning AI, Web Dev and DSA.",
    link: "https://coding-chrysanthemums.netlify.app/"
  }
];

// Filtered to most prestigious/recognizable ones
export const hackathonsData = [
  "Hack the North", "PennApps XII", "LA Hacks", "HackUTD",
  "Hacklytics", "Hack the Valley", "Pearl Hacks", "Technica",
  "HackHers", "AngelHacks", "MLH Hackathons"
];
