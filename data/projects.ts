export type ProjectCategory = 'All' | 'Web' | 'AI' | 'Full-Stack'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: ProjectCategory[]
  image?: string // Optional - if not provided, a gradient placeholder will be shown
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  date: string
  highlights: string[]
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
    longDescription: 'A comprehensive e-commerce platform built with Next.js and .NET Core. Features include user authentication, product catalog management, shopping cart, checkout process with multiple payment gateways, order tracking, and admin dashboard. The platform supports real-time inventory updates and includes a recommendation engine for personalized shopping experiences.',
    category: ['Full-Stack', 'Web'],
    image: '/images/projects/ecommerce.jpg',
    techStack: ['Next.js', 'TypeScript', '.NET Core', 'PostgreSQL', 'Redis', 'Stripe API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/waseem0522/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.example.com',
    featured: true,
    date: '2024-01-15',
    highlights: [
      'Real-time inventory management',
      'Multiple payment gateway integration',
      'Admin dashboard with analytics',
      'Responsive design for all devices',
    ],
  },
  {
    id: '2',
    title: 'AI-Powered Chat Assistant',
    description: 'An intelligent chatbot using natural language processing to provide contextual responses.',
    longDescription: 'A sophisticated AI chatbot application leveraging OpenAI GPT models and custom fine-tuning. The system includes conversation history management, context awareness, multi-language support, and integration with various APIs for extended functionality. Features sentiment analysis and response quality scoring.',
    category: ['AI', 'Full-Stack'],
    image: '/images/projects/ai-chatbot.jpg',
    techStack: ['Python', 'PyTorch', 'React', 'Node.js', 'MongoDB', 'OpenAI API', 'FastAPI'],
    githubUrl: 'https://github.com/waseem0522/ai-chatbot',
    liveUrl: 'https://ai-chatbot-demo.example.com',
    featured: true,
    date: '2024-02-20',
    highlights: [
      'Natural language processing',
      'Context-aware conversations',
      'Multi-language support',
      'Real-time sentiment analysis',
    ],
  },
  {
    id: '3',
    title: 'Task Management Dashboard',
    description: 'A collaborative project management tool with real-time updates and team collaboration features.',
    longDescription: 'A modern task management application built with React and Node.js. Features include drag-and-drop task organization, real-time collaboration, file attachments, comments, notifications, and comprehensive project analytics. The app uses WebSockets for real-time updates and includes a mobile-responsive design.',
    category: ['Web', 'Full-Stack'],
    image: '/images/projects/task-manager.jpg',
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'Material-UI'],
    githubUrl: 'https://github.com/waseem0522/task-manager',
    liveUrl: 'https://task-manager-demo.example.com',
    featured: false,
    date: '2023-11-10',
    highlights: [
      'Real-time collaboration',
      'Drag-and-drop interface',
      'Team analytics dashboard',
      'Mobile-responsive design',
    ],
  },
  {
    id: '4',
    title: 'Image Classification Model',
    description: 'Deep learning model for image classification using convolutional neural networks.',
    longDescription: 'A custom image classification system built with PyTorch and TensorFlow. The model can classify images across 1000 categories with high accuracy. Includes a web interface for uploading images and getting predictions, model training pipeline, and performance visualization tools. The system supports transfer learning and fine-tuning.',
    category: ['AI'],
    image: '/images/projects/image-classifier.jpg',
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'Flask', 'OpenCV', 'NumPy', 'Pandas'],
    githubUrl: 'https://github.com/waseem0522/image-classifier',
    liveUrl: 'https://image-classifier-demo.example.com',
    featured: true,
    date: '2024-03-05',
    highlights: [
      'CNN-based architecture',
      'Transfer learning support',
      'Web-based prediction interface',
      'High accuracy across 1000 categories',
    ],
  },
  {
    id: '5',
    title: 'Social Media Analytics Dashboard',
    description: 'Real-time analytics dashboard for tracking social media engagement and performance metrics.',
    longDescription: 'A comprehensive social media analytics platform that aggregates data from multiple platforms including Twitter, Instagram, and LinkedIn. Features include real-time metrics, sentiment analysis, engagement tracking, content performance analysis, and automated reporting. Built with modern web technologies for fast data visualization.',
    category: ['Web', 'Full-Stack'],
    image: '/images/projects/social-analytics.jpg',
    techStack: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Chart.js', 'Twitter API', 'Instagram API'],
    githubUrl: 'https://github.com/waseem0522/social-analytics',
    liveUrl: 'https://social-analytics-demo.example.com',
    featured: false,
    date: '2023-09-22',
    highlights: [
      'Multi-platform integration',
      'Real-time data visualization',
      'Sentiment analysis',
      'Automated reporting',
    ],
  },
  {
    id: '6',
    title: 'Predictive Maintenance System',
    description: 'AI-powered system for predicting equipment failures using machine learning algorithms.',
    longDescription: 'An industrial IoT solution that uses machine learning to predict equipment failures before they occur. The system collects sensor data, processes it through trained models, and provides actionable insights. Features include anomaly detection, failure probability scoring, maintenance scheduling recommendations, and historical trend analysis.',
    category: ['AI', 'Full-Stack'],
    image: '/images/projects/predictive-maintenance.jpg',
    techStack: ['Python', 'TensorFlow', 'React', '.NET Core', 'InfluxDB', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/waseem0522/predictive-maintenance',
    liveUrl: 'https://predictive-maintenance-demo.example.com',
    featured: true,
    date: '2024-01-30',
    highlights: [
      'Machine learning predictions',
      'IoT sensor integration',
      'Anomaly detection',
      'Maintenance scheduling automation',
    ],
  },
  {
    id: '7',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills.',
    longDescription: 'A beautifully designed portfolio website built with Next.js and Tailwind CSS. Features include dark mode support, smooth animations, responsive design, SEO optimization, and contact form integration. The site showcases projects, skills, and professional experience with an intuitive user interface.',
    category: ['Web'],
    image: '/images/projects/portfolio.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
    githubUrl: 'https://github.com/waseem0522/portfolio',
    liveUrl: 'https://yourportfolio.example.com',
    featured: false,
    date: '2023-12-01',
    highlights: [
      'Dark mode support',
      'Smooth animations',
      'SEO optimized',
      'Fully responsive',
    ],
  },
  {
    id: '8',
    title: 'Recommendation Engine',
    description: 'Machine learning-based recommendation system for personalized content suggestions.',
    longDescription: 'A sophisticated recommendation engine that uses collaborative filtering and content-based filtering algorithms. The system analyzes user behavior, preferences, and item features to provide personalized recommendations. Includes A/B testing framework, performance monitoring, and continuous learning capabilities.',
    category: ['AI'],
    image: '/images/projects/recommendation-engine.jpg',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'Redis', 'PostgreSQL'],
    githubUrl: 'https://github.com/waseem0522/recommendation-engine',
    liveUrl: 'https://recommendation-demo.example.com',
    featured: false,
    date: '2023-10-15',
    highlights: [
      'Collaborative filtering',
      'Content-based recommendations',
      'A/B testing framework',
      'Real-time personalization',
    ],
  },
]

