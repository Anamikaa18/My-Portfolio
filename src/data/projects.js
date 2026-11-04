
export const CATEGORIES = [
  'AI & Machine Learning',
  'Generative AI & LLM Applications',
  'Backend & API Development',
  'Full-Stack Applications',
  'Automation & Developer Tools',
  'Research & Experiments',
]

export const projects = [
  {
    slug: 'document-qa-rag',
    name: 'Document Intelligence & RAG System',
    category: 'Generative AI & LLM Applications',
    featured: true,
    status: 'Created & Deployed',
    summary:
      'An AI-powered document question-answering system that helps users retrieve relevant information and get contextual answers from uploaded documents.',
    problem:
      'Finding specific information in lengthy documents can be time-consuming. This project explores how retrieval-augmented generation can make document-based information access faster and more intuitive.',
    architecture:
      'A document-processing and retrieval workflow that connects document content with an AI-powered question-answering interface.',
    stack: ['Python', 'RAG', 'LLMs', 'Vector Search'],
    decisions: [
      'Designed around document-based question answering.',
      'Focused on retrieving relevant context before generating answers.',
      'Explored practical applications of retrieval-augmented generation.',
    ],
    repo: '',
    demo: '',
    images: [],
  },
  {
    slug: 'inference-api',
    name: 'AI Model Serving API',
    category: 'Backend & API Development',
    featured: true,
    status: 'Created & Deployed',
    summary:
      'A backend API project designed to expose AI model inference capabilities through structured HTTP endpoints.',
    problem:
      'AI models need a reliable way to receive input and return predictions that other applications can consume. This project explores the integration of model inference into an API-based workflow.',
    architecture:
      'An API layer that accepts requests, processes inputs, invokes model inference, and returns structured responses.',
    stack: [
      'Python',
      'REST API',
      'Machine Learning',
      'Backend Development',
    ],
    decisions: [
      'Separated API responsibilities from model inference logic.',
      'Focused on structured request and response handling.',
      'Designed with integration into other applications in mind.',
    ],
    repo: '',
    demo: '',
    images: [],
  },
  {
    slug: 'ml-experiment-tracker',
    name: 'ML Experiment & Evaluation Platform',
    category: 'AI & Machine Learning',
    featured: true,
    status: 'Created & Deployed',
    summary:
      'An ML experimentation project focused on comparing model performance, evaluating results, and organizing experiments.',
    problem:
      'Comparing machine learning models requires consistent evaluation and clear records of experiment results. This project explores a structured approach to model experimentation.',
    architecture:
      'A model experimentation workflow covering dataset preparation, model execution, evaluation, and comparison of performance metrics.',
    stack: [
      'Python',
      'Machine Learning',
      'Model Evaluation',
      'Data Analysis',
    ],
    decisions: [
      'Focused on measurable model performance.',
      'Used evaluation as a central part of the experimentation workflow.',
      'Emphasized reproducibility and comparison of results.',
    ],
    repo: '',
    demo: '',
    images: [],
  },
  {
    slug: 'ai-resume-analyzer',
    name: 'AI Resume Analyzer',
    category: 'Generative AI & LLM Applications',
    featured: false,
    status: 'In Progress',
    summary:
      'An AI-powered application concept for analyzing resumes, identifying relevant skills, and evaluating alignment with job descriptions.',
    problem:
      'Candidates often find it difficult to understand how well their resumes match specific job requirements. This project aims to make resume analysis and skill-gap identification more accessible.',
    architecture:
      'A planned workflow for extracting resume information, analyzing job descriptions, and generating structured feedback.',
    stack: [
      'Python',
      'AI',
      'Natural Language Processing',
      'LLMs',
    ],
    decisions: [
      'Designed around resume and job-description analysis.',
      'Prioritized understandable feedback and skill-gap identification.',
      'Planned with practical career-related use cases in mind.',
    ],
    repo: '',
    demo: '',
    images: [],
  },
  {
    slug: 'ai-research-assistant',
    name: 'AI Research Assistant',
    category: 'AI & Machine Learning',
    featured: false,
    status: 'In Progress',
    summary:
      'An AI-assisted research application intended to help organize information, explore technical topics, and summarize research material.',
    problem:
      'Research often involves working with large amounts of information from different sources. This project explores ways AI can support information organization and research workflows.',
    architecture:
      'A planned AI-assisted workflow for processing research material, extracting relevant information, and presenting concise summaries.',
    stack: [
      'Python',
      'AI',
      'Natural Language Processing',
      'Research Automation',
    ],
    decisions: [
      'Focused on research productivity and information discovery.',
      'Designed to support structured summaries of technical material.',
      'Exploring practical applications of AI-assisted research.',
    ],
    repo: '',
    demo: '',
    images: [],
  },

  // FULL-STACK APPLICATIONS
  {
    slug: 'freelance-web-development',
    name: 'Freelance Web Development & Digital Solutions',
    category: 'Full-Stack Applications',
    featured: true,
    status: 'Professional Experience',
    summary:
      'Freelance website development and digital solution work for local businesses and online clients, translating client requirements into practical web experiences.',
    problem:
      'Businesses and individual clients need accessible online solutions that communicate their services and provide a useful experience to visitors.',
    architecture:
      'Client-oriented web development involving requirement understanding, interface development, implementation, testing, and delivery.',
    stack: [
      'Web Development',
      'Frontend Development',
      'Website Design',
      'Client Requirements',
    ],
    decisions: [
      'Focused on understanding client needs before implementation.',
      'Considered usability and responsive presentation.',
      'Worked on practical digital solutions for different client requirements.',
    ],
    repo: '',
    demo: '',
    images: [],
  },

  // AUTOMATION & DEVELOPER TOOLS
  {
    slug: 'python-workflow-automation',
    name: 'Python Workflow Automation Toolkit',
    category: 'Automation & Developer Tools',
    featured: false,
    status: 'Planned',
    summary:
      'A planned collection of Python utilities for automating repetitive data-processing, file-management, and everyday development tasks.',
    problem:
      'Repeated manual operations can consume time and introduce avoidable errors. Small, reusable automation tools can make routine workflows more consistent.',
    architecture:
      'A modular collection of scripts with input validation, reusable functions, structured data handling, and error management.',
    stack: [
      'Python',
      'File Handling',
      'CSV & Excel Processing',
      'Automation',
    ],
    decisions: [
      'Prioritized practical and reusable automation tasks.',
      'Planned clear input validation and error handling.',
      'Designed the toolkit to support independent utilities.',
    ],
    repo: '',
    demo: '',
    images: [],
  },

  // RESEARCH & EXPERIMENTS
  {
    slug: 'ai-counsellor-research',
    name: 'AI-Counsellor Using Emerging Technique',
    category: 'Research & Experiments',
    featured: true,
    status: 'Published Research',
    summary:
      'A published research paper exploring an AI-based counselling chatbot using emerging techniques in conversational AI and natural language processing.',
    problem:
      'Conversational systems need to interpret user messages and identify sentiment, intent, and relevant entities to generate meaningful responses.',
    architecture:
      'The research explores a conversational AI approach involving sentiment analysis, intent recognition, and entity recognition for an AI counselling chatbot.',
    stack: [
      'Artificial Intelligence',
      'Machine Learning',
      'Natural Language Processing',
      'Sentiment Analysis',
      'Chatbots',
    ],
    decisions: [
      'Explored AI techniques for conversational interaction.',
      'Examined sentiment and intent recognition in user messages.',
      'Studied entity recognition as part of conversational understanding.',
    ],
    repo: '',
    demo: 'https://ijsrst.com/index.php/home/article/view/IJSRST24113237',
    images: [],
  },
]
