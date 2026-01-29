'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { HiPhone, HiMapPin } from 'react-icons/hi2'
import { profileData } from '@/data/profile'
import { useLanguage } from '@/contexts/LanguageContext'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    name: 'Email',
    icon: FaEnvelope,
    href: profileData.socialLinks.email || 'mailto:engmuhammadwaseem0522@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: profileData.socialLinks.linkedin || '#',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: profileData.socialLinks.github || '#',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    href: profileData.contact?.whatsapp?.[0] 
      ? `https://wa.me/${profileData.contact.whatsapp[0].replace(/[^0-9]/g, '')}`
      : '#',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    href: profileData.socialLinks.twitter || '#',
  },
]

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

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

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              {profileData.name}
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {profileData.bio}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    w-10 h-10 rounded-full
                    bg-gray-800 dark:bg-gray-900
                    flex items-center justify-center
                    text-gray-400 hover:text-white
                    hover:bg-primary-600
                    transition-all duration-300
                  "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="
                      text-gray-400 hover:text-primary-400
                      transition-colors duration-200
                      inline-block
                      hover:translate-x-1
                      transition-transform
                    "
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.getInTouch')}</h4>
            <div className="space-y-3">
              {/* Location */}
              {profileData.location && (
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <HiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>{profileData.location.currentLocation}</div>
                    <div className="text-xs text-gray-500">
                      From {profileData.location.country}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Phone */}
              {profileData.contact?.phone && (
                <motion.a
                  href={`tel:${profileData.contact.phone}`}
                  className="
                    flex items-center gap-2
                    text-gray-400 hover:text-primary-400
                    transition-colors duration-200
                    text-sm
                  "
                  whileHover={{ x: 5 }}
                >
                  <HiPhone className="w-4 h-4" />
                  <span>{profileData.contact.phone}</span>
                </motion.a>
              )}

              {/* WhatsApp */}
              {(() => {
                const primaryWhatsapp = profileData.contact?.whatsapp?.[0]
                if (!primaryWhatsapp) return null

                const whatsappHref = `https://wa.me/${primaryWhatsapp.replace(/[^0-9]/g, '')}`

                return (
                  <motion.a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-gray-400 hover:text-green-400
                      transition-colors duration-200
                      text-sm
                    "
                    whileHover={{ x: 5 }}
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>{primaryWhatsapp}</span>
                  </motion.a>
                )
              })()}

              {/* Email */}
              {profileData.socialLinks.email && (
                <motion.a
                  href={profileData.socialLinks.email}
                  className="
                    flex items-center gap-2
                    text-gray-400 hover:text-primary-400
                    transition-colors duration-200
                    text-sm
                  "
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="w-4 h-4" />
                  <span className="break-all">
                    {profileData.socialLinks.email.replace('mailto:', '')}
                  </span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} {profileData.name}. {t('footer.rights')}.
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right">
            {t('footer.builtWith')} <span className="text-primary-400">Next.js</span> &{' '}
            <span className="text-secondary-400">TypeScript</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

