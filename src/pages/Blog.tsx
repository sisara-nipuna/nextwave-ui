import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  tags: string[];
}

interface LatestNews {
  title: string;
  date: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [latestNews, setLatestNews] = useState<LatestNews[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch blog data from API
  useEffect(() => {
    // Replace with your actual API endpoint
    const fetchBlogData = async () => {
      try {
        // const response = await fetch('http://localhost:3001/api/blog');
        // const data = await response.json();
        
        // Mock data for now - replace with actual API call
        const mockData = {
          posts: [
            {
              id: 1,
              title: "Let's Get Solution for Building Work",
              content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injumousor, or randomised words which don't look even slightly believable.\n\nLorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.",
              excerpt: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.",
              image: "/api/placeholder/800/400",
              date: "06/03/2025",
              category: "Building Work",
              tags: ["Software", "User Experience", "Networking"]
            },
            {
              id: 2,
              title: "Design sprints are great",
              content: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n1. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.\n\n2. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.\n\n3. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.",
              excerpt: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpaximus.posuere in.Contrary to popular belief.",
              image: "/api/placeholder/800/400",
              date: "06/03/2025",
              category: "Design",
              tags: ["Tech", "New Trends"]
            }
          ],
          latestNews: [
            { title: "We Focus On Comfort And Gorgeous", date: "06/03/2025" },
            { title: "We Focus On Comfort And Gorgeous", date: "06/03/2025" },
            { title: "We Focus On Comfort And Gorgeous", date: "06/03/2025" }
          ],
          categories: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
          tags: ["Software", "User Experience", "Networking", "Tech", "Testing", "New Trends"]
        };
        
        setPosts(mockData.posts);
        setLatestNews(mockData.latestNews);
        setCategories(mockData.categories);
        setTags(mockData.tags);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Latest News */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-foreground">Latest News</h3>
              <div className="space-y-4">
                {latestNews.map((news, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0">
                    <h4 className="text-sm font-semibold mb-2 text-foreground hover:text-primary cursor-pointer transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{news.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-foreground">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-foreground">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="text-sm text-foreground hover:text-primary cursor-pointer transition-colors pb-3 border-b border-border last:border-0"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {post.title}
                </h1>
                
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            {/* Leave a Reply Form */}
            <div className="border-t border-border pt-12">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Leave a Reply</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Website"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    placeholder="Hello Iam Intrested in..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="rounded border-border"
                  />
                  <label htmlFor="save-info" className="text-sm text-muted-foreground">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>

                <Button type="submit" className="px-8">
                  Send Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
