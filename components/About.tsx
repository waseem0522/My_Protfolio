'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { 
  HiCodeBracket, 
  HiSparkles, 
  HiCheckCircle,
  HiArrowRight,
  HiLightBulb,
  HiRocketLaunch,
  HiChartBar,
  HiGlobeAlt
} from 'react-icons/hi2'
import { profileData } from '@/data/profile'
import { useLanguage } from '@/contexts/LanguageContext'

// Statistics component
function StatCard({ icon: Icon, value, label, delay }: { icon: any, value: string, label: string, delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.6 }}
      className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group shadow-lg dark:shadow-none"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors">
        <Icon className="w-8 h-8 text-blue-400" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
      <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">{label}</div>
    </motion.div>
  )
}

export function About() {
  const { t } = useLanguage()
  const [displayedTech, setDisplayedTech] = useState('')
  const [currentTechIndex, setCurrentTechIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  // Translated expertise items
  const translatedExpertise = [
    t('about.expertise.fullStackDevelopment'),
    t('about.expertise.netCoreBackend'),
    t('about.expertise.reactNextjsFrontend'),
    t('about.expertise.aiIntegration'),
    t('about.expertise.restfulApis'),
    t('about.expertise.microservicesArchitecture'),
    t('about.expertise.cloudComputing'),
    t('about.expertise.containerizationOrchestration'),
    t('about.expertise.devopsCicd'),
    t('about.expertise.databaseDesign'),
  ]

  useEffect(() => {
    const currentTech = profileData.techStack[currentTechIndex]
    
    if (!currentTech) return
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedTech.length < currentTech.length) {
          setDisplayedTech(currentTech.substring(0, displayedTech.length + 1))
          setTypingSpeed(100)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
          setTypingSpeed(50)
        }
      } else {
        if (displayedTech.length > 0) {
          setDisplayedTech(currentTech.substring(0, displayedTech.length - 1))
          setTypingSpeed(50)
        } else {
          setIsDeleting(false)
          setCurrentTechIndex((prev) => (prev + 1) % profileData.techStack.length)
          setTypingSpeed(100)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedTech, currentTechIndex, isDeleting, typingSpeed])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
            >
              <HiSparkles className="w-4 h-4" />
              <span>{t('about.badge')}</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('about.heading')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('about.headingSubtitle')}
            </p>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
          >
            <StatCard
              icon={HiRocketLaunch}
              value="50+"
              label={t('about.statProjects')}
              delay={0.1}
            />
            <StatCard
              icon={HiCodeBracket}
              value="100K+"
              label={t('about.statCode')}
              delay={0.2}
            />
            <StatCard
              icon={HiChartBar}
              value="98%"
              label={t('about.statSatisfaction')}
              delay={0.3}
            />
            <StatCard
              icon={HiGlobeAlt}
              value="5+"
              label={t('about.statExperience')}
              delay={0.4}
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            {/* Left Column - Profile Image & Quick Info */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              {/* Profile Image */}
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-gray-300 dark:border-gray-700 group-hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
                  {profileData.profileImage ? (
                    <div className="relative w-full aspect-[4/5]">
                      <Image
                        src={profileData.profileImage}
                        alt={profileData.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 dark:from-gray-900/80 via-transparent to-transparent"></div>
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/5] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-8xl font-bold text-white">
                        {profileData.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Floating Badges */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HiCodeBracket className="w-4 h-4" />
                  {t('about.fullStackBadge')}
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <HiLightBulb className="w-4 h-4" />
                  {t('about.aiExpertBadge')}
                </motion.div>
              </div>

              {/* Quick Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-lg dark:shadow-none"
              >
                <h4 className="text-gray-900 dark:text-white font-semibold mb-4">{t('about.letsConnect')}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {t('about.letsConnectText')}
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  {t('about.getInTouch')}
                  <HiArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Professional Bio */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {t('about.professionalOverview')}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6 whitespace-pre-line">
                  {t('about.longBio')}
                </p>
              </div>

              {/* Core Expertise */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HiCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                  {t('about.coreExpertise')}
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {translatedExpertise.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-500/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group shadow-sm dark:shadow-none"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HiCodeBracket className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  {t('about.technologyStack')}
                </h4>
                <div className="bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-xl p-6 mb-4 shadow-lg dark:shadow-none">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-green-400 font-mono text-sm">$</span>
                    <span className="text-gray-600 dark:text-gray-400 font-mono text-sm">{t('about.techStackCommand')}</span>
                  </div>
                  <div className="h-10 flex items-center">
                    <span className="text-2xl font-bold text-blue-400 font-mono">
                      {displayedTech}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block ml-1"
                      >
                        |
                      </motion.span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profileData.techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        displayedTech === tech
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                          : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500/50 hover:text-blue-400 shadow-sm dark:shadow-none'
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Value Proposition Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-blue-600/10 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-lg dark:shadow-none"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <HiRocketLaunch className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('about.fastDelivery')}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('about.fastDeliveryDesc')}
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                  <HiChartBar className="w-8 h-8 text-purple-500 dark:text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('about.scalableSolutions')}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('about.scalableSolutionsDesc')}
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/20 rounded-full mb-4">
                  <HiLightBulb className="w-8 h-8 text-pink-500 dark:text-pink-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('about.innovationFirst')}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('about.innovationFirstDesc')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
