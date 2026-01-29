export interface Profile {
  name: string
  roles: string[]
  bio: string
  longBio: string
  techStack: string[]
  expertise: string[]
  profileImage?: string
  location: {
    country: string
    currentLocation: string
    timezone?: string
  }
  contact: {
    phone?: string
    whatsapp?: string[]
    email?: string
  }
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
    portfolio?: string
  }
  ctaButtons: {
    primary: {
      text: string
      href: string
      icon?: string
    }
    secondary: {
      text: string
      href: string
      icon?: string
    }
  }
}

export const profileData: Profile = {
  name: 'Muhammad',
  roles: [
    'Full Stack Developer',
    'Software Engineer',
    'AI Enthusiast',
    'Problem Solver',
  ],
  bio: 'Passionate Full Stack Developer & DevOps Engineer crafting innovative cloud-native solutions',
  longBio: `I'm a passionate Full Stack Developer from Pakistan, currently working in the Kingdom of Saudi Arabia (KSA), with expertise in building scalable web applications using .NET Core, React, and Next.js. My journey in software development has been driven by a love for creating efficient, user-friendly solutions that solve real-world problems.

With a strong foundation in backend development using .NET Core, I specialize in building robust APIs and microservices. On the frontend, I leverage modern frameworks like React and Next.js to create responsive, performant user interfaces.

I have extensive experience with cloud platforms including AWS and Azure, where I design and deploy scalable, resilient applications. My expertise in containerization with Docker and orchestration with Kubernetes enables me to build modern, cloud-native architectures that are both efficient and maintainable.

My interest in AI and machine learning has led me to explore cutting-edge technologies, integrating intelligent features into applications to enhance user experiences. I'm always eager to learn new technologies and tackle challenging problems.

When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or sharing knowledge with the developer community.`,
  location: {
    country: 'Pakistan',
    currentLocation: 'Kingdom of Saudi Arabia (KSA)',
    timezone: 'Asia/Riyadh (GMT+3)',
  },
  contact: {
    phone: '+966501500494',
    whatsapp: ['+966501500494', '+923419263522'],
    email: 'engmuhammadwaseem0522@gmail.com',
  },
  techStack: [
    '.NET Core',
    'React',
    'Next.js',
    'TypeScript',
    'C#',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'Kubernetes',
    'AWS',
    'Azure',
    'Git',
    'Tailwind CSS',
    'Framer Motion',
  ],
  expertise: [
    'Full Stack Development',
    '.NET Core Backend',
    'React & Next.js Frontend',
    'AI Integration',
    'RESTful APIs',
    'Microservices Architecture',
    'Cloud Computing (AWS, Azure)',
    'Containerization & Orchestration (Docker, Kubernetes)',
    'DevOps & CI/CD',
    'Database Design',
  ],
  profileImage: '/images/profile/profile-image.jpg',
  socialLinks: {
    github: 'https://github.com/waseem0522',
    linkedin: 'https://www.linkedin.com/in/muhammad-waseem0522',
    twitter: 'https://twitter.com/yourusername',
    email: 'mailto:engmuhammadwaseem0522@gmail.com',
    portfolio: 'https://yourportfolio.com',
  },
  ctaButtons: {
    primary: {
      text: 'View My Work',
      href: '#projects',
      icon: 'portfolio',
    },
    secondary: {
      text: 'Get In Touch',
      href: '#contact',
      icon: 'contact',
    },
  },
}

