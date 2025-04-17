import { Link } from "react-router-dom";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const App = () => {
  const articles = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
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
        "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="relative bg-muted py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Discover the Latest in <br />
                <span className="text-blue-600">MERN Stack</span> Development
              </h1>
              <p className="text-gray-600 mt-4 text-lg">
                Join our community of developers sharing knowledge, best
                practices, and insights on MongoDB, Express, React, and Node.js.
              </p>
              <div className="mt-6 flex gap-4 flex-wrap">
                <Link
                  to="#"
                  className="bg-black text-white px-5 py-2 rounded-md text-sm"
                >
                  Explore Blogs
                </Link>
                <Link
                  to="#"
                  className="bg-white border border-gray-300 text-gray-800 px-5 py-2 rounded-md text-sm"
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Right Side Featured Blog */}
            <div className="relative rounded-md overflow-hidden shadow-lg">
              <img
                src="https://www.frontendmag.com/wp-content/uploads/2022/12/how-to-learn-react-js-quickly.jpeg"
                alt="react"
                className="h-full w-full object-cover"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-end">
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Building Scalable React Applications: Best Practices
                  </h3>
                  <p className="text-gray-200 text-sm mt-2">
                    Learn the essential patterns and practices for creating
                    React applications that can grow without becoming
                    unmanageable.
                  </p>
                  <div className="flex items-center mt-4 text-gray-300 text-sm">
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      alt="Jane Cooper"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    Jane Cooper · Senior Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">
                Top-Rated Articles
              </h2>
              <Link
                to="#"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:underline flex items-center gap-1 text-sm"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {article.description.length > 120
                        ? article.description.slice(0, 120) + "..."
                        : article.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                      <span>📅 {article.date}</span>
                      <span>⏱ {article.time}</span>
                      <span>❤️ {article.likes}</span>
                      <span>💬 {article.comments}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-9 h-9 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {article.author.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {article.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* footer section  */}
      <Footer />
    </div>
  );
};

export default App;
