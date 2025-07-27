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

const Authors = () => {
  // State for multi-select
  const [selectedSortOptions, setSelectedSortOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sort options for multi-select
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "popular", label: "Most Popular" },
    { value: "articles", label: "Most Articles" },
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

  const roles = [
    "All",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "Performance Engineer",
  ];

  const locations = [
    "All",
    "San Francisco, CA",
    "Austin, TX",
    "New York, NY",
    "Seattle, WA",
    "Los Angeles, CA",
    "Portland, OR",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Authors</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our talented community of developers and writers sharing their
            expertise
          </p>
        </div>

        {/* Search Bar and Filter */}
        <div className="flex items-center gap-4 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search authors..."
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
                    Filter Authors
                  </SheetTitle>
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
                {/* Role Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Role
                  </h3>
                  <div className="space-y-2">
                    {roles.map((role) => (
                      <label
                        key={role}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="role"
                          value={role}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{role}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Location
                  </h3>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <label
                        key={location}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="location"
                          value={location}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          {location}
                        </span>
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

                {/* Experience Level Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Experience Level
                  </h3>
                  <div className="space-y-2">
                    {[
                      "All",
                      "Junior (0-2 years)",
                      "Mid-level (3-5 years)",
                      "Senior (6+ years)",
                    ].map((level) => (
                      <label
                        key={level}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="experience"
                          value={level}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{level}</span>
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

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <Card
              className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden group"
              key={author.id}
            >
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
                  <Link to="/authors">View Profile</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authors;
