import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const AuthorDetails: React.FC = () => {
  // Static data for demonstration - in a real app, this would come from an API based on the route param
  const author = {
    id: 1,
    name: "Jane Cooper",
    role: "Senior Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Passionate about React, TypeScript, and modern web development. Love sharing knowledge through writing and mentoring. With over 5 years of experience in frontend development, I specialize in creating scalable and maintainable user interfaces. I believe in the power of clean code, thoughtful design, and continuous learning.",
    location: "San Francisco, CA",
    company: "TechCorp Inc.",
    articlesCount: 24,
    followers: 1250,
    following: 180,
    joinedDate: "Jan 2022",
    specialties: [
      "React",
      "TypeScript",
      "Frontend Architecture",
      "UI/UX Design",
      "Performance Optimization",
    ],
    socialLinks: {
      twitter: "@janecooper",
      github: "janecooper",
      linkedin: "jane-cooper-dev",
      website: "https://janecooper.dev",
    },
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  };

  const similarAuthors = [
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
  ];

  return (
    <div className="bg-gray-50 font-sans leading-relaxed">
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2">
          {/* Author Profile Card */}
          <Card className="mb-8 overflow-hidden rounded-2xl shadow-xl border-none">
            <CardHeader className="p-0">
              <div className="relative">
                <img
                  src={author.coverImage}
                  alt={`${author.name} cover`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute -bottom-16 left-8">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
                    <AvatarImage src={author.avatar} />
                    <AvatarFallback className="text-4xl font-bold">
                      {author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="p-8 pt-20">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {author.name}
                    </CardTitle>
                    <p className="text-xl text-blue-600 font-semibold mb-2">
                      {author.role}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{author.location}</span>
                      </div>
                      <span className="hidden md:inline">|</span>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{author.company}</span>
                      </div>
                      <span className="hidden md:inline">|</span>
                      <span className="text-sm">
                        Joined {author.joinedDate}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                      Follow
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {author.articlesCount}
                    </div>
                    <div className="text-sm text-gray-600">Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {author.followers.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {author.following}
                    </div>
                    <div className="text-sm text-gray-600">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">4.8</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    About
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{author.bio}</p>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Specialties
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {author.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Connect
                  </h3>
                  <div className="flex gap-4">
                    {author.socialLinks.twitter && (
                      <a
                        href={`https://twitter.com/${author.socialLinks.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                        Twitter
                      </a>
                    )}
                    {author.socialLinks.github && (
                      <a
                        href={`https://github.com/${author.socialLinks.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {author.socialLinks.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${author.socialLinks.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                    {author.socialLinks.website && (
                      <a
                        href={author.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Sidebar with Similar Authors */}
        <div className="lg:col-span-1">
          <Card className="bg-white shadow-xl rounded-2xl border-none sticky top-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800">
                Similar Authors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6">
                {similarAuthors.map((author) => (
                  <Card
                    className="flex flex-col w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden group border-none"
                    key={author.id}
                  >
                    {/* Card Header with background */}
                    <div className="relative h-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
                      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    </div>

                    {/* Card Content */}
                    <CardContent className="p-4 text-center -mt-12">
                      {/* Avatar positioned on top of the header */}
                      <div className="relative flex justify-center mb-4">
                        <div className="relative">
                          <Avatar className="w-16 h-16 border-4 border-white shadow-md group-hover:border-blue-200 transition-colors">
                            <AvatarImage src={author.avatar} />
                            <AvatarFallback className="text-lg font-bold">
                              {author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold ring-2 ring-white shadow">
                            {author.articlesCount}
                          </span>
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          <Link
                            to={`/author/${author.id}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {author.name}
                          </Link>
                        </h3>
                        <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                          {author.role}
                        </p>
                      </div>

                      {/* Bio */}
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
                        {author.bio}
                      </p>

                      {/* Specialties */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {author.specialties.slice(0, 2).map((specialty) => (
                            <Badge
                              key={specialty}
                              variant="secondary"
                              className="px-2 py-0.5 text-xs bg-blue-100 text-blue-800"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="text-center">
                            <p className="font-semibold text-gray-800">
                              {author.followers.toLocaleString()}
                            </p>
                            <p>Followers</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-center">
                            <p className="font-semibold text-gray-800">
                              {author.articlesCount}
                            </p>
                            <p>Articles</p>
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

export default AuthorDetails;
