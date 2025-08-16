import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Github,
  Twitter,
  Linkedin,
  BookOpen,
  Users,
  MessageSquare,
} from "lucide-react";

const Home = () => {
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
      image: "https://agumentikeducamp.com/assets/images/course/DSC_3580.webp",
      description:
        "Join leading experts and developers for a deep dive into the MERN stack. Featuring workshops, keynotes, and networking opportunities.",
      date: "Aug 10, 2024",
      time: "9:00 AM - 5:00 PM",
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
      date: "Sep 5, 2024",
      time: "10:00 AM - 4:00 PM",
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
      date: "Oct 1, 2024",
      time: "9:30 AM - 6:00 PM",
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
      date: "Nov 15, 2024",
      time: "6:00 PM - 8:00 PM",
    },
    {
      id: 5,
      title: "Express.js API Design Workshop",
      category: "Workshop",
      location: "Chicago, IL",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0c766d27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Learn how to design robust and scalable RESTful APIs using Express.js, covering routing, middleware, authentication, and error handling.",
      date: "Dec 1, 2024",
      time: "9:00 AM - 5:00 PM",
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
                        <span>Jane Cooper • 1500 views</span>
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

      {/* ============== START: Updated Top Authors Section ============== */}
      <section className="py-16 bg-white">
        <div className="mx-auto container px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Meet Our Top Authors
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
            <CarouselContent className="-ml-4">
              {authors.map((author, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <Card className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden group">
                    {/* Card Header with background */}
                    <div className="relative h-25 bg-gradient-to-br from-gray-50 via-white to-blue-50">
                      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    </div>

                    {/* Card Content */}
                    <CardContent className="p-6 text-center">
                      {/* Avatar positioned on top of the header */}
                      <div className="relative flex justify-center -mt-20">
                        <div className="relative">
                          <img
                            alt={author.name}
                            className="rounded-full object-cover w-28 h-28 border-4 border-white shadow-md group-hover:border-blue-200 transition-colors"
                            src={author.avatar}
                          />
                          <span className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold ring-2 ring-white shadow">
                            {author.articlesCount}
                          </span>
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-gray-800">
                          {author.name}
                        </h3>
                        <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                          {author.role}
                        </p>
                      </div>

                      {/* Bio */}
                      <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-2">
                        {author.bio}
                      </p>

                      {/* Specialties */}
                      <div className="mt-5">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {author.specialties.slice(0, 3).map((specialty) => (
                            <span
                              key={specialty}
                              className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    {/* Card Footer with Button */}
                    <div className="p-6 pt-2">
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all"
                      >
                        <Link to={`/author/${author.id}`}>View Profile</Link>
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex" />
            <CarouselNext className="flex" />
          </Carousel>
        </div>
      </section>
      {/* ============== END: Updated Top Authors Section ============== */}

      {/* ============== START: Updated Top Events Section ============== */}
      <section className="py-16 bg-gray-50">
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
            <CarouselContent className="-ml-4">
              {events.map((event, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 pl-4 flex"
                >
                  <Card className="flex flex-col w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden group">
                    <div className="relative p-6 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-8 left-8 z-10 flex flex-row gap-2">
                        <span className="bg-white/80 text-blue-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                          {event.category}
                        </span>
                        <span className="bg-white/80 text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <CardContent className="flex flex-col flex-grow p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                        {event.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div>
                            <p className="font-semibold text-gray-700">
                              {event.date}
                            </p>
                            <p>{event.time}</p>
                          </div>
                        </div>
                      </div>
                      <Button
                        asChild
                        size="lg"
                        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all"
                      >
                        <Link to="#">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
      {/* ============== END: Updated Top Events Section ============== */}

      {/* ============== START: Updated Best Articles Section ============== */}
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
            <CarouselContent className="-ml-4">
              {articles.map((article, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 pl-4 flex"
                >
                  <Card className="flex flex-col w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden group">
                    <div className="relative p-6 overflow-hidden">
                      <Link to="#" className="block">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
      {/* ============== END: Updated Best Articles Section ============== */}

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Our Growing Community
          </h3>
          <p className="text-gray-600">
            Join thousands of developers building the future
          </p>
        </div>
        <div className="mx-auto container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-50 rounded-2xl p-6 mb-4 group-hover:bg-blue-100 transition-colors">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-gray-600 font-medium">
                  Articles Published
                </div>
                <div className="text-xs text-gray-500 mt-1">Growing daily</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-green-50 rounded-2xl p-6 mb-4 group-hover:bg-green-100 transition-colors">
                <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                  50+
                </div>
                <div className="text-gray-600 font-medium">Expert Authors</div>
                <div className="text-xs text-gray-500 mt-1">
                  Industry leaders
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-purple-50 rounded-2xl p-6 mb-4 group-hover:bg-purple-100 transition-colors">
                <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                  10k+
                </div>
                <div className="text-gray-600 font-medium">
                  Active Developers
                </div>
                <div className="text-xs text-gray-500 mt-1">Worldwide</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-orange-50 rounded-2xl p-6 mb-4 group-hover:bg-orange-100 transition-colors">
                <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">
                  25k+
                </div>
                <div className="text-gray-600 font-medium">Monthly Readers</div>
                <div className="text-xs text-gray-500 mt-1">And counting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section - Decent Type Get in Touch */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to work together? We'd love to hear from
              you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="flex items-center">
                  <MessageCircle className="text-blue-600 mr-3" size={28} />
                  <CardTitle className="text-2xl">Send Message</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John"
                        className="transition-all duration-200 hover:border-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="surname">Surname</Label>
                      <Input
                        id="surname"
                        name="surname"
                        placeholder="Doe"
                        className="transition-all duration-200 hover:border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className="transition-all duration-200 hover:border-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      className="transition-all duration-200 hover:border-gray-400 resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group mt-auto">
                    <Send
                      className="mr-2 group-hover:translate-x-1 transition-transform duration-200"
                      size={18}
                    />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start group cursor-pointer">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors duration-200">
                        <Mail className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Email
                        </h4>
                        <p className="text-gray-600">hello@company.com</p>
                      </div>
                    </div>

                    <div className="flex items-start group cursor-pointer">
                      <div className="bg-green-100 p-3 rounded-lg mr-4 group-hover:bg-green-200 transition-colors duration-200">
                        <Phone className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Phone
                        </h4>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start group cursor-pointer">
                      <div className="bg-purple-100 p-3 rounded-lg mr-4 group-hover:bg-purple-200 transition-colors duration-200">
                        <MapPin className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Address
                        </h4>
                        <p className="text-gray-600">123 Business Street</p>
                        <p className="text-gray-600">Suite 100</p>
                        <p className="text-gray-600">City, State 12345</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800 text-sm">
                      <strong>Response Time:</strong> We typically respond to
                      inquiries within 24 hours during business days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-2xl">M</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                      MERN
                    </span>
                    <span className="text-gray-800 ml-2">Ecosystem</span>
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    Developer Community Platform
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                Join thousands of developers mastering the MERN stack. Share
                knowledge, discover cutting-edge practices, and build the future
                of web development together.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Expert Content</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Active Community
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Latest Trends</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Free Resources</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Connect With Us
              </h4>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-1 text-gray-800">
                Quick Links
              </h4>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/articles"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-medium">Articles & Tutorials</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/authors"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-green-50 group-hover:bg-green-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium">Expert Authors</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-purple-50 group-hover:bg-purple-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <MessageSquare className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-medium">Community</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-orange-50 group-hover:bg-orange-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="font-medium">About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="font-medium">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-1 text-gray-800">
                Resources
              </h4>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-green-50 group-hover:bg-green-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="font-medium">Getting Started</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="font-medium">Documentation</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-purple-50 group-hover:bg-purple-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="font-medium">Best Practices</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-orange-50 group-hover:bg-orange-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="font-medium">Code Examples</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-8 h-8 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="font-medium">FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-1 text-gray-800">
                  Stay Updated
                </h4>
                <div className="w-28 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Get the latest MERN stack insights, tutorials, and community
                updates delivered straight to your inbox.
              </p>

              <div className="space-y-4">
                <div className="relative">
                  <div className="flex rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-white border-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:border-0 rounded-r-none flex-1 px-4 py-3"
                    />
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-l-none px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Subscribe
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-xs text-gray-500 font-medium">
                    Join 25,000+ developers • No spam, unsubscribe anytime
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Get In Touch
              </h5>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
                  <div className="w-8 h-8 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">San Francisco, CA</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
                  <div className="w-8 h-8 bg-green-50 group-hover:bg-green-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
                  <div className="w-8 h-8 bg-purple-50 group-hover:bg-purple-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <Mail className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">
                    hello@mernecosystem.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
