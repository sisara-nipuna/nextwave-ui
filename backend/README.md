# Blog API Server

Simple Node.js Express server for blog API endpoints.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:3001`

## API Endpoints

### GET /api/blog
Get all blog data (posts, latest news, categories, tags)

### GET /api/posts
Get all blog posts

### GET /api/posts/:id
Get a single post by ID

### GET /api/posts/category/:category
Get posts filtered by category

### GET /api/posts/tag/:tag
Get posts filtered by tag

### GET /api/search?q=query
Search posts by title, content, or tags

### GET /api/latest-news
Get latest news items

### GET /api/categories
Get all categories

### GET /api/tags
Get all tags

### POST /api/comments
Submit a comment
**Body:** `{ postId, name, email, website, phone, message }`

### POST /api/posts
Create a new blog post (admin)
**Body:** `{ title, content, excerpt, image, category, tags, author }`

## Frontend Integration

To use this API in your React app, update the fetch URL in `src/pages/Blog.tsx`:

```typescript
const response = await fetch('http://localhost:3001/api/blog');
const data = await response.json();
```

## Data Structure

### Post Object
```json
{
  "id": 1,
  "title": "Post Title",
  "content": "Full post content...",
  "excerpt": "Short excerpt...",
  "image": "image-url",
  "date": "06/03/2025",
  "category": "Category Name",
  "tags": ["tag1", "tag2"],
  "author": "Author Name"
}
```
