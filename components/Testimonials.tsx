'use client'

import { motion } from 'framer-motion'
import { testimonialsData, testimonialsStats } from '@/data/testimonials'
import { HiStar, HiShieldCheck, HiGlobeAlt } from 'react-icons/hi2'
import { useLanguage } from '@/contexts/LanguageContext'

export function Testimonials() {
  const { t } = useLanguage()
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Fiverr':
        return <HiGlobeAlt className="w-5 h-5" />
      case 'Upwork':
        return <HiGlobeAlt className="w-5 h-5" />
      default:
        return <HiGlobeAlt className="w-5 h-5" />
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Fiverr':
        return 'text-green-500'
      case 'Upwork':
        return 'text-[#14A800]'
      default:
        return 'text-primary-500'
    }
  }

  return (
    <section
      id="testimonials"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden"
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
            <span className="text-gradient">{t('testimonials.heading')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {t('testimonials.headingSubtitle')}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {testimonialsStats.averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <HiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(testimonialsStats.averageRating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('testimonials.averageRating')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {testimonialsStats.totalReviews}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('testimonials.totalReviews')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {testimonialsStats.fiveStarReviews}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('testimonials.fiveStarReviews')}</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.clientName}
                      </h3>
                      {testimonial.verified && (
                        <HiShieldCheck className="w-5 h-5 text-blue-500" title="Verified" />
                      )}
                    </div>
                    {testimonial.clientRole && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.clientRole}
                        {testimonial.clientCompany && ` at ${testimonial.clientCompany}`}
                      </p>
                    )}
                  </div>
                  <div className={`flex items-center gap-1 ${getPlatformColor(testimonial.platform)}`}>
                    {getPlatformIcon(testimonial.platform)}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.platform}
                  </span>
                </div>

                {/* Review */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed italic">
                  &quot;{testimonial.review}&quot;
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  {testimonial.projectType && (
                    <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                      {testimonial.projectType}
                    </span>
                  )}
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(testimonial.date).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

