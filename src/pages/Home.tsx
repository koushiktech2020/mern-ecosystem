import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
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

  const authors = [
    {
      id: 1,
      name: "Jane Cooper",
      role: "Senior Frontend Developer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Passionate about React, TypeScript, and modern web development. Love sharing knowledge through writing and mentoring.",
      location: "San Francisco, CA",
      company: "TechCorp Inc.",
      articlesCount: 24,
      followers: 1250,
      following: 180,
      joinedDate: "Jan 2022",
      specialties: ["React", "TypeScript", "Frontend Architecture"],
      socialLinks: {
        twitter: "@janecooper",
        github: "janecooper",
        linkedin: "jane-cooper-dev",
      },
    },
    {
      id: 2,
      name: "Cody Fisher",
      role: "Mobile Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Mobile app developer specializing in React Native and Flutter. Building cross-platform solutions for startups.",
      location: "Austin, TX",
      company: "MobileFirst Solutions",
      articlesCount: 18,
      followers: 890,
      following: 145,
      joinedDate: "Mar 2022",
      specialties: ["React Native", "Flutter", "Mobile UX"],
      socialLinks: {
        twitter: "@codyfisher",
        github: "codyfisher",
        linkedin: "cody-fisher-mobile",
      },
    },
    {
      id: 3,
      name: "Esther Howard",
      role: "Full Stack Engineer",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Full-stack developer with expertise in MERN stack. Passionate about scalable architecture and clean code.",
      location: "New York, NY",
      company: "DevStack Labs",
      articlesCount: 31,
      followers: 1680,
      following: 220,
      joinedDate: "Nov 2021",
      specialties: ["Node.js", "MongoDB", "System Design"],
      socialLinks: {
        twitter: "@estherhoward",
        github: "estherhoward",
        linkedin: "esther-howard-fullstack",
      },
    },
    {
      id: 4,
      name: "Ryan Thompson",
      role: "Full Stack Developer",
      avatar: "https://randomuser.me/api/portraits/men/43.jpg",
      bio: "Experienced developer focused on building scalable web applications. Mentor and tech lead with 8+ years experience.",
      location: "Seattle, WA",
      company: "CloudTech Systems",
      articlesCount: 42,
      followers: 2100,
      following: 310,
      joinedDate: "Aug 2021",
      specialties: ["AWS", "Docker", "Microservices"],
      socialLinks: {
        twitter: "@ryanthompson",
        github: "ryanthompson",
        linkedin: "ryan-thompson-dev",
      },
    },
    {
      id: 5,
      name: "Sophia Martinez",
      role: "Frontend Developer",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      bio: "Creative frontend developer with a passion for UI/UX design. Specializing in modern JavaScript frameworks.",
      location: "Los Angeles, CA",
      company: "Design & Code Studio",
      articlesCount: 19,
      followers: 950,
      following: 165,
      joinedDate: "Feb 2022",
      specialties: ["Vue.js", "CSS Animations", "UI/UX"],
      socialLinks: {
        twitter: "@sophiamartinez",
        github: "sophiamartinez",
        linkedin: "sophia-martinez-frontend",
      },
    },
    {
      id: 6,
      name: "Michael Chen",
      role: "Performance Engineer",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      bio: "Performance optimization specialist. Helping teams build faster, more efficient web applications.",
      location: "Portland, OR",
      company: "SpeedTech Solutions",
      articlesCount: 27,
      followers: 1420,
      following: 195,
      joinedDate: "Dec 2021",
      specialties: ["Performance", "Web Vitals", "Optimization"],
      socialLinks: {
        twitter: "@michaelchen",
        github: "michaelchen",
        linkedin: "michael-chen-performance",
      },
    },
  ];

  const events = [
    {
      id: 1,
      title: "MERN Stack Conference 2024",
      category: "Conference",
      location: "San Francisco, CA",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f30330b2b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Join leading experts and developers for a deep dive into the MERN stack. Featuring workshops, keynotes, and networking opportunities.",
    },
    {
      id: 2,
      title: "React Advanced Workshop",
      category: "Workshop",
      location: "New York, NY",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "A hands-on workshop for experienced React developers to master advanced concepts like Hooks, Context API, and performance optimization.",
    },
    {
      id: 3,
      title: "Node.js Backend Summit",
      category: "Summit",
      location: "Austin, TX",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Explore the latest trends and best practices in Node.js backend development, including microservices, serverless, and real-time applications.",
    },
    {
      id: 4,
      title: "MongoDB Atlas User Group Meetup",
      category: "Meetup",
      location: "Seattle, WA",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Connect with other MongoDB users, share experiences, and learn new tips and tricks for optimizing your database performance with MongoDB Atlas.",
    },
    {
      id: 5,
      title: "Express.js API Design Workshop",
      category: "Workshop",
      location: "Chicago, IL",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0c766d27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Learn how to design robust and scalable RESTful APIs using Express.js, covering routing, middleware, authentication, and error handling.",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="relative container mx-auto px-6 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Welcome to MERN Ecosystem
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Build Amazing
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Web Apps
                  </span>
                  <span className="block text-4xl md:text-5xl text-gray-700 font-medium">
                    with MERN Stack
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Join thousands of developers learning MongoDB, Express.js,
                  React, and Node.js. Share knowledge, discover best practices,
                  and build the future of web development.
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span>500+ Articles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">👥</span>
                  </div>
                  <span>50+ Expert Authors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">🚀</span>
                  </div>
                  <span>10k+ Developers</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/articles">
                    <span>Explore Articles</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  <Link to="/authors">
                    <span>Meet Authors</span>
                  </Link>
                </Button>
              </div>

              {/* Tech Stack Icons */}
              <div className="pt-8">
                <p className="text-sm text-gray-500 mb-4">
                  Powered by modern technologies:
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-green-600">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center font-bold">
                      M
                    </div>
                    <span className="text-sm font-medium">MongoDB</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center font-bold">
                      E
                    </div>
                    <span className="text-sm font-medium">Express</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center font-bold">
                      R
                    </div>
                    <span className="text-sm font-medium">React</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-500">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center font-bold">
                      N
                    </div>
                    <span className="text-sm font-medium">Node.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Content Grid */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                {/* Featured Article Card */}
                <Card className="relative overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-64">
                    <img
                      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                      alt="Featured Article"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                          Featured
                        </span>
                        <span className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                          React
                        </span>
                      </div>
                      <h3 className="text-white text-lg font-bold mb-2">
                        Building Scalable React Applications
                      </h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt="Jane Cooper"
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>Jane Cooper • 5 min read</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        24
                      </div>
                      <div className="text-sm text-gray-600">New Articles</div>
                      <div className="text-xs text-gray-500">This Week</div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        1.2k
                      </div>
                      <div className="text-sm text-gray-600">
                        Active Readers
                      </div>
                      <div className="text-xs text-gray-500">Online Now</div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* top authors  */}
      <section className="py-16 bg-white">
        <div className="mx-auto container px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Top Authors</h2>
            <Link
              to="/authors"
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
              {authors.map((author, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 flex"
                >
                  <Card className="rounded-lg shadow hover:shadow-lg transition duration-300 w-full">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="flex justify-center mb-6">
                        <img
                          alt={`${author.name} - ${author.role}`}
                          className="rounded-full object-cover"
                          height="150"
                          src={author.avatar}
                          width="150"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <Link to="/authors">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {author.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground italic">
                          {author.role}
                        </p>
                        <p className="text-gray-500 text-xs leading-4">
                          {author.location}
                        </p>
                      </div>

                      <p className="text-sm text-gray-600 line-clamp-3">
                        {author.bio}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between text-xs text-gray-500 w-full">
                        <span>{author.articlesCount} articles</span>
                        <span>{author.followers} followers</span>
                      </div>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-1 justify-center">
                        {author.specialties.slice(0, 2).map((specialty) => (
                          <span
                            key={specialty}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                          >
                            {specialty}
                          </span>
                        ))}
                        {author.specialties.length > 2 && (
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">
                            +{author.specialties.length - 2}
                          </span>
                        )}
                      </div>

                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white hover:text-white"
                        asChild
                      >
                        <Link to="/authors">View Profile</Link>
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

      {/* Top Events */}
      <section className="py-16 bg-white">
        <div className="mx-auto container px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Top Events</h2>
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
              {events.map((event, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 flex"
                >
                  <Card className="rounded-lg shadow hover:shadow-lg transition duration-300 w-full">
                    <CardContent className="flex flex-col gap-4">
                      <div className="relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-50 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="border border-blue-600 text-blue-600 text-xs font-medium p-2 rounded transition transition-duration-1500 ease-in-out hover:border-transparent hover:bg-blue-600 hover:text-white">
                          {event.category}
                        </span>
                        <span className="border border-blue-600 text-blue-600 text-xs font-medium p-2 rounded transition transition-duration-1500 ease-in-out hover:border-transparent hover:bg-blue-600 hover:text-white">
                          {event.location}
                        </span>
                      </div>
                      <div className="py-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {event.title.length > 50
                            ? event.title.slice(0, 50) + "..."
                            : event.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {event.description.length > 120
                            ? event.description.slice(0, 120) + "..."
                            : event.description}
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex" />
            <CarouselNext className="flex" />
          </Carousel>
        </div>
      </section>

      {/* blog list  */}
      <section className="py-16 bg-white">
        <div className="mx-auto container px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Best Articles</h2>
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
          <h2 className="text-2xl font-medium mb-4">Stay with us</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest articles and insights delivered straight to your
            inbox.
          </p>
          <div className="flex max-w-md mx-auto gap-2 items-center">
            <Input type="email" placeholder="Email" className="bg-background" />

            <Button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
