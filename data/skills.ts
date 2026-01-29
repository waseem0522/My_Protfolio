import { IconType } from 'react-icons'
import { 
  SiDotnet, 
  SiReact, 
  SiNextdotjs, 
  SiPostgresql, 
  SiMongodb, 
  SiPytorch, 
  SiTensorflow,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiRedis,
  SiTailwindcss,
  SiPython,
  SiDocker,
  SiKubernetes,
} from 'react-icons/si'
import { FaCode, FaAws, FaMicrosoft } from 'react-icons/fa'

export interface Skill {
  name: string
  proficiency: number // 0-100
  icon: IconType
  color: string
}

export interface SkillCategory {
  name: string
  description: string
  skills: Skill[]
}

type TranslationFunction = (key: string) => string

export const getSkillsData = (t: TranslationFunction): SkillCategory[] => [
  {
    name: t('skills.categories.frontend.name'),
    description: t('skills.categories.frontend.description'),
    skills: [
      {
        name: t('skills.skillNames.reactjs'),
        proficiency: 90,
        icon: SiReact,
        color: '#61DAFB',
      },
      {
        name: t('skills.skillNames.nextjs'),
        proficiency: 85,
        icon: SiNextdotjs,
        color: '#000000',
      },
      {
        name: t('skills.skillNames.typescript'),
        proficiency: 88,
        icon: SiTypescript,
        color: '#3178C6',
      },
      {
        name: t('skills.skillNames.javascript'),
        proficiency: 92,
        icon: SiJavascript,
        color: '#F7DF1E',
      },
      {
        name: t('skills.skillNames.tailwindCss'),
        proficiency: 90,
        icon: SiTailwindcss,
        color: '#06B6D4',
      },
    ],
  },
  {
    name: t('skills.categories.backend.name'),
    description: t('skills.categories.backend.description'),
    skills: [
      {
        name: t('skills.skillNames.netCore'),
        proficiency: 88,
        icon: SiDotnet,
        color: '#512BD4',
      },
      {
        name: t('skills.skillNames.csharp'),
        proficiency: 90,
        icon: FaCode,
        color: '#239120',
      },
      {
        name: t('skills.skillNames.nodejs'),
        proficiency: 82,
        icon: SiNodedotjs,
        color: '#339933',
      },
      {
        name: t('skills.skillNames.python'),
        proficiency: 80,
        icon: SiPython,
        color: '#3776AB',
      },
    ],
  },
  {
    name: t('skills.categories.database.name'),
    description: t('skills.categories.database.description'),
    skills: [
      {
        name: t('skills.skillNames.postgresql'),
        proficiency: 85,
        icon: SiPostgresql,
        color: '#4169E1',
      },
      {
        name: t('skills.skillNames.mysql'),
        proficiency: 83,
        icon: SiMysql,
        color: '#4479A1',
      },
      {
        name: t('skills.skillNames.mongodb'),
        proficiency: 80,
        icon: SiMongodb,
        color: '#47A248',
      },
      {
        name: t('skills.skillNames.redis'),
        proficiency: 75,
        icon: SiRedis,
        color: '#DC382D',
      },
    ],
  },
  {
    name: t('skills.categories.aiMl.name'),
    description: t('skills.categories.aiMl.description'),
    skills: [
      {
        name: t('skills.skillNames.pytorch'),
        proficiency: 78,
        icon: SiPytorch,
        color: '#EE4C2C',
      },
      {
        name: t('skills.skillNames.tensorflow'),
        proficiency: 75,
        icon: SiTensorflow,
        color: '#FF6F00',
      },
    ],
  },
  {
    name: t('skills.categories.devopsCloud.name'),
    description: t('skills.categories.devopsCloud.description'),
    skills: [
      {
        name: t('skills.skillNames.docker'),
        proficiency: 85,
        icon: SiDocker,
        color: '#2496ED',
      },
      {
        name: t('skills.skillNames.kubernetes'),
        proficiency: 80,
        icon: SiKubernetes,
        color: '#326CE5',
      },
      {
        name: t('skills.skillNames.aws'),
        proficiency: 82,
        icon: FaAws,
        color: '#FF9900',
      },
      {
        name: t('skills.skillNames.azure'),
        proficiency: 80,
        icon: FaMicrosoft,
        color: '#0078D4',
      },
    ],
  },
]

