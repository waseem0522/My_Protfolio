'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { experienceData, type Experience } from '@/data/experience'
import { HiCalendar, HiMapPin, HiBriefcase, HiCheckCircle, HiSparkles } from 'react-icons/hi2'
import { useLanguage } from '@/contexts/LanguageContext'

interface ExperienceCardProps {
  experience: Experience
  index: number
  isLast: boolean
}

function ExperienceCard({ experience, index, isLast }: ExperienceCardProps) {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isRTL = language === 'ar'

  // Map language codes to locale strings
  const localeMap: Record<string, string> = {
    en: 'en-US',
    ar: 'ar-SA',
    fr: 'fr-FR',
    de: 'de-DE',
  }
  const currentLocale = localeMap[language] || 'en-US'

  // Helper function to get translation with fallback
  const getTranslation = (key: string, fallback: string): string => {
    const translated = t(key)
    return translated === key ? fallback : translated
  }

  // Get translated experience data
  const translatedPosition = getTranslation(`experience.entries.${experience.id}.position`, experience.position)
  const translatedLocation = getTranslation(`experience.entries.${experience.id}.location`, experience.location)
  const translatedDuration = getTranslation(`experience.entries.${experience.id}.duration`, experience.duration)
  const translatedDescription = getTranslation(`experience.entries.${experience.id}.description`, experience.description)
  const translatedResponsibilities = experience.responsibilities.map((resp, idx) => 
    getTranslation(`experience.entries.${experience.id}.responsibilities.${idx}`, resp)
  )
  const translatedAchievements = experience.achievements.map((ach, idx) => 
    getTranslation(`experience.entries.${experience.id}.achievements.${idx}`, ach)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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

  const isEven = index % 2 === 0

  return (
    <div ref={cardRef} className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className={`absolute top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 ${isRTL ? 'right-8' : 'left-8'}`} />
      )}

      <motion.div
        initial={{ opacity: 0, x: isRTL ? (isEven ? 50 : -50) : (isEven ? -50 : 50) }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? (isEven ? 50 : -50) : (isEven ? -50 : 50) }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className={`relative flex items-start gap-6 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        {/* Timeline dot */}
        <div className="relative z-10 flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring' }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 shadow-lg"
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              {experience.logo ? (
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  loading="lazy"
                  quality={85}
                />
              ) : experience.logoUrl ? (
                <Image
                  src={experience.logoUrl}
                  alt={experience.company}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  loading="lazy"
                  quality={85}
                />
              ) : (
                <HiBriefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              )}
            </div>
          </motion.div>
          {/* Pulse animation */}
          {isVisible && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary-500/30"
              animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
            />
          )}
        </div>

        {/* Content card */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className={`flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden group ${isRTL ? 'text-right' : ''}`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isRTL ? 'bg-gradient-to-l from-primary-500/5 to-secondary-500/5' : 'bg-gradient-to-r from-primary-500/5 to-secondary-500/5'}`} />

          <div className="relative z-10">
            {/* Header */}
            <div className={`flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2 ${isRTL ? 'md:flex-row-reverse' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
              <div className={`flex-1 ${isRTL ? 'md:text-right text-right' : 'md:text-left text-left'}`}>
                <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-1 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                  {translatedPosition}
                </h3>
                <h4 className={`text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {experience.company}
                </h4>
              </div>
              <div className={`flex flex-col gap-1 ${isRTL ? 'items-start md:items-start' : 'items-start md:items-end'}`}>
                <span className={`px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                  {t(`experience.jobType.${experience.type.replace('-', '')}`)}
                </span>
                <span className={`text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>{translatedDuration}</span>
              </div>
            </div>

            {/* Location and Date */}
            <div className={`flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`} dir={isRTL ? 'rtl' : 'ltr'}>
              <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <HiMapPin className="w-4 h-4 flex-shrink-0" />
                <span dir={isRTL ? 'rtl' : 'ltr'}>{translatedLocation}</span>
              </div>
              <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <HiCalendar className="w-4 h-4 flex-shrink-0" />
                <span dir={isRTL ? 'rtl' : 'ltr'}>
                  {new Date(experience.startDate).toLocaleDateString(currentLocale, {
                    month: 'short',
                    year: 'numeric',
                  })}{' '}
                  -{' '}
                  {experience.endDate
                    ? new Date(experience.endDate).toLocaleDateString(currentLocale, {
                        month: 'short',
                        year: 'numeric',
                      })
                    : t('experience.present')}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className={`text-gray-700 dark:text-gray-300 mb-5 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
              {translatedDescription}
            </p>

            {/* Responsibilities */}
            <div className="mb-5">
              <h5 className={`text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <HiBriefcase className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span className={isRTL ? 'text-right' : ''} dir={isRTL ? 'rtl' : 'ltr'}>{t('experience.keyResponsibilities')}</span>
              </h5>
              <ul className={`space-y-2 ${isRTL ? 'pr-4' : 'pl-4'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                {translatedResponsibilities.map((responsibility, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 10 : -10 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 + 0.3 }}
                    className={`flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
                  >
                    <span className={`text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-0'}`}>
                      {isRTL ? '◂' : '▸'}
                    </span>
                    <span dir={isRTL ? 'rtl' : 'ltr'} className="flex-1">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="mb-5">
              <h5 className={`text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <HiSparkles className="w-4 h-4 text-secondary-600 dark:text-secondary-400 flex-shrink-0" />
                <span className={isRTL ? 'text-right' : ''} dir={isRTL ? 'rtl' : 'ltr'}>{t('experience.keyAchievements')}</span>
              </h5>
              <ul className={`space-y-2 ${isRTL ? 'pr-4' : 'pl-4'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                {translatedAchievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 10 : -10 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 + 0.5 }}
                    className={`flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
                  >
                    <HiCheckCircle className={`w-4 h-4 text-secondary-600 dark:text-secondary-400 mt-0.5 flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-0'}`} />
                    <span dir={isRTL ? 'rtl' : 'ltr'} className="flex-1">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h5 className={`text-sm font-semibold text-gray-900 dark:text-white mb-3 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                {t('experience.technologiesUsed')}
              </h5>
              <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : 'justify-start'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                {experience.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.05 + 0.6 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export function Experience() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'
  return (
    <section
      id="experience"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
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
            <span className="text-gradient">{t('experience.heading')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('experience.headingSubtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

