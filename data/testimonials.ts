/**
 * Client Testimonials & Reviews
 * Reviews from Fiverr and Upwork clients
 */

export interface Testimonial {
  id: string
  clientName: string
  clientRole?: string
  clientCompany?: string
  platform: 'Fiverr' | 'Upwork' | 'Direct'
  rating: number // 1-5
  review: string
  date: string
  projectType?: string
  verified: boolean
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sarah Johnson',
    clientRole: 'CEO',
    clientCompany: 'TechStart Solutions',
    platform: 'Upwork',
    rating: 5,
    review: 'Muhammad delivered an exceptional full-stack application that exceeded our expectations. His technical expertise, attention to detail, and communication throughout the project were outstanding. The code quality is excellent and the application performs flawlessly. Highly recommended!',
    date: '2024-01-15',
    projectType: 'E-commerce Platform',
    verified: true,
  },
  {
    id: '2',
    clientName: 'Michael Chen',
    clientRole: 'Founder',
    clientCompany: 'HealthCare Pro',
    platform: 'Fiverr',
    rating: 5,
    review: 'Working with Muhammad was a pleasure. He built our healthcare management system with .NET Core and React, and it\'s been running perfectly. His understanding of complex requirements and ability to deliver on time is impressive. Will definitely work with him again!',
    date: '2023-11-20',
    projectType: 'Healthcare Management System',
    verified: true,
  },
  {
    id: '3',
    clientName: 'Emily Rodriguez',
    clientRole: 'Product Manager',
    clientCompany: 'EduTech Innovations',
    platform: 'Upwork',
    rating: 5,
    review: 'Muhammad is a true professional. He transformed our vision into a beautiful, functional web application. His React skills are top-notch, and he provided valuable suggestions that improved our product. The project was delivered ahead of schedule with excellent documentation.',
    date: '2024-02-10',
    projectType: 'Educational Platform',
    verified: true,
  },
  {
    id: '4',
    clientName: 'David Thompson',
    clientRole: 'CTO',
    clientCompany: 'FinanceFlow Inc.',
    platform: 'Fiverr',
    rating: 5,
    review: 'Outstanding work! Muhammad developed a secure financial application with robust authentication and real-time features. His expertise in .NET Core and database optimization is evident. The application handles high traffic seamlessly. Highly skilled developer!',
    date: '2023-12-05',
    projectType: 'Financial Application',
    verified: true,
  },
  {
    id: '5',
    clientName: 'Lisa Anderson',
    clientRole: 'Business Owner',
    clientCompany: 'RetailMax',
    platform: 'Upwork',
    rating: 5,
    review: 'Muhammad built our e-commerce platform from scratch and it\'s been a game-changer for our business. His attention to detail, responsive design, and payment integration were perfect. He was always available for questions and made sure everything worked flawlessly.',
    date: '2024-01-28',
    projectType: 'E-commerce Platform',
    verified: true,
  },
  {
    id: '6',
    clientName: 'James Wilson',
    clientRole: 'Startup Founder',
    platform: 'Fiverr',
    rating: 5,
    review: 'Muhammad helped us build our MVP quickly and efficiently. His full-stack expertise allowed us to launch faster than expected. The code is clean, well-documented, and scalable. He\'s become our go-to developer for all future projects!',
    date: '2023-10-12',
    projectType: 'SaaS MVP',
    verified: true,
  },
  {
    id: '7',
    clientName: 'Maria Garcia',
    clientRole: 'Project Manager',
    clientCompany: 'Global Services Ltd.',
    platform: 'Upwork',
    rating: 5,
    review: 'Professional, reliable, and technically excellent. Muhammad delivered a complex enterprise application with multiple integrations. His ability to understand business requirements and translate them into technical solutions is remarkable. Excellent communication throughout!',
    date: '2024-03-05',
    projectType: 'Enterprise Application',
    verified: true,
  },
  {
    id: '8',
    clientName: 'Robert Kim',
    clientRole: 'Entrepreneur',
    platform: 'Fiverr',
    rating: 5,
    review: 'Muhammad is an exceptional developer. He built a real-time dashboard for our analytics platform using React and .NET Core. The performance is outstanding, and the UI is beautiful. He went above and beyond to ensure everything was perfect. Highly recommended!',
    date: '2023-09-18',
    projectType: 'Analytics Dashboard',
    verified: true,
  },
  {
    id: '9',
    clientName: 'Jennifer Lee',
    clientRole: 'Marketing Director',
    clientCompany: 'BrandBoost Agency',
    platform: 'Upwork',
    rating: 5,
    review: 'Working with Muhammad was seamless. He developed our client portal with excellent UX/UI design and robust backend. His React and TypeScript skills are impressive, and he delivered exactly what we needed. The project was completed on time and within budget.',
    date: '2024-02-22',
    projectType: 'Client Portal',
    verified: true,
  },
  {
    id: '10',
    clientName: 'Thomas Brown',
    clientRole: 'CEO',
    clientCompany: 'CloudTech Solutions',
    platform: 'Fiverr',
    rating: 5,
    review: 'Muhammad is a talented full-stack developer with deep expertise in modern technologies. He built our cloud-based application with microservices architecture, and it\'s been running flawlessly. His code quality and best practices are excellent. Will hire again!',
    date: '2023-11-08',
    projectType: 'Cloud Application',
    verified: true,
  },
]

// Statistics
export const testimonialsStats = {
  totalReviews: testimonialsData.length,
  averageRating: testimonialsData.reduce((sum, t) => sum + t.rating, 0) / testimonialsData.length,
  fiveStarReviews: testimonialsData.filter((t) => t.rating === 5).length,
  platforms: {
    fiverr: testimonialsData.filter((t) => t.platform === 'Fiverr').length,
    upwork: testimonialsData.filter((t) => t.platform === 'Upwork').length,
    direct: testimonialsData.filter((t) => t.platform === 'Direct').length,
  },
}

