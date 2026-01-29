'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'
import { getSkillsData, SkillCategory } from '@/data/skills'
import { IconType } from 'react-icons'
import { useLanguage } from '@/contexts/LanguageContext'

interface SkillCardProps {
  skill: {
    name: string
    proficiency: number
    icon: IconType
    color: string
  }
  index: number
}

function SkillCard({ skill, index }: SkillCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = skill.icon

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}44)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="p-3 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{
              backgroundColor: `${skill.color}15`,
            }}
          >
            <Icon
              className="w-8 h-8"
              style={{ color: skill.color }}
            />
          </div>
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {skill.proficiency}%
          </span>
        </div>

        {/* Skill name */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          {skill.name}
        </h3>

        {/* Progress bar container */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              backgroundColor: skill.color,
            }}
            initial={{ width: 0 }}
            animate={isVisible ? { width: `${skill.proficiency}%` } : { width: 0 }}
            transition={{
              duration: 1.5,
              delay: index * 0.1 + 0.3,
              ease: 'easeOut',
            }}
          />
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  )
}

interface CategorySectionProps {
  category: SkillCategory
  categoryIndex: number
}

function CategorySection({ category, categoryIndex }: CategorySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
      className="mb-12"
    >
      {/* Category header */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {category.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  const { t } = useLanguage()
  const skillsData = useMemo(() => getSkillsData(t), [t])
  
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
            {t('skills.heading')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('skills.headingSubtitle')}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto">
          {skillsData.map((category, index) => (
            <CategorySection key={category.name} category={category} categoryIndex={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

