'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiEnvelope,
  HiPaperClip,
  HiCheckCircle,
  HiXCircle,
  HiPhone,
} from 'react-icons/hi2'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa'
import { profileData } from '@/data/profile'
import { useLanguage } from '@/contexts/LanguageContext'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('contact.nameRequired')
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('contact.nameRequired')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailRequired')
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.emailInvalid')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.messageRequired')
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.messageRequired')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Using Formspree endpoint - replace with your Formspree form ID
      // You can get one at https://formspree.io/
      const response = await fetch('https://formspree.io/f/xvzrkonw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: FaEnvelope,
      href: profileData.socialLinks.email || 'mailto:engmuhammadwaseem0522@gmail.com',
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/20',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: profileData.socialLinks.linkedin || '#',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: profileData.socialLinks.github || '#',
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: profileData.contact?.whatsapp?.[0] 
        ? `https://wa.me/${profileData.contact.whatsapp[0].replace(/[^0-9]/g, '')}`
        : '#',
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-50 dark:hover:bg-green-900/20',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: profileData.socialLinks.twitter || '#',
      color: 'hover:text-sky-500',
      bgColor: 'hover:bg-sky-50 dark:hover:bg-sky-900/20',
    },
  ]

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

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
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

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info & Social Links */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground-light dark:text-foreground-dark">
                  {t('contact.connectHeading')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  {t('contact.connectText')}
                </p>
              </div>

              {/* Social Media Icons */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground-light dark:text-foreground-dark">
                  {t('contact.followMe')}
                </h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        flex items-center justify-center w-14 h-14 rounded-full
                        bg-white dark:bg-gray-800
                        border-2 border-gray-200 dark:border-gray-700
                        text-gray-700 dark:text-gray-300
                        transition-all duration-300
                        ${social.color} ${social.bgColor}
                        shadow-md hover:shadow-lg
                      `}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  inline-flex items-center gap-3
                  px-6 py-3
                  bg-gradient-to-r from-primary-600 to-secondary-600
                  text-white rounded-lg
                  font-semibold
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  group
                "
              >
                <HiPaperClip className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>{t('contact.downloadResume') || 'Download Resume'}</span>
              </motion.a>

              {/* Contact Info */}
              <div className="space-y-4 pt-4">
                {/* Location */}
                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <HiEnvelope className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">
                      {t('contact.locationLabel')}
                    </div>
                    <div className="text-sm">
                      {profileData.location?.currentLocation || 'KSA'}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t('contact.locationFrom')}{' '}
                      {profileData.location?.country || 'Pakistan'}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                {profileData.contact?.phone && (
                  <motion.a
                    href={`tel:${profileData.contact.phone}`}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <HiPhone className="w-5 h-5 flex-shrink-0" />
                    <span>{profileData.contact.phone}</span>
                  </motion.a>
                )}

                {/* WhatsApp */}
                {profileData.contact?.whatsapp && profileData.contact.whatsapp.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {t('contact.whatsappLabel')}:
                    </div>
                    {profileData.contact.whatsapp.map((whatsapp, index) => (
                      <motion.a
                        key={index}
                        href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <FaWhatsapp className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{whatsapp}</span>
                      </motion.a>
                    ))}
                  </div>
                )}

                {/* Email */}
                {profileData.socialLinks.email && (
                  <motion.a
                    href={profileData.socialLinks.email}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <HiEnvelope className="w-5 h-5 flex-shrink-0" />
                    <span className="break-all">
                      {profileData.socialLinks.email.replace('mailto:', '')}
                    </span>
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground-light dark:text-foreground-dark"
                  >
                    {t('contact.name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 rounded-lg
                      bg-white dark:bg-gray-800
                      border-2 ${
                        errors.name
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-200 dark:border-gray-700'
                      }
                      text-foreground-light dark:text-foreground-dark
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                      focus:border-transparent
                      transition-all duration-300
                    `}
                    placeholder={t('contact.name')}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center gap-1"
                    >
                      <HiXCircle className="w-4 h-4" />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground-light dark:text-foreground-dark"
                  >
                    {t('contact.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 rounded-lg
                      bg-white dark:bg-gray-800
                      border-2 ${
                        errors.email
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-200 dark:border-gray-700'
                      }
                      text-foreground-light dark:text-foreground-dark
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                      focus:border-transparent
                      transition-all duration-300
                    `}
                    placeholder={t('contact.email')}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center gap-1"
                    >
                      <HiXCircle className="w-4 h-4" />
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground-light dark:text-foreground-dark"
                  >
                    {t('contact.message')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`
                      w-full px-4 py-3 rounded-lg
                      bg-white dark:bg-gray-800
                      border-2 ${
                        errors.message
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-200 dark:border-gray-700'
                      }
                      text-foreground-light dark:text-foreground-dark
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                      focus:border-transparent
                      transition-all duration-300
                      resize-none
                    `}
                    placeholder={t('contact.message')}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center gap-1"
                    >
                      <HiXCircle className="w-4 h-4" />
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`
                    w-full px-6 py-4 rounded-lg
                    bg-gradient-to-r from-primary-600 to-secondary-600
                    text-white font-semibold text-lg
                    shadow-lg hover:shadow-xl
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                    flex items-center justify-center gap-2
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : (
                    <>
                      <HiEnvelope className="w-5 h-5" />
                      <span>{t('contact.send')}</span>
                    </>
                  )}
                </motion.button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 flex items-center gap-2 text-green-700 dark:text-green-400"
                  >
                    <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{t('contact.success')}</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 flex items-center gap-2 text-red-700 dark:text-red-400"
                  >
                    <HiXCircle className="w-5 h-5 flex-shrink-0" />
                    <span>
                      {t('contact.error')}
                    </span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

