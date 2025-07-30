import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

import { Filter, X, ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Articles = () => {
  // State for multi-select
  const [selectedSortOptions, setSelectedSortOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sort options for multi-select
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "popular", label: "Most Popular" },
    { value: "comments", label: "Most Comments" },
  ];

  // Handle clicking outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle sort option selection
  const toggleSortOption = (value: string) => {
    setSelectedSortOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Remove a specific selected option
  const removeSelectedOption = (valueToRemove: string) => {
    setSelectedSortOptions((prev) =>
      prev.filter((value) => value !== valueToRemove)
    );
  };

  // Sample data
  const articles = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Learn the essential patterns and practices for creating React applications that can grow without becoming unmanageable.",
      date: "Jul 12, 2023",
      readingTime: 8,
      views: 1500,
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
      title: "Career Growth in Tech: How to Advance as a Developer",
      category: "Career Development",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description:
        "Get practical advice on advancing your career as a developer, including learning new skills, networking, and building a personal brand.",
      date: "Jul 28, 2023",
      readingTime: 10,
      views: 1300,
      likes: 298,
      comments: 2,
      author: {
        name: "Oliver Brown",
        role: "Tech Lead",
        avatar: "https://randomuser.me/api/portraits/men/48.jpg",
      },
    },
    {
      id: 3,
      title: "Understanding Node.js Streams for Efficient Data Processing",
      category: "Backend",
      image:
        "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Dive into Node.js streams to handle large amounts of data efficiently without overwhelming your memory.",
      date: "Jun 28, 2023",
      readingTime: 10,
      views: 1100,
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
        "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Explore the essential skills and tools needed to become a proficient full stack developer in modern web development.",
      date: "Jul 20, 2023",
      readingTime: 9,
      views: 1800,
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
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Learn how to use JavaScript modules to organize and structure your code more effectively for large-scale applications.",
      date: "Jul 25, 2023",
      readingTime: 8,
      views: 1600,
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
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Discover proven strategies for optimizing web performance, including code optimization, image compression, and caching techniques.",
      date: "Jul 18, 2023",
      readingTime: 10,
      views: 1400,
      likes: 367,
      comments: 3,
      author: {
        name: "Michael Chen",
        role: "Performance Engineer",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      },
    },
  ];

  // Filter options for category
  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack",
    "TypeScript",
    "JavaScript",
    "Performance",
  ];

  // Filter options for author
  const authors = [
    "All",
    "Jane Cooper",
    "Cody Fisher",
    "Esther Howard",
    "Ryan Thompson",
    "Sophia Martinez",
    "Michael Chen",
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

        {/* Search Bar and Filter */}
        <div className="flex items-center gap-4 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
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

          {/* Filter Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="h-9 w-9 border-gray-300 hover:bg-gray-100"
              >
                <Filter className="w-5 h-5 text-gray-600" />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-80 overflow-y-scroll p-0 [&>button:last-child]:hidden">
              <SheetHeader className="p-6 border-b bg-white">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-xl font-semibold text-gray-900">
                    Filter Articles
                  </SheetTitle>
                  {/* This is your custom close button */}
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-blue-600 hover:bg-blue-700 rounded-full"
                    >
                      <X className="w-4 h-4 text-white" />
                    </Button>
                  </SheetClose>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Refine your search results
                </p>
              </SheetHeader>

              <div className="p-6 space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Author Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Author
                  </h3>
                  <div className="space-y-2">
                    {authors.map((author) => (
                      <label
                        key={author}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="author"
                          value={author}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{author}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sort By - Multi Select */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Sort By (Multi-Select)
                  </h3>

                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 min-h-[36px]"
                    >
                      <div className="flex flex-wrap items-center gap-1 flex-1 min-w-0">
                        {selectedSortOptions.length === 0 ? (
                          <span className="text-muted-foreground">
                            Select sort options
                          </span>
                        ) : (
                          selectedSortOptions.map((value) => {
                            const option = sortOptions.find(
                              (opt) => opt.value === value
                            );
                            return (
                              <span
                                key={value}
                                className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-md"
                              >
                                {option?.label}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeSelectedOption(value);
                                  }}
                                  className="hover:bg-blue-200 rounded-full p-0.5 ml-1"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </span>
                            );
                          })
                        )}
                      </div>
                      <ChevronDown className="size-4 opacity-50 shrink-0" />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                        <div className="py-1">
                          {sortOptions.map((option) => (
                            <label
                              key={option.value}
                              className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={selectedSortOptions.includes(
                                  option.value
                                )}
                                onChange={() => toggleSortOption(option.value)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <span className="ml-3 text-sm text-gray-700">
                                {option.label}
                              </span>
                              {selectedSortOptions.includes(option.value) && (
                                <Check className="w-4 h-4 text-blue-600 ml-auto" />
                              )}
                            </label>
                          ))}
                        </div>

                        {/* Clear All Button */}
                        {selectedSortOptions.length > 0 && (
                          <div className="border-t border-gray-200 px-3 py-2">
                            <button
                              type="button"
                              onClick={() => setSelectedSortOptions([])}
                              className="text-xs text-gray-500 hover:text-gray-700"
                            >
                              Clear All
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Reading Time Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Reading Time
                  </h3>
                  <div className="space-y-2">
                    {["All", "< 5 min", "5-10 min", "> 10 min"].map((time) => (
                      <label
                        key={time}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="readingTime"
                          value={time}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="border-t p-6 bg-gray-50">
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      // Reset filters logic
                    }}
                  >
                    Clear All
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              className="flex flex-col w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden group"
              key={article.id}
            >
              <div className="relative p-6 overflow-hidden">
                <Link to="/article/123" className="block">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
                <div className="absolute top-8 left-8">
                  <span className="bg-white/80 text-blue-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              <CardContent className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  <Link to="#">{article.title}</Link>
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                  {article.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-700">
                        {article.author.name}
                      </p>
                      <p>{article.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">{article.views} views</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{article.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.837 8.837 0 01-4.486-1.283L2.77 17.77A1 1 0 012 16.236V6a4 4 0 014-4h8a4 4 0 014 4v4zM4.5 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{article.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
