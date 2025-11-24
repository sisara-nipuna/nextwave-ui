// Node.js Express Server for Blog API
// Install dependencies: npm install express cors

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample blog data structure
const blogData = {
  posts: [
    {
      id: 1,
      title: "Let's Get Solution for Building Work",
      content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injumousor, or randomised words which don't look even slightly believable.\n\nLorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.",
      excerpt: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      date: "06/03/2025",
      category: "Building Work",
      tags: ["Software", "User Experience", "Networking"],
      author: "John Doe"
    },
    {
      id: 2,
      title: "Design sprints are great",
      content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n1. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.\n\n2. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.\n\n3. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.",
      excerpt: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
      date: "06/03/2025",
      category: "Design",
      tags: ["Tech", "New Trends"],
      author: "Jane Smith"
    },
    {
      id: 3,
      title: "We Focus On Comfort And Gorgeous",
      content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injumousor, or randomised words which don't look even slightly believable.\n\nLorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.",
      excerpt: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      date: "05/03/2025",
      category: "Development",
      tags: ["Testing", "Software"],
      author: "Mike Johnson"
    }
  ],
  latestNews: [
    { title: "We Focus On Comfort And Gorgeous", date: "06/03/2025" },
    { title: "Design Thinking Methodology", date: "05/03/2025" },
    { title: "Agile Development Practices", date: "04/03/2025" }
  ],
  categories: [
    "Building Work",
    "Design",
    "Development",
    "Technology"
  ],
  tags: [
    "Software",
    "User Experience",
    "Networking",
    "Tech",
    "Testing",
    "New Trends"
  ]
};

// API Routes

// Get all blog data
app.get('/api/blog', (req, res) => {
  res.json(blogData);
});

// Get all posts
app.get('/api/posts', (req, res) => {
  res.json(blogData.posts);
});

// Get single post by ID
app.get('/api/posts/:id', (req, res) => {
  const post = blogData.posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Get posts by category
app.get('/api/posts/category/:category', (req, res) => {
  const posts = blogData.posts.filter(
    p => p.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(posts);
});

// Get posts by tag
app.get('/api/posts/tag/:tag', (req, res) => {
  const posts = blogData.posts.filter(
    p => p.tags.some(t => t.toLowerCase() === req.params.tag.toLowerCase())
  );
  res.json(posts);
});

// Search posts
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const results = blogData.posts.filter(
    p => p.title.toLowerCase().includes(query) ||
         p.content.toLowerCase().includes(query) ||
         p.tags.some(t => t.toLowerCase().includes(query))
  );
  res.json(results);
});

// Get latest news
app.get('/api/latest-news', (req, res) => {
  res.json(blogData.latestNews);
});

// Get all categories
app.get('/api/categories', (req, res) => {
  res.json(blogData.categories);
});

// Get all tags
app.get('/api/tags', (req, res) => {
  res.json(blogData.tags);
});

// POST: Submit comment
app.post('/api/comments', (req, res) => {
  const { postId, name, email, website, phone, message } = req.body;
  
  // Here you would save to database
  // For now, just return success
  res.json({
    success: true,
    message: 'Comment submitted successfully',
    comment: { postId, name, email, website, phone, message, date: new Date() }
  });
});

// POST: Create new post (admin endpoint)
app.post('/api/posts', (req, res) => {
  const newPost = {
    id: blogData.posts.length + 1,
    ...req.body,
    date: new Date().toLocaleDateString()
  };
  
  blogData.posts.push(newPost);
  res.status(201).json(newPost);
});

// Start server
app.listen(PORT, () => {
  console.log(`Blog API server running on http://localhost:${PORT}`);
  console.log(`\nAvailable endpoints:`);
  console.log(`- GET  /api/blog              - Get all blog data`);
  console.log(`- GET  /api/posts             - Get all posts`);
  console.log(`- GET  /api/posts/:id         - Get single post`);
  console.log(`- GET  /api/posts/category/:category - Get posts by category`);
  console.log(`- GET  /api/posts/tag/:tag    - Get posts by tag`);
  console.log(`- GET  /api/search?q=query    - Search posts`);
  console.log(`- GET  /api/latest-news       - Get latest news`);
  console.log(`- GET  /api/categories        - Get all categories`);
  console.log(`- GET  /api/tags              - Get all tags`);
  console.log(`- POST /api/comments          - Submit comment`);
  console.log(`- POST /api/posts             - Create new post`);
});

module.exports = app;
