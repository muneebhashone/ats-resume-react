# ATS Resume Gallery

A resume gallery and PDF generator built with React, TypeScript, and Vite. Displays professional resumes in an interactive gallery interface and generates ATS-friendly PDF documents.

## Features

- **Resume Gallery** — Browse resumes in a responsive grid with candidate names, roles, locations, and skill tags
- **PDF Viewer** — View each resume as a rendered PDF in the browser
- **PDF Download** — Download individual resumes as PDF files
- **Batch PDF Generation** — Generate all resume PDFs via CLI script
- **ATS-Friendly Format** — Clean layout with Times New Roman, standard sections, and machine-readable structure

## Tech Stack

- **React 18** + **TypeScript** — UI framework
- **Vite** — Build tool with HMR
- **React Router DOM** — Client-side routing
- **@react-pdf/renderer** — PDF generation from React components

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## PDF Generation

Generate PDFs from resume data without running the dev server:

```bash
# Generate all resume PDFs to output/
pnpm generate

# Generate a single resume PDF
pnpm generate:one <slug>
```

## Project Structure

```
src/
├── pages/
│   ├── GalleryPage.tsx          # Landing page with resume grid
│   └── ResumeViewerPage.tsx     # Individual resume PDF viewer
├── resume/
│   └── Document.tsx             # PDF template component
├── resumes/
│   ├── index.ts                 # Resume data exports
│   └── *.json                   # Resume data files
├── types/
│   └── resume.ts                # TypeScript interfaces
├── App.tsx                      # Router setup
└── main.tsx                     # Entry point

scripts/
└── generate-pdf.tsx             # CLI script for batch PDF generation
```

## Adding a Resume

1. Create a JSON file in `src/resumes/` following the `ResumeData` interface in `src/types/resume.ts`
2. The resume will automatically appear in the gallery and be available at `/resume/<slug>`
