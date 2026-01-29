'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  HiCodeBracket, 
  HiArrowDown, 
  HiEnvelope,
  HiArrowRight,
  HiSparkles,
  HiMapPin
} from 'react-icons/hi2'
import { profileData } from '@/data/profile'
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
  const { t, language } = useLanguage()
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const isRTL = language === 'ar'

  // Translated roles
  const translatedRoles = [
    t('hero.roles.fullStackDeveloper'),
    t('hero.roles.softwareEngineer'),
    t('hero.roles.aiEnthusiast'),
    t('hero.roles.problemSolver'),
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % translatedRoles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [translatedRoles.length])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // Animated code lines for background
  const codeLines = [
    { text: t('hero.codeLines.line1'), delay: 0 },
    { text: t('hero.codeLines.line2'), delay: 0.1 },
    { text: t('hero.codeLines.line3'), delay: 0.2 },
    { text: t('hero.codeLines.line4'), delay: 0.3 },
    { text: t('hero.codeLines.line5'), delay: 0.4 },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Code Brackets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => {
          const randomX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000
          const randomY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800
          return (
            <motion.div
              key={i}
              className="absolute text-blue-500/20 dark:text-blue-400/20 font-mono text-6xl md:text-8xl"
              initial={{ 
                x: randomX,
                y: randomY,
                rotate: Math.random() * 360,
                opacity: 0
              }}
              animate={{
                y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight : randomY + 100],
                rotate: [null, Math.random() * 360],
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {'{}'}
            </motion.div>
          )
        })}
      </div>

      {/* Background Flags - Large and Prominent */}
    

      {/* Animated Code Lines */}
      <div className={`absolute top-1/4 md:top-1/3 opacity-5 md:opacity-10 hidden md:block ${isRTL ? 'right-0' : 'left-0'}`}>
        <div className={`font-mono text-xs md:text-sm text-blue-400 space-y-1 ${isRTL ? 'pr-4' : 'pl-4'}`}>
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.5 }}
            >
              <span className="text-gray-500 dark:text-gray-600">{i + 1}</span>{' '}
              <span className="text-blue-400 dark:text-blue-500">{line.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Flags - Large and Prominent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* KSA Flag - Top Right Corner - Very Large and Visible */}
       

        {/* Pakistan Flag - Bottom Left Corner - Very Large and Visible */}
        
        {/* Additional Flags for More Visibility */}
        <motion.div
          className="absolute top-1/5 right-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div className="text-[8rem] md:text-[10rem] leading-none select-none" style={{ 
            filter: 'blur(2px)'
          }}>
            🇸🇦
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          <div className="text-[8rem] md:text-[10rem] leading-none select-none" style={{ 
            filter: 'blur(2px)'
          }}>
            🇵🇰
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}
          >
            {/* Developer Badge & Location */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium"
              >
                <HiCodeBracket className="w-4 h-4" />
                <span>{t('hero.fullStackDeveloper')}</span>
              </motion.div>
              
              {/* Location Badge */}
              {profileData.location && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium"
                >
                  <HiMapPin className="w-4 h-4" />
                  <span className="flex items-center gap-1">
                    <span>🇸🇦</span>
                    <span className="hidden sm:inline">{t('hero.location.ksa')}</span>
                    <span className="sm:hidden">{t('hero.location.ksaShort')}</span>
                  </span>
                </motion.div>
              )}
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight ${isRTL ? 'text-right' : 'text-left'}`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <span className="block text-gray-900 dark:text-white">{t('hero.greeting')}</span>
              <span className={`block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient ${isRTL ? 'text-right' : 'text-left'}`}>
                {profileData.name}
              </span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`h-16 md:h-20 mb-6 flex items-center ${isRTL ? 'justify-end' : 'justify-start'} w-full`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                {isRTL ? (
                  <>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-2xl md:text-3xl text-blue-400 flex-shrink-0"
                    >
                      |
                    </motion.span>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300" dir="rtl">
                      {translatedRoles[currentRoleIndex]}
                    </span>
                    <HiSparkles className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  </>
                ) : (
                  <>
                    <HiSparkles className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300" dir="ltr">
                      {translatedRoles[currentRoleIndex]}
                    </span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-2xl md:text-3xl text-blue-400 flex-shrink-0"
                    >
                      |
                    </motion.span>
                  </>
                )}
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto ${isRTL ? 'lg:mx-0 lg:ml-auto lg:text-right' : 'lg:mx-0 lg:text-left'} leading-relaxed`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {t('hero.bio')}
            </motion.p>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`mb-8 ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}
            >
              <p className={`text-sm text-gray-600 dark:text-gray-500 mb-3 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>{t('hero.techStack')}</p>
              <div className={`flex flex-wrap gap-2 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
                {profileData.techStack.slice(0, 6).map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700/50 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-mono backdrop-blur-sm hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={`flex flex-col sm:flex-row items-center ${isRTL ? 'lg:items-end' : 'lg:items-start'} gap-4`}
            >
              <motion.a
                href={profileData.ctaButtons.primary.href}
                onClick={(e) => handleSmoothScroll(e, profileData.ctaButtons.primary.href)}
                whileHover={{ scale: 1.05, x: isRTL ? -5 : 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.cta.viewWork')}
                  <HiArrowRight className={`w-5 h-5 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>

              <motion.a
                href={profileData.ctaButtons.secondary.href}
                onClick={(e) => handleSmoothScroll(e, profileData.ctaButtons.secondary.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
              >
                <HiEnvelope className="w-5 h-5" />
                {t('hero.cta.getInTouch')}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Terminal Window */}
            <div className="relative bg-white dark:bg-gray-900/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-lg shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800/50 border-b border-gray-300 dark:border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-xs text-gray-600 dark:text-gray-400 font-mono">{t('hero.terminal.title')}</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-green-400">
                    <span className="text-gray-500">$</span> {t('hero.terminal.npmRun')}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{t('hero.terminal.ready')}</div>
                  <div className="text-blue-400 mt-4">
                    <span className="text-gray-500 dark:text-gray-500">$</span> {t('hero.terminal.gitStatus')}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{t('hero.terminal.onBranch')}</div>
                  <div className="text-purple-400 mt-4">
                    <span className="text-gray-500 dark:text-gray-500">$</span> {t('hero.terminal.codeVersion')}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">v{new Date().getFullYear()}.0.0</div>
                  
                  {/* Animated Cursor */}
                  <motion.div
                    className="inline-block w-2 h-4 bg-blue-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, '#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-500 hover:text-blue-400 transition-colors group"
          >
            <span className="text-sm font-medium">{t('hero.scrollToExplore')}</span>
            <HiArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
