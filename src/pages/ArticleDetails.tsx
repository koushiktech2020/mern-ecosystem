import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

const ArticleDetails: React.FC = () => {
  // Static data for demonstration
  const article = {
    title: "Exploring the Depths of React Hooks",
    coverImage:
      "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    category: "Web Development",
    likes: 789, // Added like count
    content: `
      <p>React Hooks have revolutionized the way we write React components, offering a more direct API to the React features you already know—props, state, context, refs, and lifecycle. They allow you to use state and other React features without writing a class.</p>
      <p>One of the most commonly used hooks is <code>useState</code>, which lets you add React state to function components. It returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to <code>this.setState</code> in a class, but it doesn’t merge the new and old state together.</p>
      <p>Another essential hook is <code>useEffect</code>, which lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. You might be familiar with these operations as lifecycle methods in class components, such as <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>.</p>
      <p>Hooks provide a powerful and flexible way to manage state and side effects, leading to cleaner and more reusable code. They encourage a more functional approach to component development, making it easier to test and reason about your application's behavior.</p>
    `,
    comments: [
      {
        id: 1,
        author: "John Smith",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Great article! Very insightful and well-explained. I especially appreciated the deep dive into the useEffect hook.",
        date: "2025-07-29",
      },
      {
        id: 2,
        author: "Alice Johnson",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        text: "I learned a lot about useEffect. Thanks for breaking it down so clearly!",
        date: "2025-07-28",
      },
    ],
  };

  const similarArticles = [
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
  ];

  return (
    <div className="bg-gray-50 font-sans leading-relaxed">
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2">
          {/* Article Card */}
          <Card className="mb-8 overflow-hidden rounded-2xl shadow-xl border-none">
            <CardHeader className="p-0">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-8">
                <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {article.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                      <AvatarImage src={article.author.avatar} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-bold text-gray-800">
                        By {article.author.name}
                      </span>
                      <p className="text-sm">Posted on July 29, 2025</p>
                    </div>
                  </div>
                  <span className="hidden md:inline">|</span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {article.category}
                  </span>
                  <span className="hidden md:inline">|</span>
                  {/* START: Added Like Count */}
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold text-lg text-gray-800">
                      {article.likes}
                    </span>
                  </div>
                  {/* END: Added Like Count */}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div
                className="prose max-w-none text-md text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="mb-8 bg-white shadow-xl rounded-2xl border-none">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800 tracking-tight">
                Comments ({article.comments.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {article.comments.map((comment) => (
                <div key={comment.id} className="flex items-start space-x-4">
                  <Avatar className="w-14 h-14 border-2 border-white shadow-lg">
                    <AvatarImage src={comment.avatar} />
                    <AvatarFallback className="text-xl font-bold bg-gray-200 text-gray-700">
                      {comment.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-900 text-lg">
                        {comment.author}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {comment.date}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {comment.text}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Add Comment Form */}
          <Card className="mb-8 bg-white shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800">
                Leave a Comment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <Input
                  placeholder="Your Name"
                  className="p-4 rounded-lg bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="p-4 rounded-lg bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
                <Textarea
                  placeholder="Share your thoughts..."
                  rows={6}
                  className="p-4 rounded-lg bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Post Comment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar with Similar Articles */}
        <div className="lg:col-span-1">
          <Card className="bg-white shadow-xl rounded-2xl border-none sticky top-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800">
                Similar Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6">
                {similarArticles.map((article) => (
                  <Card
                    className="flex flex-col w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden group border-none"
                    key={article.id}
                  >
                    <div className="relative overflow-hidden">
                      <Link
                        to={`/article/${article.id}`}
                        className="block h-48"
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </Link>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="flex flex-col flex-grow p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        <Link
                          to={`/article/${article.id}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                        {article.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                          <img
                            src={article.author.avatar}
                            alt={article.author.name}
                            className="w-9 h-9 rounded-full border-2 border-white shadow"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">
                              {article.author.name}
                            </p>
                            <p>{article.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-5 h-5 text-red-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="font-medium">{article.likes}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
