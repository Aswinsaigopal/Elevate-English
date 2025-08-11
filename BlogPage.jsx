import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, BookOpen, Target, MessageCircle } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide: How to Crack Your Dream Job Interview in 2025",
      excerpt: "Discover the latest interview trends and proven strategies to ace your next job interview. Learn the STAR method, handle tricky questions, and master post-interview etiquette.",
      category: "Interview Preparation",
      readTime: "8 min read",
      publishDate: "January 15, 2025",
      author: "Expert Faculty",
      featured: true,
      tags: ["Interviews", "Career Tips", "Job Search"]
    },
    {
      id: 2,
      title: "Beyond Fluency: 7 Communicative English Skills That Will Define Your Professional Success",
      excerpt: "Master the essential communication skills that go beyond grammar and vocabulary. Learn active listening, professional etiquette, and cross-cultural communication.",
      category: "Communication Skills",
      readTime: "10 min read",
      publishDate: "January 12, 2025",
      author: "Expert Faculty",
      featured: true,
      tags: ["Communication", "Professional Skills", "English"]
    },
    {
      id: 3,
      title: "Don't Wing It: How Mock Interviews Can Be Your Secret Weapon for Success in 2025",
      excerpt: "Understand why mock interviews are crucial for interview preparation. Learn how to simulate real-world pressure and turn feedback into actionable improvements.",
      category: "Mock Interviews",
      readTime: "6 min read",
      publishDate: "January 10, 2025",
      author: "Expert Faculty",
      featured: true,
      tags: ["Mock Interviews", "Practice", "Confidence Building"]
    },
    {
      id: 4,
      title: "Resume Writing in the Digital Age: ATS-Friendly Tips for 2025",
      excerpt: "Learn how to craft a resume that passes through Applicant Tracking Systems and catches the attention of hiring managers in today's competitive job market.",
      category: "Resume Building",
      readTime: "7 min read",
      publishDate: "January 8, 2025",
      author: "Expert Faculty",
      featured: false,
      tags: ["Resume", "ATS", "Job Applications"]
    },
    {
      id: 5,
      title: "Common English Grammar Mistakes That Could Cost You the Job",
      excerpt: "Identify and avoid the most common grammar mistakes that professionals make in emails, presentations, and interviews. Improve your professional image instantly.",
      category: "Grammar & Writing",
      readTime: "5 min read",
      publishDate: "January 5, 2025",
      author: "Expert Faculty",
      featured: false,
      tags: ["Grammar", "Writing", "Professional Communication"]
    },
    {
      id: 6,
      title: "Building Confidence for Public Speaking and Presentations",
      excerpt: "Overcome your fear of public speaking with practical techniques and strategies. Learn how to deliver compelling presentations that engage your audience.",
      category: "Presentation Skills",
      readTime: "9 min read",
      publishDate: "January 3, 2025",
      author: "Expert Faculty",
      featured: false,
      tags: ["Public Speaking", "Presentations", "Confidence"]
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, icon: <BookOpen className="h-4 w-4" /> },
    { name: "Interview Preparation", count: 2, icon: <Target className="h-4 w-4" /> },
    { name: "Communication Skills", count: 2, icon: <MessageCircle className="h-4 w-4" /> },
    { name: "Resume Building", count: 1, icon: <User className="h-4 w-4" /> },
    { name: "Grammar & Writing", count: 1, icon: <BookOpen className="h-4 w-4" /> }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources & <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expert insights, tips, and strategies to help you master professional English communication and advance your career
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center space-x-2">
                          {category.icon}
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Stay Updated</CardTitle>
                  <CardDescription className="text-blue-700">
                    Get the latest tips and insights delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Subscribe to Newsletter
                  </Button>
                </CardContent>
              </Card>

              {/* Course CTA */}
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-900">Ready to Learn?</CardTitle>
                  <CardDescription className="text-green-700">
                    Join our comprehensive English communication course
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link to="/register">Enroll Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-blue-600">{post.category}</Badge>
                        <Badge variant="outline">Featured</Badge>
                      </div>
                      <CardTitle className="text-lg font-bold leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.publishDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
              <div className="space-y-6">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3">
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge className="bg-blue-600">{post.category}</Badge>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.publishDate}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-1">
                            {post.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="md:col-span-1 flex items-center">
                          <Button variant="outline" className="w-full group">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

