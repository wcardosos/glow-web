# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Glow Web" - a React + TypeScript + Vite application for a study summary system. The app allows users to upload images of book pages with highlighted text and receive AI-generated summaries using Google Gemini AI.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

### Development Workflow
- No test framework is currently configured
- Use `npm run lint` to check code quality before commits
- TypeScript compilation is part of the build process

## Architecture & Project Structure

### Technology Stack
- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite with React plugin
- **Styling**: CSS modules (based on current setup)
- **State Management**: React hooks (no external state management)
- **HTTP Client**: Axios (planned)
- **UI Components**: Shadcn/UI + Origin UI (planned)

### Planned Application Structure
Based on feature requirements, the app will have:

```
src/
├── components/
│   ├── common/           # Reusable components
│   ├── auth/             # Login components  
│   ├── upload/           # Image upload components
│   └── summaries/        # Summary display components
├── pages/                # Page components (Login, Upload, History)
├── hooks/                # Custom React hooks
├── services/             # API integration layer
├── utils/                # Helper functions
└── types/                # TypeScript type definitions
```

### Current State
- Basic Vite + React starter template
- Default App.tsx with counter component
- Ready for feature development

## Key Features to Implement

### Core Pages
1. **Authentication** (`/login`) - JWT-based login
2. **Upload Page** (`/`) - Multi-image upload with drag-and-drop
3. **History Page** (`/history`) - View and manage previous summaries

### API Integration
- Authentication endpoint: `POST /auth/login`
- Upload processing: `POST /upload` (FormData with images)
- Summary management: `GET /summaries`, `DELETE /summaries/{id}`

### File Upload Requirements
- Support JPEG/PNG images
- File size validation (max 10MB per image)
- Multiple file selection with previews
- Drag-and-drop interface using Origin UI components

## Development Guidelines

### Component Standards
- Use functional components with React hooks
- TypeScript for all new code
- Consistent naming conventions (PascalCase for components)
- Props interfaces for type safety

### State Management
- React hooks for local state (useState, useEffect)
- Custom hooks for reusable logic
- No complex state management library needed initially

### Error Handling
- Client-side validation for file uploads
- Network error handling with user feedback
- JWT token expiration handling
- Loading states for async operations

### Security Considerations
- JWT token storage in localStorage
- File type and size validation
- Route protection for authenticated pages
- Secure file handling (no direct file URLs)

## TypeScript Configuration

The project uses separate TypeScript configs:
- `tsconfig.json` - Main configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js environment settings

## ESLint Configuration

Uses modern ESLint flat config with:
- TypeScript ESLint rules
- React hooks plugin
- React refresh plugin for Vite
- Browser globals configuration