// Add a project by adding an object. Everything below is PLACEHOLDER content:
// replace it with real work and real repository links before publishing.
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
    name: 'Document Q&A with Retrieval',
    category: 'Generative AI & LLM Applications',
    featured: true,
    status: 'Placeholder',
    summary: 'A retrieval-augmented question answering tool over a personal document set.',
    problem: 'Describe the real problem: who needs answers from documents, and why keyword search falls short.',
    architecture: 'Describe the actual pipeline: ingestion and chunking, embedding, vector store, retrieval, prompt assembly, answer generation.',
    stack: ['Python', 'TODO'],
    decisions: [
      'Chunking strategy: explain what you chose and what you compared it against.',
      'Evaluation: explain how you measured answer quality.',
      'Failure handling: explain what happens when retrieval finds nothing relevant.',
    ],
    repo: '', demo: '', images: [],
  },
  {
    slug: 'inference-api',
    name: 'Model Serving API',
    category: 'Backend & API Development',
    featured: true,
    status: 'Placeholder',
    summary: 'A small HTTP service that wraps a trained model with validation, logging and tests.',
    problem: 'Describe what the model does and why it needed a reliable interface.',
    architecture: 'Describe the layers: request validation, model loading, inference, response schema, logging.',
    stack: ['Python', 'TODO'],
    decisions: ['Why this framework.', 'How you test the endpoints.', 'How you handle slow or invalid requests.'],
    repo: '', demo: '', images: [],
  },
  {
    slug: 'ml-experiment-tracker',
    name: 'Model Comparison Notebook',
    category: 'AI & Machine Learning',
    featured: true,
    status: 'Placeholder',
    summary: 'A reproducible comparison of several models on one dataset.',
    problem: 'Describe the dataset, the prediction task and the question being answered.',
    architecture: 'Describe preprocessing, split strategy, models compared, metrics and how results are reported.',
    stack: ['Python', 'TODO'],
    decisions: ['Why these metrics.', 'How you prevented leakage.', 'What the results did and did not show.'],
    repo: '', demo: '', images: [],
  },
]
