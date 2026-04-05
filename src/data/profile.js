export const profile = {
  name: 'Anass Nassiri',
  title: 'AI Engineer',
  location: 'Milan, Italy',
  phone: '(+39) 351 309 5490',
  email: 'nassirri115@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anass-nassiri-5487051a3/',
  github: 'https://github.com/ANASS19',
  summary:
    'AI Engineer passionate about building intelligent systems that make a real impact. From machine learning and deep learning to LLMs, computer vision, and conversational AI — I thrive on turning complex AI concepts into practical, production-ready solutions. Always exploring the cutting edge of artificial intelligence.',
  education: [
    {
      degree: "Master's in Artificial Intelligence for Science and Technology",
      period: '09/2023 - Present',
      school:
        'University of Milano-Bicocca, University of Milan, University of Pavia | Milan, Italy',
    },
    {
      degree: "Bachelor's in Computer Science and Software Engineering",
      period: '09/2021 - 06/2022',
      school:
        'Cadi Ayyad University High School of Technology | Essaouira, Morocco',
    },
    {
      degree: 'University Diploma in Business Intelligence and Data Sciences',
      period: '09/2019 - 06/2021',
      school:
        'Cadi Ayyad University High School of Technology | Essaouira, Morocco',
    },
  ],
  experience: [
    {
      role: 'AI Engineer (Part-Time)',
      company: 'BitApp SRL',
      period: '04/2025 - 06/2025',
      location: 'Bologna, Italy',
      achievements: [
        'Designed and deployed conversational AI agents based on the ReAct paradigm.',
        'Built modular Retrieval-Augmented Generation pipelines with LangChain and Ollama.',
        'Developed stateful multi-agent architectures with LangGraph and memory orchestration.',
        'Implemented the Model Context Protocol to unify communication across agents and tools.',
        'Created FastAPI services that expose agent capabilities to external frontends and data layers.',
        'Optimized LLM inference with streaming, memory control, and intelligent tool routing.',
        'Collaborated cross-functionally to ship production-grade AI systems with Docker and Git.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'COMABOUT',
      period: '04/2022 - 06/2022',
      location: 'Marrakech, Morocco',
      achievements: [
        'Shipped a full-stack platform for fabric printing companies and designers.',
        'Implemented responsive React interfaces across web and mobile breakpoints.',
        'Developed RESTful services with Django REST Framework and designed MySQL schemas.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'OPLA TRAVEL',
      period: '07/2021 - 08/2021',
      location: 'Kenitra, Morocco',
      achievements: [
        'Built a React.js and Tailwind CSS web app for stock management.',
        'Developed Django REST APIs and delivered decision-ready data analyses.',
      ],
    },
  ],
  services: [
    {
      title: 'AI Systems Consulting',
      blurb: 'Blueprints for resilient, explainable AI ecosystems and product roadmaps.',
      icon: 'FiCpu',
    },
    {
      title: 'Conversational Agents & RAG',
      blurb: 'Designing LangChain/LangGraph copilots, retrieval workflows, and MCP tool meshes.',
      icon: 'FiMessageSquare',
    },
    {
      title: 'Applied Machine Learning',
      blurb: 'Computer vision, signal processing, and predictive modeling tuned for production.',
      icon: 'FiAperture',
    },
    {
      title: 'Full-Stack Engineering',
      blurb: 'React frontends, Django/REST backends, and cloud-native delivery pipelines.',
      icon: 'FiLayers',
    },
    {
      title: 'Tech Workshops & Mentoring',
      blurb: 'Upskilling teams on AI fundamentals, prompt engineering, and responsible deployment.',
      icon: 'FiUsers',
    },
  ],
  projects: [
    {
      name: 'LLMs and RAG Platform',
      description:
        'Full-stack conversational AI with LangChain RAG, CSV vector storage, and Ollama LLM powering a polished, ChatGPT-style interface.',
    },
    {
      name: 'Handwritten Digit Recognition',
      description:
        'CNN-based MNIST classifier with comparative experimentation across training pipelines and dataset preparation techniques.',
    },
    {
      name: 'Intelligent Monitoring & Control',
      description:
        'Machine-learning lemon defect detection leveraging MobileNetV2, custom CNNs, and Grad-CAM for real-time edge deployment.',
    },
    {
      name: 'Ambient Intelligence & Domotics Dataset',
      description:
        'Preprocessed HAR data for smart homes, exploring CNN, LSTM, and hybrid deep learning models with manual and automated features.',
    },
    {
      name: 'Advanced Human System Interfaces',
      description:
        'Prototyped multimodal biometric systems, affective computing, and BCI experiments integrating EEG, GSR, and 3D sensing.',
    },
    {
      name: 'Explainable Recommenders',
      description:
        'Investigated transparent ML and DL approaches for recommendation systems with explainability at the forefront.',
    },
    {
      name: 'Big Imaging & Signal Analytics',
      description:
        'Implemented techniques to process and analyze high-volume imaging and signal datasets at scale.',
    },
    {
      name: 'Embedded Intelligent Systems',
      description:
        'Integrated AI workflows into embedded platforms to deliver adaptive, on-device intelligence.',
    },
  ],
  skills: [
    {
      label: 'AI / ML',
      items: [
        'Python',
        'TensorFlow',
        'Keras',
        'Scikit-learn',
        'Machine Learning',
        'Deep Learning',
      ],
    },
    {
      label: 'NLP & LLMs',
      items: ['RAG', 'LangChain', 'LangGraph'],
    },
    {
      label: 'Signal & Vision',
      items: ['MATLAB', 'Computer Vision', 'OpenCV'],
    },
    {
      label: 'Web Engineering',
      items: [
        'Django',
        'Django REST Framework',
        'React.js',
        'Flask',
        'HTML',
        'Java',
        'Spring',
        'CSS',
        'Tailwind',
        'Sass',
      ],
    },
    {
      label: 'Data & Analytics',
      items: ['MySQL', 'SQL', 'Data Analysis', 'Data Mining', 'Data Visualization', 'R'],
    },
    {
      label: 'Tooling',
      items: [
        'Git',
        'Jupyter Notebook',
        'Matplotlib',
        'RESTful APIs',
        'Agile Collaboration',
      ],
    },
  ],
  certifications: [
    'Data Science (SoloLearn)',
    'Machine Learning (SoloLearn)',
    'Learn the Basics of Blockchain with Python (Codecademy)',
    'Data Analysis Track (Udacity)',
    'Full Stack Development Track (Udacity)',
  ],
  hackathons: [
    'ESTE.ma - Built battle-ready C-programmed robots from scratch.',
    '1337.ma Coding School - One-month low-level sprint across C, Linux, and shell.',
    'Reply Hackathons, UNIMIB - Co-created LLM-powered AI agents.',
  ],
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Proficient' },
    { name: 'French', level: 'Proficient' },
    { name: 'Italian', level: 'Basic' },
  ],
};


