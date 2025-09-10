# glow

## Project Summary

A personal web application that allows users to upload images of book pages with highlighted text and receive AI-generated summaries. The system processes multiple images using Google Gemini AI to extract and summarize highlighted content, providing structured markdown summaries for study purposes.

## Technology Stack

- **Framework**: React with Vite
- **UI Library**: Shadcn/UI + Origin UI
- **State Management**: React hooks (useState, useEffect) - no complex state management needed initially
- **HTTP Client**: Axios
- **File Upload**: Origin UI file input with drag-and-drop support

## Core Features

### 1. Authentication Page
- **Route**: `/login`
- Simple login form with username/password fields
- Basic validation (required fields, minimum password length)
- JWT token storage in localStorage
- Redirect to upload page on successful authentication
- Error handling for invalid credentials

### 2. Image Upload Page
- **Route**: `/` (protected route)
- **File Upload Component**:
  - Multiple image upload support (JPEG, PNG)
  - Drag-and-drop interface
  - File preview thumbnails
  - File validation (type, size limits)
  - Remove individual files before processing
- **Processing Interface**:
  - Upload progress indicator
  - Processing status (uploading, analyzing, generating summary)
  - Real-time feedback during Gemini API processing
- **Results Display**:
  - Generated summary in formatted markdown
  - Metadata (processing date, number of images processed)
  - Option to save summary
  - Option to process new set of images

### 3. Summaries History Page
- **Route**: `/history` (protected route)
- List of previously generated summaries
- Display summary metadata (subject, date, image count)
- Expandable/collapsible summary content
- Search/filter functionality by subject or date
- Delete individual summaries option

## User Interface Requirements

### Design Principles
- Clean, minimal interface focused on functionality
- Responsive design (mobile-friendly)
- Accessible (proper labels, keyboard navigation)
- Fast and intuitive user experience

### Layout Structure
```
Header: [Logo/Title] [Navigation] [Logout]
Main Content: [Page-specific content]
Footer: [Optional - version/info]
```

### Navigation
- Simple navigation bar with:
  - Upload (default page after login)
  - History
  - Logout button

## API Integration

### Endpoints to Consume
- `POST /auth/login` - User authentication
- `POST /upload` - Upload and process images
- `GET /summaries` - Retrieve summaries history
- `DELETE /summaries/{id}` - Delete specific summary

### Request/Response Formats
```javascript
// Upload request
FormData with multiple image files

// Upload response
{
  "id": "uuid",
  "subject": "Generated subject",
  "text": "Markdown formatted summary",
  "created_at": "ISO datetime",
  "processed_images_count": 5
}

// Summaries list response
[
  {
    "id": "uuid",
    "subject": "Summary subject",
    "text": "Full summary text",
    "created_at": "ISO datetime", 
    "processed_images_count": 5
  }
]
```

## Error Handling

### Client-side Validation
- File type validation (only images)
- File size limits (e.g., max 10MB per image)
- Maximum number of files per upload
- Required field validation on forms

### Error States
- Network connectivity issues
- File upload failures
- API processing errors
- Authentication token expiration
- Rate limiting from Gemini API

### User Feedback
- Success notifications for completed operations
- Error messages with clear next steps
- Loading states for all async operations
- Progress indicators for long-running processes

## Performance Considerations

### Optimization Requirements
- Image compression before upload (if needed)
- Lazy loading for summaries history
- Efficient file preview handling
- Debounced search in history page
- Proper loading states to prevent multiple submissions

### Bundle Size
- Code splitting by route
- Lazy loading of non-critical components
- Tree shaking for unused dependencies
- Image optimization for UI assets

## Security Requirements

### Authentication
- JWT token management
- Automatic token refresh (if implemented)
- Secure logout (clear all stored data)
- Route protection for authenticated pages

### File Upload Security
- Client-side file type validation
- File size restrictions
- Preview generation without executing files
- Secure file handling (no direct file URLs)

## Development Guidelines

### Code Organization
```
src/
├── components/
│   ├── common/           # Reusable components
│   ├── auth/            # Login components
│   ├── upload/          # Upload-related components
│   └── summaries/       # Summary display components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── services/            # API integration
├── utils/               # Helper functions
└── types/               # TypeScript types (if used)
```

### Component Standards
- Functional components with hooks
- PropTypes or TypeScript for type checking
- Consistent naming conventions
- Reusable components in common directory
- Proper component composition

## Future Enhancements (Out of Scope for MVP)

- Summary editing capabilities
- Export summaries to PDF/Word
- Batch operations on summaries
- Summary categories/tags
- Dark/light theme toggle
- Summary sharing functionality
- Advanced search and filtering
- Keyboard shortcuts

## Acceptance Criteria

### MVP Completion Criteria
- [ ] User can login and access protected routes
- [ ] User can upload multiple images via drag-and-drop or file selection
- [ ] Upload progress is clearly indicated
- [ ] Generated summaries are displayed in readable format
- [ ] User can view history of all generated summaries
- [ ] User can delete summaries from history
- [ ] Application works on desktop and mobile browsers
- [ ] Proper error handling for all failure scenarios
- [ ] Responsive design across different screen sizes

### Quality Standards
- Loading time under 3 seconds on initial load
- Smooth interactions with no blocking UI operations
- Proper error messages that guide user actions
- Consistent visual design across all pages
- Accessibility compliance (basic level)