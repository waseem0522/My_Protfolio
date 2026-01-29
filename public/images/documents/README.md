# Documents Images Directory

Place your certificate, degree, and award images in this directory.

## Current Status

**Placeholder images are currently being used from Unsplash.** These are temporary and should be replaced with your actual document images.

## Directory Structure

```
public/images/documents/
├── bcs-degree.jpg (or .png)
├── best-employee-award.jpg
├── best-intern-award.jpg
├── fullstack-certificate.jpg
├── dotnet-certificate.jpg
├── react-typescript-certificate.jpg
├── aws-certificate.jpg
└── scrum-certificate.jpg
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 800x600px or larger (maintains aspect ratio)
- **File Size**: Optimize images to keep file sizes reasonable (< 2MB recommended)
- **Naming**: Use descriptive names matching the document titles

## How to Replace Placeholder Images

### Option 1: Use Local Images (Recommended)

1. Scan or take photos of your certificates/degrees
2. Optimize the images (you can use tools like TinyPNG, ImageOptim, or similar)
3. Save them in this directory (`public/images/documents/`)
4. Update the `imageUrl` in `data/documents.ts` to use local paths:

```typescript
{
  id: '1',
  title: 'Bachelor of Computer Science (BCS)',
  // ... other fields
  imageUrl: '/images/documents/bcs-degree.jpg', // Changed from Unsplash URL
}
```

### Option 2: Use External URLs

If you host images elsewhere (cloud storage, CDN, etc.), you can use those URLs directly:

```typescript
{
  id: '1',
  title: 'Bachelor of Computer Science (BCS)',
  // ... other fields
  imageUrl: 'https://your-cdn.com/images/bcs-degree.jpg',
}
```

## Quick Update Guide

1. Add your images to `public/images/documents/` folder
2. Open `data/documents.ts`
3. Find each document entry
4. Replace the `imageUrl` value from Unsplash URL to your local path:
   - From: `'https://images.unsplash.com/...'`
   - To: `'/images/documents/your-image-name.jpg'`

## Example

```typescript
// Before (placeholder)
{
  id: '1',
  title: 'Bachelor of Computer Science (BCS)',
  imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
}

// After (your actual image)
{
  id: '1',
  title: 'Bachelor of Computer Science (BCS)',
  imageUrl: '/images/documents/bcs-degree.jpg',
}
```

The images will automatically display in:
- Document cards (as thumbnails)
- Document modal (full size when clicked)

