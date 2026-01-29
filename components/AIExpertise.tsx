'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { aiProjectsData, AIProject, Framework } from '@/data/aiExpertise'
import { HiCodeBracket, HiArrowTopRightOnSquare, HiDocumentText, HiSparkles, HiChartBar } from 'react-icons/hi2'
import { SiPytorch, SiTensorflow } from 'react-icons/si'

interface AIProjectCardProps {
  project: AIProject
  index: number
}

function AIProjectCard({ project, index }: AIProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

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

  const FrameworkIcon = project.framework === 'PyTorch' ? SiPytorch : SiTensorflow
  const frameworkColor = project.framework === 'PyTorch' ? 'text-orange-500' : 'text-orange-400'

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
    >
      {/* Header with gradient */}
      <div className="relative bg-gradient-to-r from-primary-500 to-secondary-500 p-6">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <FrameworkIcon className={`w-6 h-6 ${frameworkColor}`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium text-white">
                    {project.framework}
                  </span>
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium text-white">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-400/90 backdrop-blur-sm rounded text-xs font-semibold text-gray-900">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
        </div>
      </div>

      <div className="p-6">
        {/* Model Architecture */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <HiCodeBracket className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            Model Architecture
          </h4>
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900 dark:text-white">{project.modelArchitecture.name}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{project.modelArchitecture.parameters} params</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.modelArchitecture.description}</p>
            <div className="text-xs text-gray-500 dark:text-gray-500 mb-2">Type: {project.modelArchitecture.type}</div>
            
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-3 space-y-1"
              >
                {project.modelArchitecture.layers.map((layer, idx) => (
                  <div key={idx} className="text-xs text-gray-700 dark:text-gray-300 font-mono pl-4 border-l-2 border-primary-500/30">
                    {idx + 1}. {layer}
                  </div>
                ))}
              </motion.div>
            )}
            
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-sm text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              {expanded ? 'Hide' : 'Show'} Architecture Details
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <HiChartBar className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
            Performance Metrics
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 + 0.3 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-3 border border-primary-200/50 dark:border-primary-800/50"
              >
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                  {metric.name}
                </div>
                {metric.description && (
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {metric.description}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <HiSparkles className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
            Key Results
          </h4>
          <ul className="space-y-2">
            {project.results.map((result, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 + 0.5 }}
                className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
              >
                <span className="text-secondary-600 dark:text-secondary-400 mt-1 flex-shrink-0">✓</span>
                <span>{result}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Dataset & Technologies */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Dataset</h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">{project.dataset}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies</h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg font-medium text-sm transition-colors"
            >
              <HiCodeBracket className="w-4 h-4" />
              Code
            </motion.a>
          )}
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              <HiArrowTopRightOnSquare className="w-4 h-4" />
              Demo
            </motion.a>
          )}
          {project.paperUrl && (
            <motion.a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm transition-colors"
            >
              <HiDocumentText className="w-4 h-4" />
              Paper
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function AIExpertise() {
  const [activeFilter, setActiveFilter] = useState<Framework | 'All'>('All')

  const frameworks: (Framework | 'All')[] = ['All', 'PyTorch', 'TensorFlow']
  const filteredProjects = aiProjectsData.filter((project) => {
    if (activeFilter === 'All') return true
    return project.framework === activeFilter
  })

  return (
    <section
      id="ai-expertise"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-3xl opacity-20"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20"
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
            AI <span className="text-gradient">Specialization</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deep learning projects showcasing expertise in PyTorch and TensorFlow, featuring model architectures, performance metrics, and real-world results
          </p>
        </motion.div>

        {/* Framework Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {frameworks.map((framework) => {
            const Icon = framework === 'PyTorch' ? SiPytorch : framework === 'TensorFlow' ? SiTensorflow : null
            return (
              <motion.button
                key={framework}
                onClick={() => setActiveFilter(framework)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === framework
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {framework}
                {framework !== 'All' && (
                  <span className="ml-2 px-2 py-0.5 bg-white/20 dark:bg-gray-700/50 rounded-full text-xs">
                    {aiProjectsData.filter((p) => p.framework === framework).length}
                  </span>
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AIProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found for this framework.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

