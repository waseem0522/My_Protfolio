# Images Directory

This directory contains all images and icons used in the portfolio.

## Directory Structure

- `logos/` - Company logos for experience section
  - `tech-innovations.png` - Tech Innovations Inc. logo
  - `ai-solutions.png` - AI Solutions Group logo
  - `startupxyz.png` - StartupXYZ logo
  - `university-research.png` - University Research Lab logo

- `profile/` - Profile images
  - `profile-image.jpg` - Main profile picture

- `projects/` - Project showcase images
  - `ecommerce.jpg` - E-Commerce Platform project
  - `ai-chatbot.jpg` - AI-Powered Chat Assistant project
  - `task-manager.jpg` - Task Management Dashboard project
  - `image-classifier.jpg` - Image Classification Model project
  - `social-analytics.jpg` - Social Media Analytics Dashboard project
  - `predictive-maintenance.jpg` - Predictive Maintenance System project
  - `portfolio.jpg` - Portfolio Website project
  - `recommendation-engine.jpg` - Recommendation Engine project

## Image Sources

All images have been downloaded from:
- **Unsplash** - High-quality free stock photos for projects and profile
- **UI Avatars** - Professional logo generation service for company logos

## Usage

Images are referenced in the data files:
- `data/experience.ts` - Uses logos from `/images/logos/`
- `data/profile.ts` - Uses profile image from `/images/profile/`
- `data/projects.ts` - Uses project images from `/images/projects/`

All paths are relative to the `public` folder, so they should start with `/images/...`

