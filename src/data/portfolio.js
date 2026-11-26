export const profile = {
  name: 'Lokesh P',
  title: 'Senior Software Engineer | Python / Backend & AI',
  location: 'Chennai, Tamil Nadu',
  email: 'lokeshshc16@gmail.com',
  phone: '+918428515247',
  phoneDisplay: '+91 84285 15247',
  phoneAlt: '+918072876011',
  linkedin: 'https://linkedin.com/in/lokesh0703',
  github: 'https://github.com/LOKESHLOKI07',
  photo: '/images/profile/lokesh-profile.png',
  resumeAi: '/LOKESH_P_AI_Resume.pdf',
  resumeFullStack: '/LOKESH_P_full_stack_Resume.pdf',
  summary:
    'Senior Software Engineer with 5 years of experience building scalable Python backends, production AI/ML systems, and Generative AI solutions. Strong expertise in Django, FastAPI, RAG, LangChain, LayoutLMv3, and Vertex AI.',
  about: [
    'Senior Software Engineer with 5 years of experience building scalable Python backend systems, full-stack applications, and production AI/ML and Generative AI solutions. Strong expertise in Python, Django, FastAPI, REST APIs, PostgreSQL, LangChain, LangGraph, RAG pipelines, and LLM integration.',
    'Hands-on experience with Computer Vision, Document AI, OCR, YOLO, and LayoutLMv3, integrating ML inference pipelines into production applications on Google Cloud Vertex AI and Cloud Run.',
    'Whether I\'m shipping backend services, AI agents, or annotation platforms, I bring a commitment to clean architecture and production-ready delivery. I look forward to bringing these skills to your next project.',
  ],
  metaDescription:
    'Lokesh P — Senior Software Engineer | Python / Backend & AI. Portfolio featuring RAG, LangChain, LayoutLMv3, and Vertex AI production systems.',
}

export const experiences = [
  {
    title: 'Senior Software Developer',
    company: 'NARDIL Enterprise Private Limited',
    period: 'June 2025 - Now',
    location: 'Chennai, Tamil Nadu',
    description:
      'Developed an AI-powered QR-based troubleshooting assistant using Python, FastAPI, LangChain, and RAG. Built machine-specific embedding and retrieval pipelines using FAISS and ChromaDB. Developed LayoutLMv3 and OCR-based ML inference pipelines on Google Cloud Vertex AI and Cloud Run for structural drawing analysis, integrated into a production rebar take-off platform with FastAPI, PostgreSQL, and Next.js.',
  },
  {
    title: 'Senior Software Developer',
    company: 'Getmax Healthcare Pvt Ltd',
    period: 'August 2023 - June 2025',
    location: 'Chennai, Tamil Nadu',
    description:
      'Developed and maintained healthcare ERP applications using Django, React, and Frappe. Customized Frappe modules, business workflows, and REST APIs for enterprise operations. Built and optimized backend services, reporting flows, and integrations that supported day-to-day clinical and administrative processes.',
  },
  {
    title: 'Python Developer',
    company: 'Futurenet Technologies',
    period: 'September 2022 - July 2023',
    location: 'Chennai, Tamil Nadu',
    description:
      'Designed and developed full-stack applications using Django and JavaScript frameworks. Integrated and optimized SQL databases, ensuring efficient data management.',
  },
  {
    title: 'Programmer Trainee (Python Developer)',
    company: 'Hawkshaw Developers',
    period: 'November 2021 - August 2022',
    location: 'Chennai, Tamil Nadu',
    description:
      'Built and maintained dynamic web applications. Assisted in cloud deployment and database management for high-performance applications.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering (B.E.) – Electrical and Electronics Engineering',
    school: 'Anna University',
    period: '2016 – 2020',
    description: 'Bachelor of Engineering in Electrical and Electronics Engineering.',
  },
]

export const certifications = [
  {
    title: "CS50's Introduction to Artificial Intelligence (CS50 AI)",
    issuer: 'HarvardX',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
  },
  {
    title: 'React',
    issuer: 'Udemy',
  },
]

export const projects = [
  {
    title: 'AI-Powered Rebar Take-Off Platform',
    description:
      'Production AI/ML system for automated rebar quantity take-off from structural drawings using Document AI, OCR, LayoutLMv3, and computer vision on Vertex AI and Cloud Run. Built inference pipelines for Column, Foundation, Elevation, and Lap schedules with measurement and calibration mapped to real-world quantities.',
    image: '/images/projects/rebar-take-off.png',
    link: null,
    impact: '100–300+ entities per drawing · ~3s warm-path inference',
    tech: ['Python', 'LayoutLMv3', 'Vertex AI', 'FastAPI', 'Next.js', 'PostgreSQL'],
  },
  {
    title: 'AI-Powered IT Helpdesk System',
    description:
      'AI helpdesk with LangGraph multi-agent workflows for knowledge retrieval, access validation, reasoning, and ticket creation. ChromaDB semantic search, human-in-the-loop approval, and OpenTelemetry observability.',
    image: '/images/projects/it-helpdesk.png',
    link: null,
    impact: 'Multi-agent RAG workflows with HITL ticket creation',
    tech: ['Python', 'LangGraph', 'RAG', 'ChromaDB', 'OpenTelemetry'],
  },
  {
    title: 'Company Registration and Landing Page Management',
    description:
      'Web-based system for company registration and landing page management. Businesses register, submit branding details, and receive a dedicated landing page upon admin approval.',
    image: '/images/projects/company-registration.png',
    link: 'https://pngmeetup.com/',
    impact: 'Live product for company onboarding & landing pages',
    tech: ['Django', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Automated Report Generation and Data Visualization for OTRS',
    description:
      'Django web app to automate OTRS report generation with an interactive dashboard and data visualization, cutting manual reporting effort dramatically.',
    image: '/images/projects/otrs-dashboard.png',
    link: null,
    impact: '90% reduction in manual reporting effort',
    tech: ['Python', 'Django', 'MySQL', 'Chart.js'],
  },
  {
    title: 'Customer EPO Analysis and Visualization',
    description:
      'Analytics platform to analyze customer EPO data, detect anomalies, and visualize trends with interactive Dash & Plotly dashboards.',
    image: '/images/projects/epo-analytics.png',
    link: null,
    impact: 'Real-time anomaly monitoring dashboards',
    tech: ['Python', 'Pandas', 'Dash', 'Plotly', 'MySQL'],
  },
]

export const technologies = [
  {
    category: 'Languages',
    techs: [
      { name: 'Python', icon: '🐍' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'JavaScript', icon: '📜' },
    ],
  },
  {
    category: 'Backend',
    techs: [
      { name: 'Django', icon: '🐍' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Flask', icon: '🧪' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'Microservices', icon: '🧩' },
    ],
  },
  {
    category: 'AI & Generative AI',
    techs: [
      { name: 'RAG', icon: '🔎' },
      { name: 'LangChain', icon: '🔗' },
      { name: 'LangGraph', icon: '🕸️' },
      { name: 'LLM Integration', icon: '🤖' },
      { name: 'FAISS', icon: '📚' },
      { name: 'ChromaDB', icon: '🧬' },
    ],
  },
  {
    category: 'ML & Computer Vision',
    techs: [
      { name: 'LayoutLMv3', icon: '📄' },
      { name: 'OCR', icon: '👁️' },
      { name: 'YOLO', icon: '🎯' },
      { name: 'Document AI', icon: '📑' },
      { name: 'Vertex AI', icon: '☁️' },
    ],
  },
  {
    category: 'Frontend',
    techs: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Zustand', icon: '🐻' },
    ],
  },
  {
    category: 'Database',
    techs: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'SQL', icon: '🗄️' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    techs: [
      { name: 'GCP', icon: '☁️' },
      { name: 'Cloud Run', icon: '🚀' },
      { name: 'AWS', icon: '🟠' },
      { name: 'Azure', icon: '🔵' },
      { name: 'Git', icon: '📦' },
    ],
  },
  {
    category: 'ERP & Tools',
    techs: [
      { name: 'Frappe', icon: '📊' },
      { name: 'Pandas', icon: '📈' },
      { name: 'Dash', icon: '📉' },
      { name: 'Plotly', icon: '📊' },
    ],
  },
]
