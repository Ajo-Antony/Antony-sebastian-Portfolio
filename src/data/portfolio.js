// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Antony Sebastian",
  title: "MCA Graduate · Generative AI & MLOps",
  tagline: "Building scalable AI systems that matter.",
  email: "ajoantony19@gmail.com",
  phone: "+91 9496940988",
  location: "Kerala, India",
  linkedin: "https://linkedin.com/in/antony-sebastian-363151236",
  github: "https://github.com/", // ← Add your GitHub URL
  availability: "Immediate Joiner",
  summary:
    "MCA graduate specializing in Generative AI and MLOps, with hands-on experience building, deploying, and monitoring machine learning applications. Strong foundation in Python, ML pipelines, REST APIs, and GenAI systems using Cohere and cloud-based AI platforms.",
};

// ============================================================
// EXPERIENCE — Add new jobs here
// ============================================================
export const experience = [
  {
    id: 1,
    company: "Logix Space Technologies Pvt. Ltd.",
    role: "Web Application Developer Intern",
    period: "Jan 2025 – Apr 2025",
    location: "Kerala, India",
    points: [
      "Developed backend modules using Python and MySQL, supporting REST-based workflows",
      "Worked on database-driven applications and API integrations",
      "Collaborated with developers to improve application reliability and performance",
    ],
  },
  {
    id: 2,
    company: "Techbyheart Trivandrum LLP",
    role: "Cyber Security & Ethical Hacking Intern",
    period: "Jun 2024 – Jul 2024",
    location: "Trivandrum, India",
    points: [
      "Learned security fundamentals, vulnerability assessment, and ethical hacking concepts",
      "Gained exposure to system security, risk analysis, and mitigation techniques",
    ],
  },
  {
    id: 3,
    company: "Skill Vertex",
    role: "Web Development Intern",
    period: "Oct 2023 – Dec 2023",
    location: "Bengaluru, India",
    points: [
      "Built responsive web applications using HTML, CSS, JavaScript, and backend integration",
    ],
  },
];

// ============================================================
// PROJECTS — Add new projects here
// ============================================================
export const projects = [
{
    id: 6,
    title: "MediLink",
    subtitle: "Smart Pharmacy Network & E-Pharmacy Platform",
    tags: ["Python", "Flask", "SQLAlchemy", "MySQL", "Bootstrap", "JavaScript", "REST API"],
    description:
      "Full-stack pharmacy management system connecting customers with verified pharmacies. Features medicine search across pharmacies, voice-activated ordering, prescription upload with OCR processing, inventory management, and order tracking with real-time status updates.",
    github: "",
    live: "",
    featured: true,
  },
  {
    id: 7,
    title: "Spice Caterings",
    subtitle: "Full-Stack Food Ordering & Catering Platform",
    tags: ["Python", "Flask", "SQLAlchemy", "MySQL", "Bootstrap", "JavaScript", "Chart.js", "REST API"],
    description:
      "End-to-end restaurant management system with multi-role portals (Admin/Customer). Features dynamic menu management, surplus deal system with automatic notifications, nutritional information display, real-time order tracking, table reservations, and customer review moderation.",
    github: "",
    live: "",
    featured: false,
  },
  {
    id: 1,
    title: "CareGuides",
    subtitle: "ML-based Autism Diagnosis & Therapy Recommendation",
    tags: ["Python", "Flask", "Machine Learning", "MLOps", "REST API"],
    description:
      "End-to-end ML system to predict Autism Spectrum Disorder (ASD) using screening data with a second model to recommend personalized therapy options. Implemented modular pipelines and deployment-ready architecture.",
    github: "", // ← Add project GitHub link
    live: "",   // ← Add live demo link if any
    featured: true,
  },
  {
    id: 2,
    title: "SmartHire",
    subtitle: "GenAI-powered Resume Screening & ATS System",
    tags: ["Python", "Streamlit", "Cohere", "GenAI", "NLP"],
    description:
      "GenAI-based resume analysis platform with ATS scoring, skill gap analysis, keyword extraction, and HR-style feedback. Designed scalable inference workflows aligned with real-world recruitment systems.",
    github: "",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "RizzBot",
    subtitle: "Real-Time Generative AI Chatbot",
    tags: ["Flask", "Cohere API", "Prompt Engineering", "NLP"],
    description:
      "Real-time chatbot focused on prompt engineering, response latency optimization, and NLP experimentation using Cohere's conversational AI.",
    github: "",
    live: "",
    featured: false,
  },
  {
    id: 4,
    title: "Ezy Parking",
    subtitle: "Smart Parking Management System",
    tags: ["Full-Stack", "MySQL", "Python", "Flask"],
    description:
      "Full-stack parking management system with real-time availability, booking, MySQL-backed workflows, pricing logic, and user management.",
    github: "",
    live: "",
    featured: false,
  },
  {
    id: 5,
    title: "Respire Scan",
    subtitle: "AI-powered Chest X-Ray Multi-Disease Detection System",
    tags: ["Python", "Flask", "TensorFlow", "PHP", "MySQL", "REST API"],
    description:
      "Multi-class CNN classifier trained on medical imaging data. Full-stack implementation with secure user roles (Admin/Doctor/Patient), confidence scoring, scan history tracking, and printable medical reports.",
    github: "",  // ← Add your GitHub link if you have one
    live: "",    // ← Add live demo link if any
    featured: true,
  },
];

// ============================================================
// SKILLS — Add / remove skills here
// ============================================================
export const skills = [
  {
    category: "AI & Machine Learning",
    items: ["Python", "Machine Learning", "Deep Learning", "NLP", "Generative AI"],
  },
  {
    category: "GenAI Tools",
    items: ["Cohere API", "Prompt Engineering", "Embeddings", "Vector Search", "RAG"],
  },
  {
    category: "MLOps & DevOps",
    items: ["Model Deployment", "Docker (basics)", "Kubernetes (basics)", "CI/CD", "Data Drift"],
  },
  {
    category: "Cloud & Frameworks",
    items: ["Azure Fundamentals", "Vertex AI", "Flask", "FastAPI", "Streamlit"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL", "Vector Databases"],
  },
];

// ============================================================
// CERTIFICATIONS — Add new certs here
// ============================================================
export const certifications = [

  { 
    issuer: "Google", 
    title: "Business Intelligence", 
    link: "https://www.coursera.org/account/accomplishments/specialization/827YHS8POEJ6" 
  },
  // ... rest of your existing certifications

  { issuer: "Amazon Web Services", title: "Generative AI and AI Agents with Amazon Bedrock" },
  { issuer: "Amazon Web Services", title: "Amazon Bedrock Customization, Optimization & Automation" },
  { issuer: "IBM", title: "Advanced RAG with Vector Databases and Retrievers" },
  { issuer: "IBM", title: "Vector Databases for RAG" },
  { issuer: "IBM", title: "Build RAG Applications" },
  { issuer: "IBM", title: "Develop Generative AI Applications" },
  { issuer: "IBM", title: "Generative AI: Prompt Engineering" },
  { issuer: "IBM", title: "Generative AI: Introduction and Applications" },
  { issuer: "IBM", title: "Python for Data Science, AI & Development" },
  { issuer: "IBM", title: "Introduction to Software Engineering" },
  { issuer: "Anthropic", title: "AI Fluency: Framework Foundations" },
  { issuer: "WorldQuant University", title: "Applied AI Lab: Deep Learning for Computer Vision" },
  { issuer: "freeCodeCamp", title: "Machine Learning with Python" },
  { issuer: "PMI", title: "Fundamentals of Agile Project Management" },
];

// ============================================================
// EDUCATION
// ============================================================
export const education = [
  {
    institution: "Saintgits College of Engineering (Autonomous)",
    degree: "Integrated MCA",
    university: "APJ Abdul Kalam Technological University",
    period: "2020 – 2025",
    location: "Kerala",
    cgpa: "7.83 / 10",
    courses: ["Machine Learning", "Data Structures", "Databases", "Software Engineering"],
  },
];
