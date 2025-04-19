import { Link } from "react-router-dom";

import { buttonVariants, Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    {
      id: 4,
      title: "Mastering Full Stack Development: A Comprehensive Guide",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1615228939092-9d3cdbb1c49d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
        "https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
        "https://images.unsplash.com/photo-1627386377705-4d10c6a2b3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
    {
      id: 7,
      title: "Securing Your Web Applications: Essential Security Practices",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1618137277936-16181373c3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Learn how to protect your web applications from common security threats and vulnerabilities.",
      date: "Jul 22, 2023",
      time: "9 min read",
      likes: 456,
      comments: 6,
      author: {
        name: "Emma Wilson",
        role: "Security Specialist",
        avatar: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    },
    {
      id: 8,
      title: "Career Growth in Tech: How to Advance as a Developer",
      category: "Career Development",
      image:
        "https://images.unsplash.com/photo-1621503499045-7b6b9c6c4db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Get practical advice on advancing your career as a developer, including learning new skills, networking, and building a personal brand.",
      date: "Jul 28, 2023",
      time: "10 min read",
      likes: 298,
      comments: 2,
      author: {
        name: "Oliver Brown",
        role: "Tech Lead",
        avatar: "https://randomuser.me/api/portraits/men/48.jpg",
      },
    },
  ];

  const userRecords = [
    {
      id: 1,
      fullname: "John Doe",
      email: "john.doe@example.com",
      about: "Software engineer with 5 years of experience in web development.",
      imageurl: "https://via.placeholder.com/200x200?text=John+Doe",
    },
    {
      id: 2,
      fullname: "Jane Smith",
      email: "jane.smith@example.com",
      about:
        "Graphic designer and digital artist passionate about creating stunning visuals.",
      imageurl: "https://via.placeholder.com/200x200?text=Jane+Smith",
    },
    {
      id: 3,
      fullname: "Alice Johnson",
      email: "alice.johnson@example.com",
      about: "Marketing specialist with a knack for social media strategy.",
      imageurl: "https://via.placeholder.com/200x200?text=Alice+Johnson",
    },
    {
      id: 4,
      fullname: "Bob Brown",
      email: "bob.brown@example.com",
      about:
        "Data analyst with expertise in statistical modeling and data visualization.",
      imageurl: "https://via.placeholder.com/200x200?text=Bob+Brown",
    },
    {
      id: 5,
      fullname: "Charlie Davis",
      email: "charlie.davis@example.com",
      about:
        "Project manager with a focus on agile methodologies and team leadership.",
      imageurl: "https://via.placeholder.com/200x200?text=Charlie+Davis",
    },
    {
      id: 6,
      fullname: "Diana Evans",
      email: "diana.evans@example.com",
      about:
        "Content writer with a passion for storytelling and creative writing.",
      imageurl: "https://via.placeholder.com/200x200?text=Diana+Evans",
    },
    {
      id: 7,
      fullname: "Ethan Harris",
      email: "ethan.harris@example.com",
      about: "Web developer skilled in JavaScript, HTML, and CSS.",
      imageurl: "https://via.placeholder.com/200x200?text=Ethan+Harris",
    },
    {
      id: 8,
      fullname: "Fiona Green",
      email: "fiona.green@example.com",
      about:
        "UX/UI designer dedicated to improving user experience through design.",
      imageurl: "https://via.placeholder.com/200x200?text=Fiona+Green",
    },
    {
      id: 9,
      fullname: "George King",
      email: "george.king@example.com",
      about:
        "Cybersecurity expert with a focus on network security and risk management.",
      imageurl: "https://via.placeholder.com/200x200?text=George+King",
    },
    {
      id: 10,
      fullname: "Hannah Lee",
      email: "hannah.lee@example.com",
      about:
        "Product manager with experience in launching successful tech products.",
      imageurl: "https://via.placeholder.com/200x200?text=Hannah+Lee",
    },
  ];

  return (
    <div className="min-h-screen ">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gray-100">
          <div className="relative container mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Text Content */}
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Discover the Latest in <br />
                  <span className="text-blue-600">MERN Stack</span> Development
                </h1>
                <p className="text-gray-600 mt-4 text-lg">
                  Join our community of developers sharing knowledge, best
                  practices, and insights on MongoDB, Express, React, and
                  Node.js.
                </p>
                <div className="mt-6 flex gap-4 flex-wrap">
                  <Link
                    to="#"
                    className={`${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    Explore Blogs
                  </Link>
                  <Link
                    to="#"
                    className={`${buttonVariants({
                      variant: "outline",
                    })}`}
                  >
                    About Us
                  </Link>
                </div>
              </div>

              {/* Right Side Featured Blog */}
              <div className="relative rounded-md overflow-hidden shadow-lg">
                <img
                  src="https://miro.medium.com/v2/resize:fit:680/1*RDN058L5gQ02Xy13OaxjnQ.jpeg"
                  alt="react"
                  className="h-full w-full object-cover"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black opacity-80 p-6 flex flex-col justify-end">
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
          </div>
        </section>

        {/* top experts  */}
        <section className="py-16 bg-white">
          <div className="mx-auto container px-6">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">
                Top-Rated Experts
              </h2>
              <Link
                to="#"
                className="bg-blue-500 text-white py-2 px-4 rounded flex items-center gap-1 text-sm"
              >
                View All
              </Link>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {userRecords.map((user, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/3 flex"
                  >
                    <Card className="rounded-lg shadow hover:shadow-lg transition duration-300 w-full">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        <div className="flex justify-center mb-6">
                          <img
                            alt="Smiling woman with dark hair wearing a red top, circular portrait"
                            className="rounded-full object-cover"
                            height="150"
                            src="https://randomuser.me/api/portraits/men/35.jpg"
                            width="150"
                          />
                        </div>

                        <div>
                          <Link to="#">
                            <h3 className="text-lg font-medium">
                              {user.fullname}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            @{user.email}
                          </p>
                        </div>

                        <p className="text-[#7a7a7a] text-xs leading-4 mb-2">
                          Senior Developer
                        </p>

                        <p className="text-sm text-muted-foreground ">
                          {user.about}
                        </p>

                        <Button variant="outline" size="lg" className="w-full">
                          Details
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="flex" />
              <CarouselNext className="flex" />
            </Carousel>
          </div>
        </section>

        {/* contact us  */}
        <section className="rounded-2xl bg-indigo-100 p-8 md:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-medium mb-4">Stay in the loop</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest articles and insights delivered straight to your
              inbox.
            </p>
            <div className="flex max-w-md mx-auto gap-2 items-center">
              <Input
                type="email"
                placeholder="Email"
                className="bg-background"
              />

              <Button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        {/* blog list  */}
        <section className="py-16 bg-white">
          <div className="mx-auto container px-6">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">
                Top-Rated Articles
              </h2>
              <Link
                to="#"
                className="bg-blue-500 text-white py-2 px-4 rounded flex items-center gap-1 text-sm"
              >
                View All
              </Link>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {articles.map((article, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/3 flex"
                  >
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
                          <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
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
                          <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                            <span>📅 {article.date}</span>
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
                        <Button
                          variant="default"
                          size="lg"
                          className="w-full bg-blue-500 hover:bg-blue-600"
                        >
                          Details
                        </Button>
                      </CardContent>
                    </Card>
                    {/* <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
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
                          {article.title.length > 50
                            ? article.title.slice(0, 50) + "..."
                            : article.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {article.description.length > 120
                            ? article.description.slice(0, 120) + "..."
                            : article.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                          <span>📅 {article.date}</span>
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
                        <Link
                          to="#"
                          className="mt-8 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-3 rounded w-full"
                        >
                          View Details
                        </Link>
                      </div>
                    </div> */}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="flex" />
              <CarouselNext className="flex" />
            </Carousel>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
