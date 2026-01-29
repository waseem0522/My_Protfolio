/**
 * Documents & Certificates Data
 * Educational documents, certificates, awards, and achievements
 */

export type DocumentType = 'degree' | 'certificate' | 'award' | 'achievement' | 'license'

export interface Document {
  id: string
  title: string
  type: DocumentType
  issuer: string
  issueDate: string
  description: string
  documentUrl?: string // URL to view/download the document
  imageUrl?: string // Thumbnail image of the document
  category: 'education' | 'professional' | 'achievement' | 'award'
  verified: boolean
}

export const documentsData: Document[] = [
  {
    id: '1',
    title: 'Bachelor of Computer Science (BCS)',
    type: 'degree',
    issuer: 'University of Malakand, KPK, Pakistan',
    issueDate: '2018-06-15',
    description: 'Gold Medalist - Bachelor of Computer Science degree with distinction. Completed with outstanding academic performance and research contributions.',
    category: 'education',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop', // Placeholder - Replace with your degree image
    documentUrl: '/documents/bcs-degree.pdf', // Optional: PDF version
  },
  {
    id: '2',
    title: 'Best Employee of the Quarter',
    type: 'award',
    issuer: 'Technology Junction',
    issueDate: '2023-09-01',
    description: 'Recognized for exceptional performance, dedication, and contributions to project success. Awarded for outstanding work on enterprise-level applications.',
    category: 'award',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop', // Placeholder - Replace with your award image
  },
  {
    id: '3',
    title: 'Best Intern of the Year',
    type: 'award',
    issuer: 'Candela Digital Agency',
    issueDate: '2020-12-15',
    description: 'Awarded for exceptional performance, dedication, and contributions during internship period. Recognized for outstanding work and commitment to quality.',
    category: 'award',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop', // Placeholder - Replace with your award image
  },
  {
    id: '4',
    title: 'Full Stack Web Development Certificate',
    type: 'certificate',
    issuer: 'Online Learning Platform',
    issueDate: '2020-03-20',
    description: 'Comprehensive certification in full-stack web development covering React, Node.js, databases, and deployment strategies.',
    category: 'professional',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop', // Placeholder - Replace with your certificate image
  },
  {
    id: '5',
    title: '.NET Core Advanced Certification',
    type: 'certificate',
    issuer: 'Microsoft Learning',
    issueDate: '2021-08-10',
    description: 'Advanced certification in .NET Core development, covering microservices, cloud integration, and best practices.',
    category: 'professional',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop', // Placeholder - Replace with your certificate image
  },
  {
    id: '6',
    title: 'React & TypeScript Mastery',
    type: 'certificate',
    issuer: 'Tech Academy',
    issueDate: '2021-11-05',
    description: 'Mastery certification in React and TypeScript, covering advanced patterns, state management, and performance optimization.',
    category: 'professional',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop', // Placeholder - Replace with your certificate image
  },
  {
    id: '7',
    title: 'Cloud Computing Fundamentals',
    type: 'certificate',
    issuer: 'AWS Training',
    issueDate: '2022-02-15',
    description: 'Fundamentals of cloud computing covering AWS services, deployment strategies, and cloud architecture patterns.',
    category: 'professional',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop', // Placeholder - Replace with your certificate image
  },
  {
    id: '8',
    title: 'Agile & Scrum Master Certification',
    type: 'certificate',
    issuer: 'Scrum Alliance',
    issueDate: '2022-05-20',
    description: 'Certified Scrum Master with expertise in Agile methodologies, sprint planning, and team collaboration.',
    category: 'professional',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop', // Placeholder - Replace with your certificate image
  },
]

// Statistics
export const documentsStats = {
  total: documentsData.length,
  byType: {
    degree: documentsData.filter((d) => d.type === 'degree').length,
    certificate: documentsData.filter((d) => d.type === 'certificate').length,
    award: documentsData.filter((d) => d.type === 'award').length,
    achievement: documentsData.filter((d) => d.type === 'achievement').length,
    license: documentsData.filter((d) => d.type === 'license').length,
  },
  byCategory: {
    education: documentsData.filter((d) => d.category === 'education').length,
    professional: documentsData.filter((d) => d.category === 'professional').length,
    achievement: documentsData.filter((d) => d.category === 'achievement').length,
    award: documentsData.filter((d) => d.category === 'award').length,
  },
}

