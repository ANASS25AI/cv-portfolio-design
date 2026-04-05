export const profile = {
  name: 'Anass Nassiri',
  title: 'AI Engineer | ML Engineer',
  location: 'Milan, Italy',
  phone: '(+39) 351 309 5490',
  email: 'nassirri115@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anass-nassiri-5487051a3/',
  github: 'https://github.com/ANASS25AI',
  summary:
    'AI Engineer and Master\'s student in Artificial Intelligence with hands-on experience in machine learning, deep learning, computer vision, LLM applications, RAG systems, and AI agents. Skilled in building intelligent applications from experimentation to deployment using Python, FastAPI, Docker, LangChain, and cloud-based workflows.',
  education: [
    {
      degree: "Master's Degree in Artificial Intelligence for Science and Technology",
      period: '09/2023 - Present',
      school: 'University of Milano-Bicocca, University of Milan, University of Pavia | Italy',
      logos: ['/logo_university of milano-bicocca.png', '/unimi.png', '/logo_unipv_amaranto.png'],
    },
    {
      degree: "Bachelor's Degree in Computer Science and Software Engineering",
      period: '09/2019 - 06/2022',
      school: 'Cadi Ayyad University, Higher School of Technology | Essaouira, Morocco',
      logos: ['/ESTE.jpeg'],
    },
    {
      degree: 'University Diploma in Business Intelligence and Data Science',
      period: '09/2019 - 06/2021',
      school: 'Cadi Ayyad University, Higher School of Technology | Essaouira, Morocco',
      logos: ['/ESTE.jpeg'],
    },
  ],
  experience: [
    {
      role: 'Co-Founder',
      company: 'Moroccan Artificial Intelligence (MAI)',
      period: '2026 - Present',
      location: 'Morocco',
      logo: '/logo_MAI.png',
      website: 'https://moroccanai.dev/',
      achievements: [
        'Co-founded Moroccan Artificial Intelligence (MAI), a startup building practical AI products and initiatives for Moroccan and international teams.',
        'Leading AI product strategy, solution architecture, and delivery partnerships from concept to deployment.',
        'Building AI-powered solutions and fostering the AI ecosystem in Morocco and beyond.',
      ],
    },
    {
      role: 'AI Engineer (Part-Time)',
      company: 'BitApp SRL',
      period: '04/2025 - 10/2025',
      location: 'Bologna, Italy',
      logo: '/bitapp.jpeg',
      achievements: [
        'Designed and developed conversational AI agents using ReAct-based workflows for structured, tool-augmented, and multi-step interactions.',
        'Built modular Retrieval-Augmented Generation (RAG) pipelines using LangChain, Ollama, and vector-based retrieval for domain-specific question answering.',
        'Developed stateful multi-agent systems with LangGraph, including memory handling, routing logic, orchestration of tools, and context-aware control flow.',
        'Implemented FastAPI services to expose AI capabilities through APIs for integration with external applications and user interfaces.',
        'Worked on LLM inference optimization, streaming responses, prompt orchestration, and context management.',
        'Contributed to production-oriented AI systems using Docker, Git, and deployment-oriented engineering workflows.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'COMABOUT',
      period: '04/2022 - 06/2022',
      location: 'Marrakech, Morocco',
      logo: '/comabout.jpg',
      achievements: [
        'Designed and developed a full-stack platform for fabric printing companies and designers.',
        'Built responsive front-end interfaces for web applications using React.',
        'Developed REST APIs with Django REST Framework and designed relational database schemas in MySQL.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'OPLA TRAVEL',
      period: '07/2021 - 08/2021',
      location: 'Kenitra, Morocco',
      achievements: [
        'Developed a web application for stock management using React.js and Tailwind CSS.',
        'Built backend APIs with Django REST Framework and supported data analysis tasks.',
      ],
    },
  ],
  services: [
    {
      title: 'AI & ML Development',
      blurb: 'End-to-end machine learning solutions from data preprocessing to model deployment and monitoring.',
      icon: 'FiCpu',
    },
    {
      title: 'LLM & RAG Systems',
      blurb: 'Building conversational AI agents, retrieval-augmented generation pipelines, and LLM-powered applications.',
      icon: 'FiMessageSquare',
    },
    {
      title: 'Computer Vision',
      blurb: 'Image classification, object detection, and visual AI systems for real-world applications.',
      icon: 'FiAperture',
    },
    {
      title: 'Full-Stack Development',
      blurb: 'React frontends, FastAPI/Django backends, and cloud-native deployment pipelines.',
      icon: 'FiLayers',
    },
    {
      title: 'AI Consulting',
      blurb: 'Strategic guidance on AI adoption, architecture design, and implementation roadmaps.',
      icon: 'FiUsers',
    },
  ],
  projects: [
    {
      name: 'LLM and RAG Assistant',
      description:
        'Full-stack conversational AI application using LangChain, Ollama, retrieval pipelines, and vector-based search for document-aware question answering with a React chat interface.',
    },
    {
      name: 'Lemon Defect Detection System',
      description:
        'Computer vision system for lemon defect detection using fine-tuned MobileNetV2 and custom CNN with Grad-CAM visualizations for explainability.',
    },
    {
      name: 'Human Activity Recognition',
      description:
        'Deep learning models (CNN, LSTM, hybrid architectures) for human activity recognition in smart home and ambient intelligence applications.',
    },
    {
      name: 'Handwritten Digit Recognition',
      description:
        'Convolutional neural network for handwritten digit classification on MNIST with data preprocessing, training, and evaluation.',
    },
    {
      name: 'Multimodal Biometric Systems',
      description:
        'Projects involving multimodal biometrics, affective computing, and brain-computer interaction using EEG, GSR, and 3D camera data.',
    },
  ],
  skills: [
    {
      label: 'AI / Machine Learning',
      items: [
        'Machine Learning',
        'Deep Learning',
        'Scikit-learn',
        'TensorFlow',
        'Keras',
        'CNNs',
        'LSTMs',
        'Feature Engineering',
      ],
    },
    {
      label: 'LLMs / NLP / Agents',
      items: ['LangChain', 'LangGraph', 'RAG', 'Ollama', 'Prompt Engineering', 'AI Agents', 'ReAct'],
    },
    {
      label: 'Computer Vision',
      items: ['OpenCV', 'Image Processing', 'CNN-based Vision', 'Grad-CAM', 'Visual Classification'],
    },
    {
      label: 'Backend / APIs',
      items: ['FastAPI', 'Flask', 'Django', 'Django REST Framework', 'REST APIs'],
    },
    {
      label: 'Frontend',
      items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'SASS'],
    },
    {
      label: 'Cloud / DevOps',
      items: ['Docker', 'AWS Fundamentals', 'Linux', 'Git', 'Deployment Workflows'],
    },
    {
      label: 'Programming',
      items: ['Python', 'R', 'SQL', 'Java', 'JavaScript'],
    },
    {
      label: 'Data & Tools',
      items: ['MySQL', 'Data Analysis', 'Data Mining', 'MATLAB', 'Jupyter', 'Matplotlib'],
    },
  ],
  certifications: [
    'Data Science - SoloLearn',
    'Machine Learning - SoloLearn',
    'Learn the Basics of Blockchain with Python - Codecademy',
    'Data Analysis Track - Udacity',
    'Full Stack Development Track - Udacity',
  ],
  hackathons: [
    'Reply Hackathons, University of Milano-Bicocca - Built AI agent prototypes powered by LLMs',
    '1337 Coding School - Intensive training in C, Linux, and Shell programming',
    'ESTE.ma - Programmed robots in C for task-oriented problem solving',
  ],
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Professional' },
    { name: 'French', level: 'Professional' },
    { name: 'Italian', level: 'Intermediate (B1)' },
  ],
};


