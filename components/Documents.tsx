'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { documentsData, documentsStats, type Document } from '@/data/documents'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  HiAcademicCap,
  HiTrophy,
  HiDocumentText,
  HiXMark,
  HiShieldCheck,
  HiCalendar,
  HiBuildingOffice,
  HiArrowDownTray,
  HiEye,
  HiPhoto,
} from 'react-icons/hi2'

interface DocumentsModalProps {
  isOpen: boolean
  onClose: () => void
  document: Document
}

function DocumentModal({ isOpen, onClose, document }: DocumentsModalProps) {
  const { t } = useLanguage()
  if (!isOpen) return null

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'degree':
        return <HiAcademicCap className="w-6 h-6" />
      case 'award':
        return <HiTrophy className="w-6 h-6" />
      default:
        return <HiDocumentText className="w-6 h-6" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'degree':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
      case 'award':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
      case 'certificate':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="relative h-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${getTypeColor(document.type)}`}>
                      {getTypeIcon(document.type)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {document.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {document.verified && (
                          <HiShieldCheck className="w-4 h-4 text-blue-500" title={t('documents.verified')} />
                        )}
                        <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(document.type)}`}>
                          {t(`documents.type.${document.type}`)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <HiXMark className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Issuer */}
                <div className="flex items-start gap-3">
                  <HiBuildingOffice className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{t('documents.issuedBy')}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{document.issuer}</div>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-start gap-3">
                  <HiCalendar className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{t('documents.issueDate')}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {new Date(document.issueDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('documents.description')}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {document.description}
                  </p>
                </div>

                {/* Document Image */}
                {document.imageUrl && (
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {t('documents.documentImage')}
                    </div>
                    <div className="relative w-full rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                      <Image
                        src={document.imageUrl}
                        alt={document.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        quality={90}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                {/* Document Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {document.documentUrl ? (
                    <>
                      <a
                        href={document.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <HiEye className="w-5 h-5" />
                        <span>{t('documents.viewFullDocument')}</span>
                      </a>
                      <a
                        href={document.documentUrl}
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        <HiArrowDownTray className="w-5 h-5" />
                        <span>{t('documents.download')}</span>
                      </a>
                    </>
                  ) : document.imageUrl ? (
                    <a
                      href={document.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <HiEye className="w-5 h-5" />
                      <span>{t('documents.viewFullSize')}</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Documents() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'degree':
        return <HiAcademicCap className="w-6 h-6" />
      case 'award':
        return <HiTrophy className="w-6 h-6" />
      default:
        return <HiDocumentText className="w-6 h-6" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'degree':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
      case 'award':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
      case 'certificate':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  const categories = [
    { key: 'All', label: t('documents.all') },
    { key: 'Education', label: t('documents.education') },
    { key: 'Professional', label: t('documents.professional') },
    { key: 'Award', label: t('documents.award') },
    { key: 'Achievement', label: t('documents.achievement') },
  ]
  const filteredDocuments =
    activeFilter === 'All'
      ? documentsData
      : documentsData.filter((doc) => doc.category.toLowerCase() === activeFilter.toLowerCase())

  if (!isVisible) {
    return (
      <section id="documents" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.button
              onClick={() => setIsVisible(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex items-center gap-3
                px-8 py-4
                bg-gradient-to-r from-primary-600 to-secondary-600
                text-white rounded-lg
                font-semibold text-lg
                shadow-lg hover:shadow-xl
                transition-all duration-300
                group
              "
            >
              <HiDocumentText className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>{t('documents.viewButton')}</span>
            </motion.button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="documents"
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground-light dark:text-foreground-dark">
              {t('documents.title')}
            </h2>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <HiXMark className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {t('documents.subtitle')}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {documentsStats.total}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('documents.totalDocuments')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {documentsStats.byType.degree}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('documents.degrees')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {documentsStats.byType.certificate}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('documents.certificates')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {documentsStats.byType.award}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('documents.awards')}</div>
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-300
                  ${
                    activeFilter === category.key
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Documents Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredDocuments.map((document, index) => (
            <motion.div
              key={document.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedDocument(document)}
              className="
                bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl
                transition-all duration-300 border border-gray-200 dark:border-gray-700
                cursor-pointer group relative overflow-hidden
              "
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Document Image or Icon */}
                {document.imageUrl ? (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 group-hover:border-primary-300 dark:group-hover:border-primary-700 transition-colors">
                    <Image
                      src={document.imageUrl}
                      alt={document.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      quality={85}
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2">
                      <div className={`px-2 py-1 rounded-full text-xs backdrop-blur-sm ${getTypeColor(document.type)}`}>
                        {t(`documents.type.${document.type}`)}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${getTypeColor(document.type)}`}>
                    {getTypeIcon(document.type)}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {document.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-1">
                  {document.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <HiCalendar className="w-4 h-4" />
                  <span>
                    {new Date(document.issueDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  {!document.imageUrl && (
                    <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(document.type)}`}>
                      {t(`documents.type.${document.type}`)}
                    </span>
                  )}
                  {document.imageUrl && (
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <HiPhoto className="w-4 h-4" />
                      <span>{t('documents.clickToView')}</span>
                    </div>
                  )}
                  {document.verified && (
                    <HiShieldCheck className="w-5 h-5 text-blue-500" title={t('documents.verified')} />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Document Modal */}
      <DocumentModal
        isOpen={selectedDocument !== null}
        onClose={() => setSelectedDocument(null)}
        document={selectedDocument!}
      />
    </section>
  )
}

