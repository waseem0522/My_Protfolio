export type Framework = 'PyTorch' | 'TensorFlow'

export interface ModelArchitecture {
  name: string
  type: string
  layers: string[]
  parameters: string
  description: string
}

export interface AIProject {
  id: string
  title: string
  framework: Framework
  category: 'Computer Vision' | 'NLP' | 'Reinforcement Learning' | 'Generative AI' | 'Time Series'
  description: string
  modelArchitecture: ModelArchitecture
  dataset: string
  metrics: {
    name: string
    value: string
    description?: string
  }[]
  results: string[]
  technologies: string[]
  githubUrl?: string
  paperUrl?: string
  demoUrl?: string
  featured: boolean
  date: string
}

export const aiProjectsData: AIProject[] = [
  {
    id: '1',
    title: 'Advanced Image Classification with ResNet-50',
    framework: 'PyTorch',
    category: 'Computer Vision',
    description: 'Developed a state-of-the-art image classification system using ResNet-50 architecture with custom fine-tuning. The model achieves exceptional accuracy on a diverse dataset of 1000+ categories.',
    modelArchitecture: {
      name: 'ResNet-50',
      type: 'Convolutional Neural Network',
      layers: [
        'Input Layer (224x224x3)',
        'Initial Convolution (7x7, 64 filters)',
        'Max Pooling (3x3)',
        'Residual Block 1 (3 layers, 256 filters)',
        'Residual Block 2 (4 layers, 512 filters)',
        'Residual Block 3 (6 layers, 1024 filters)',
        'Residual Block 4 (3 layers, 2048 filters)',
        'Global Average Pooling',
        'Fully Connected Layer (1000 classes)',
        'Softmax Output',
      ],
      parameters: '25.6M',
      description: 'Deep residual network with skip connections to solve vanishing gradient problem',
    },
    dataset: 'Custom dataset with 1.2M images across 1000 categories',
    metrics: [
      { name: 'Top-1 Accuracy', value: '94.2%', description: 'Single best prediction accuracy' },
      { name: 'Top-5 Accuracy', value: '98.7%', description: 'Top 5 predictions accuracy' },
      { name: 'F1 Score', value: '0.93', description: 'Harmonic mean of precision and recall' },
      { name: 'Inference Time', value: '45ms', description: 'Average inference time per image' },
      { name: 'Model Size', value: '98 MB', description: 'Compressed model file size' },
    ],
    results: [
      'Achieved 94.2% accuracy on test set, outperforming baseline by 12%',
      'Reduced inference time by 60% through model optimization and quantization',
      'Successfully deployed to production serving 50K+ requests daily',
      'Implemented data augmentation increasing model robustness by 15%',
      'Created web interface for real-time image classification',
    ],
    technologies: ['PyTorch', 'Python', 'OpenCV', 'NumPy', 'Pillow', 'Flask', 'Docker'],
    githubUrl: 'https://github.com/waseem0522/image-classifier',
    demoUrl: 'https://image-classifier-demo.example.com',
    featured: true,
    date: '2023-06-15',
  },
  {
    id: '2',
    title: 'BERT-based Sentiment Analysis System',
    framework: 'TensorFlow',
    category: 'NLP',
    description: 'Built a fine-tuned BERT model for multi-class sentiment analysis capable of understanding context and nuance in text. The system processes customer reviews and social media content with high accuracy.',
    modelArchitecture: {
      name: 'BERT-Base',
      type: 'Transformer Encoder',
      layers: [
        'Token Embedding Layer',
        'Position Embedding Layer',
        'Segment Embedding Layer',
        'Transformer Encoder Block 1 (12 layers)',
        'Transformer Encoder Block 2 (12 layers)',
        'Transformer Encoder Block 3 (12 layers)',
        'Pooler Layer',
        'Classification Head (3 classes)',
        'Softmax Output',
      ],
      parameters: '110M',
      description: 'Bidirectional Encoder Representations from Transformers with 12 transformer blocks',
    },
    dataset: 'Amazon Reviews dataset with 500K labeled reviews (positive, neutral, negative)',
    metrics: [
      { name: 'Accuracy', value: '92.5%', description: 'Overall classification accuracy' },
      { name: 'Precision', value: '0.91', description: 'Average precision across classes' },
      { name: 'Recall', value: '0.93', description: 'Average recall across classes' },
      { name: 'F1 Score', value: '0.92', description: 'Macro-averaged F1 score' },
      { name: 'Inference Time', value: '120ms', description: 'Average processing time per text' },
    ],
    results: [
      'Achieved 92.5% accuracy on sentiment classification task',
      'Fine-tuned BERT model reducing training time by 40% using transfer learning',
      'Deployed as REST API handling 10K+ requests per day',
      'Integrated with customer service platform improving response quality',
      'Published blog post on fine-tuning BERT for sentiment analysis',
    ],
    technologies: ['TensorFlow', 'Keras', 'Python', 'Hugging Face Transformers', 'FastAPI', 'NLTK', 'spaCy'],
    githubUrl: 'https://github.com/waseem0522/bert-sentiment',
    featured: true,
    date: '2023-08-10',
  },
  {
    id: '3',
    title: 'YOLOv8 Object Detection Pipeline',
    framework: 'PyTorch',
    category: 'Computer Vision',
    description: 'Implemented real-time object detection system using YOLOv8 architecture. The model can detect and classify multiple objects in images and video streams with high precision and speed.',
    modelArchitecture: {
      name: 'YOLOv8',
      type: 'Single-Stage Detector',
      layers: [
        'Backbone: CSPDarknet53',
        'Neck: PANet (Path Aggregation Network)',
        'Head: Decoupled Detection Head',
        'Anchor-free Detection',
        'Bounding Box Regression',
        'Classification Output',
      ],
      parameters: '43.7M',
      description: 'You Only Look Once version 8 with improved accuracy and speed',
    },
    dataset: 'COCO dataset + custom dataset with 50K annotated images, 80 object classes',
    metrics: [
      { name: 'mAP@0.5', value: '0.68', description: 'Mean Average Precision at IoU 0.5' },
      { name: 'mAP@0.5:0.95', value: '0.52', description: 'Mean Average Precision across IoU thresholds' },
      { name: 'FPS', value: '45', description: 'Frames per second on GPU' },
      { name: 'Precision', value: '0.71', description: 'Object detection precision' },
      { name: 'Recall', value: '0.65', description: 'Object detection recall' },
    ],
    results: [
      'Achieved 68% mAP@0.5 on COCO validation set',
      'Optimized for real-time inference achieving 45 FPS on single GPU',
      'Deployed for video surveillance system processing live streams',
      'Reduced false positives by 30% through data augmentation and training techniques',
      'Created annotation tool for custom dataset labeling',
    ],
    technologies: ['PyTorch', 'Ultralytics', 'Python', 'OpenCV', 'FFmpeg', 'TensorRT', 'ONNX'],
    githubUrl: 'https://github.com/waseem0522/yolo-detection',
    featured: true,
    date: '2023-09-20',
  },
  {
    id: '4',
    title: 'LSTM Time Series Forecasting',
    framework: 'TensorFlow',
    category: 'Time Series',
    description: 'Developed an LSTM-based forecasting model for predicting stock prices and sales trends. The model uses attention mechanisms to capture long-term dependencies in time series data.',
    modelArchitecture: {
      name: 'Bidirectional LSTM with Attention',
      type: 'Recurrent Neural Network',
      layers: [
        'Input Layer (sequence length: 60)',
        'Bidirectional LSTM Layer 1 (128 units)',
        'Dropout (0.2)',
        'Bidirectional LSTM Layer 2 (64 units)',
        'Attention Mechanism',
        'Dense Layer (32 units, ReLU)',
        'Dropout (0.3)',
        'Output Layer (1 unit, Linear)',
      ],
      parameters: '2.1M',
      description: 'Bidirectional LSTM with attention mechanism for sequence modeling',
    },
    dataset: 'Historical stock price data (5 years) + sales data (3 years), 100K+ data points',
    metrics: [
      { name: 'RMSE', value: '12.5', description: 'Root Mean Squared Error' },
      { name: 'MAE', value: '8.3', description: 'Mean Absolute Error' },
      { name: 'MAPE', value: '3.2%', description: 'Mean Absolute Percentage Error' },
      { name: 'R² Score', value: '0.94', description: 'Coefficient of determination' },
      { name: 'Direction Accuracy', value: '87%', description: 'Correct direction prediction rate' },
    ],
    results: [
      'Achieved 94% R² score on test set, outperforming ARIMA by 15%',
      'Reduced prediction error by 25% compared to baseline models',
      'Implemented attention mechanism improving interpretability',
      'Deployed for real-time forecasting with 1-hour update frequency',
      'Created dashboard for visualizing predictions and trends',
    ],
    technologies: ['TensorFlow', 'Keras', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'FastAPI'],
    githubUrl: 'https://github.com/waseem0522/lstm-forecasting',
    featured: false,
    date: '2023-11-05',
  },
  {
    id: '5',
    title: 'GPT-2 Fine-tuned Text Generator',
    framework: 'PyTorch',
    category: 'Generative AI',
    description: 'Fine-tuned GPT-2 model for domain-specific text generation. The model generates coherent and contextually relevant text for technical documentation and creative writing.',
    modelArchitecture: {
      name: 'GPT-2 Medium',
      type: 'Transformer Decoder',
      layers: [
        'Token Embedding',
        'Position Embedding',
        'Transformer Decoder Block 1 (24 layers)',
        'Transformer Decoder Block 2 (24 layers)',
        'Layer Normalization',
        'Language Model Head',
        'Softmax Output',
      ],
      parameters: '345M',
      description: 'Generative Pre-trained Transformer 2 with 24 decoder layers',
    },
    dataset: 'Custom corpus with 2M+ tokens from technical documentation and articles',
    metrics: [
      { name: 'Perplexity', value: '18.5', description: 'Lower is better, measures model confidence' },
      { name: 'BLEU Score', value: '0.42', description: 'Text generation quality metric' },
      { name: 'Generation Speed', value: '25 tokens/sec', description: 'Tokens generated per second' },
      { name: 'Coherence Score', value: '0.78', description: 'Text coherence evaluation' },
    ],
    results: [
      'Fine-tuned GPT-2 achieving 18.5 perplexity on domain-specific text',
      'Generated high-quality technical documentation with 78% coherence',
      'Reduced training time by 50% using gradient checkpointing',
      'Deployed as API for automated content generation',
      'Created interactive web demo for text generation',
    ],
    technologies: ['PyTorch', 'Hugging Face Transformers', 'Python', 'FastAPI', 'Gradio', 'Weights & Biases'],
    githubUrl: 'https://github.com/waseem0522/gpt2-generator',
    demoUrl: 'https://text-generator-demo.example.com',
    featured: true,
    date: '2024-01-15',
  },
  {
    id: '6',
    title: 'Deep Q-Network (DQN) for Game AI',
    framework: 'PyTorch',
    category: 'Reinforcement Learning',
    description: 'Implemented Deep Q-Network for training an AI agent to play Atari games. The agent learns optimal strategies through trial and error using deep reinforcement learning.',
    modelArchitecture: {
      name: 'DQN with Experience Replay',
      type: 'Deep Q-Network',
      layers: [
        'Convolutional Layer 1 (32 filters, 8x8)',
        'ReLU Activation',
        'Convolutional Layer 2 (64 filters, 4x4)',
        'ReLU Activation',
        'Convolutional Layer 3 (64 filters, 3x3)',
        'ReLU Activation',
        'Flatten Layer',
        'Fully Connected Layer 1 (512 units)',
        'ReLU Activation',
        'Fully Connected Layer 2 (action space)',
      ],
      parameters: '1.7M',
      description: 'Deep Q-Network with experience replay and target network',
    },
    dataset: 'Atari game environments (Breakout, Pong, Space Invaders)',
    metrics: [
      { name: 'Average Score', value: '425', description: 'Average game score after training' },
      { name: 'Win Rate', value: '78%', description: 'Percentage of games won' },
      { name: 'Training Episodes', value: '10K', description: 'Number of training episodes' },
      { name: 'Convergence Time', value: '8 hours', description: 'Time to reach optimal performance' },
    ],
    results: [
      'Trained agent achieving 425 average score on Breakout game',
      'Implemented experience replay improving learning stability',
      'Achieved 78% win rate against baseline random agent',
      'Created visualization tools for training progress and agent behavior',
      'Published tutorial on implementing DQN from scratch',
    ],
    technologies: ['PyTorch', 'Gymnasium', 'Python', 'NumPy', 'Matplotlib', 'TensorBoard'],
    githubUrl: 'https://github.com/waseem0522/dqn-agent',
    featured: false,
    date: '2023-10-15',
  },
]

