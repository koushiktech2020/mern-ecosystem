import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description:
        "Learn the essential patterns and practices for creating React applications that can grow without becoming unmanageable.",
      date: "Jul 12, 2023",
      time: "8 min read",
      likes: 342,
      comments: 3,
      author: {
        name: "Jane Cooper",
        role: "Senior Developer",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    },
    {
      id: 2,
      title: "Introduction to TypeScript: Making JavaScript More Robust",
      category: "TypeScript",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      description:
        "Discover how TypeScript adds static typing to JavaScript, enhancing code quality and developer productivity.",
      date: "Jun 15, 2023",
      time: "9 min read",
      likes: 302,
      comments: 2,
      author: {
        name: "Cody Fisher",
        role: "Mobile Developer",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    },
    {
      id: 3,
      title: "Understanding Node.js Streams for Efficient Data Processing",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description:
        "Dive into Node.js streams to handle large amounts of data efficiently without overwhelming your memory.",
      date: "Jun 28, 2023",
      time: "10 min read",
      likes: 276,
      comments: 2,
      author: {
        name: "Esther Howard",
        role: "Full Stack Engineer",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
    },
    {
      id: 4,
      title: "Mastering Full Stack Development: A Comprehensive Guide",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1615228939092-9d3cdbb1c49d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description:
        "Explore the essential skills and tools needed to become a proficient full stack developer in modern web development.",
      date: "Jul 20, 2023",
      time: "9 min read",
      likes: 425,
      comments: 5,
      author: {
        name: "Ryan Thompson",
        role: "Full Stack Developer",
        avatar: "https://randomuser.me/api/portraits/men/43.jpg",
      },
    },
    {
      id: 5,
      title: "The Power of JavaScript Modules: Organizing Your Code",
      category: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description:
        "Learn how to use JavaScript modules to organize and structure your code more effectively for large-scale applications.",
      date: "Jul 25, 2023",
      time: "8 min read",
      likes: 389,
      comments: 4,
      author: {
        name: "Sophia Martinez",
        role: "Frontend Developer",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      },
    },
    {
      id: 6,
      title: "Optimizing Web Performance: Best Practices for Faster Websites",
      category: "Performance",
      image:
        "https://images.unsplash.com/photo-1627386377705-4d10c6a2b3d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description:
        "Discover proven strategies for optimizing web performance, including code optimization, image compression, and caching techniques.",
      date: "Jul 18, 2023",
      time: "10 min read",
      likes: 367,
      comments: 3,
      author: {
        name: "Michael Chen",
        role: "Performance Engineer",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights, tutorials, and best practices in web
            development
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 pr-4 py-2 w-full"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card className="rounded-lg shadow hover:shadow-lg transition duration-300 w-full">
              <CardContent className="flex flex-col gap-4">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-50 object-cover rounded-lg"
                  />
                  {/* <div className="absolute top-2 left-2 flex items-center gap-2">
                            <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                              {article.category}
                            </span>
                            <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                              {article.category}
                            </span>
                          </div> */}
                </div>
                <div className="flex items-center gap-2">
                  <span className="border border-blue-600 text-blue-600 text-xs font-medium p-2 rounded transition transition-duration-1500 ease-in-out hover:border-transparent hover:bg-blue-600 hover:text-white">
                    {article.category}
                  </span>
                  <span className="border border-blue-600 text-blue-600 text-xs font-medium p-2 rounded transition transition-duration-1500 ease-in-out hover:border-transparent hover:bg-blue-600 hover:text-white">
                    {article.category}
                  </span>
                </div>
                <div className="py-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {article.title.length > 50
                      ? article.title.slice(0, 50) + "..."
                      : article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {article.description.length > 120
                      ? article.description.slice(0, 120) + "..."
                      : article.description}
                  </p>
                </div>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-blue-500 hover:bg-blue-600"
                >
                  Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
