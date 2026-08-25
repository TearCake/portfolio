import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  multimodal_ai,
  audio_visualizer,
  picassa,
  deeplearning_ai,
  udemy,
  cdac,
} from "../assets";

export const personalInfo = {
  name: "Aditya Vinayak Chavan",
  role: "AI & Software Engineer",
  email: "adityachavan1357@gmail.com",
  phone: "+91 84240-45821",
  location: "Dombivli, Mumbai, India",
  github: "https://github.com/TearCake",
  linkedin: "https://linkedin.com/in/aditya-chavan-500a59267",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI / ML Engineer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Cloud & MLOps",
    icon: creator,
  },
  {
    title: "Flutter Mobile Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Flutter Developer Intern",
    company_name: "DreamVentz (Remote, India)",
    icon: mobile,
    iconBg: "#383E56",
    date: "Jan 2026 - Apr 2026",
    points: [
      "Built and designed the initial Flutter UI prototype, including vendor listings, search, wishlist, cart, and booking workflows.",
      "Integrated Supabase for PostgreSQL database operations and dynamic data fetching across vendors, venues, and user-specific app data.",
      "Implemented custom package functionality that lets users choose services, vendors, and venues directly inside the app.",
      "Collaborated using Git, writing clean, modular Dart code and stateful reactive components.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Technology in Computer Engineering (Honours in Next-Gen AI)",
    institution_name: "Vidyalankar Institute of Technology (Mumbai, India)",
    icon: backend,
    iconBg: "#1d1836",
    date: "2023 - 2027",
    grade: "CGPA: 9.75 / 10.0 (Till Semester VI)",
  },
  {
    title: "Higher Secondary Certificate (HSC) - 12th",
    institution_name: "Model College (Dombivali, India)",
    icon: creator,
    iconBg: "#383E56",
    date: "2021 - 2023",
    grade: "Score: 84.00%",
  },
  {
    title: "Secondary School Certificate (SSC) - 10th",
    institution_name: "IES Chandrakant Patkar Vidyalaya (Dombivali, India)",
    icon: web,
    iconBg: "#1d1836",
    date: "2021",
    grade: "Score: 92.00%",
  },
];

const testimonials = [
  {
    testimonial:
      "Comprehensive professional specialization covering neural networks, deep learning architectures, CNNs, RNNs, transformer models, and production PyTorch training.",
    name: "PyTorch for Deep Learning Professional Certificate",
    designation: "Certified Deep Learning Specialist",
    company: "DeepLearning.AI",
    image: deeplearning_ai,
    link: "https://www.deeplearning.ai/certificates/ef5aab01-6140-4c54-81a1-5cf5836f111a",
  },
  {
    testimonial:
      "Mastery of modern React (v18/19), Next.js App Router, custom hooks, Redux, full-stack SSR/SSG patterns, and performance optimization.",
    name: "React - The Complete Guide (incl. Next.js)",
    designation: "Certified Full-Stack Developer",
    company: "Udemy",
    image: reactjs,
    link: "https://www.udemy.com/certificate/UC-efa9fcc6-1edf-427a-89e6-2438e1fecd28/",
  },
  {
    testimonial:
      "Advanced relational and NoSQL database management, schema design, ACID transactions, complex query tuning, indexing, and MongoDB document modeling.",
    name: "MySQL & MongoDB Certification",
    designation: "Certified Database Associate",
    company: "CDAC",
    image: cdac,
  },
];

const projects = [
  {
    name: "Multimodal Video Sentiment & Emotion Analysis",
    description:
      "Built a multimodal deep learning system predicting 3-class sentiment and 7-class emotion from video by fusing text, visual, and audio features using frozen BERT, 3D ResNet-18, and Mel-spectrogram 1D CNNs on the MELD dataset. Deployed end-to-end with AWS SageMaker, S3, and Next.js.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "bert & resnet",
        color: "green-text-gradient",
      },
      {
        name: "aws-sagemaker",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
    ],
    image: multimodal_ai,
    source_code_link: "https://github.com/TearCake/video-sentiment-model.git",
  },
  {
    name: "Audio Classifier & Visualizer",
    description:
      "Local-first audio classification and real-time visualization platform achieving 81.25% validation accuracy over 99 training steps. Provides inference pipelines delivering predictions, waveforms, spectrograms, and intermediate CNN feature-maps via FastAPI JSON endpoints and Next.js.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: audio_visualizer,
    source_code_link: "https://github.com/TearCake/audio-classifier.git",
  },
  {
    name: "Picassa – Social App & Image Editor",
    description:
      "Full-stack social media application featuring image sharing and a custom layer-based image editor built with the HTML5 Canvas API. Implemented JWT authentication, Express REST APIs, ImageKit CDN storage, Zustand and TanStack Query state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs & express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "canvas-api",
        color: "blue-text-gradient",
      },
    ],
    image: picassa,
    source_code_link: "https://github.com/TearCake/Picassa.git",
  },
];

export { services, technologies, experiences, education, testimonials, projects };
