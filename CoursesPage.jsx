import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Users, User, FileText, Clock, Calendar, CheckCircle, Star, Zap } from 'lucide-react';

const CoursesPage = () => {
  const courses = [
    {
      icon: <MessageCircle className="h-12 w-12 text-blue-600" />,
      title: "Communication English Classes",
      description: "Build confidence and fluency for both professional and everyday conversations.",
      features: [
        "Professional vocabulary building",
        "Grammar for business communication",
        "Presentation skills training",
        "Email writing techniques",
        "Telephone etiquette",
        "Meeting participation skills"
      ],
      duration: "60 days",
      sessions: "24 sessions",
      format: "Group classes + practice sessions"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Mock Interviews",
      description: "Practice with realistic scenarios and receive constructive feedback to ace your next interview.",
      features: [
        "Industry-specific interview scenarios",
        "Technical and HR round preparation",
        "Body language and confidence building",
        "Common question practice",
        "Detailed feedback and improvement tips",
        "Multiple mock sessions"
      ],
      duration: "60 days",
      sessions: "12 mock interviews",
      format: "1:1 mock interviews + group discussions"
    },
    {
      icon: <User className="h-12 w-12 text-blue-600" />,
      title: "Personalized 1:1 Sessions",
      description: "Get tailored guidance and support to address your specific learning needs.",
      features: [
        "Customized learning plan",
        "Individual attention and feedback",
        "Flexible scheduling",
        "Focus on specific weaknesses",
        "Accelerated learning approach",
        "Direct instructor access"
      ],
      duration: "60 days",
      sessions: "16 one-on-one sessions",
      format: "Private tutoring sessions"
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Resume Building",
      description: "Craft a standout resume that highlights your strengths and gets you noticed.",
      features: [
        "Professional resume templates",
        "ATS-friendly formatting",
        "Industry-specific keywords",
        "Achievement-focused content",
        "Cover letter writing",
        "LinkedIn profile optimization"
      ],
      duration: "60 days",
      sessions: "8 workshops",
      format: "Workshops + individual consultations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Comprehensive English communication training designed to boost your professional success
            </p>
            
            {/* Pricing Banner */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Zap className="h-8 w-8 text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900">Special Launch Offer!</h2>
                <Zap className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Regular Price</p>
                  <p className="text-3xl font-bold text-gray-400 line-through">₹600</p>
                  <p className="text-sm text-gray-500">60-day batch</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-red-500 text-white mb-2">Early Bird Offer</Badge>
                  <p className="text-4xl font-bold text-green-600">₹500</p>
                  <p className="text-sm text-red-600 font-medium">First 10 registrations only!</p>
                </div>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-green-600 hover:bg-green-700">
                <Link to="/register">Claim Your Spot Now - Save ₹100!</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Included in Your Course</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each course is carefully designed to provide maximum value and practical skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {course.icon}
                    <div>
                      <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {course.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{course.sessions}</span>
                    </div>
                  </div>
                  <p className="text-sm text-blue-600 font-medium mt-2">{course.format}</p>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    <Link to="/register">Enroll in This Course</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Package Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you enroll, you get access to all four courses as part of your 60-day program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Comprehensive Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All four courses included in one package for complete professional development
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn from an experienced IT professional with 5+ years of industry experience
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Online classes that fit your schedule, with recorded sessions for review
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't miss out on this limited-time offer. Join the first 10 students and save ₹100!
          </p>
          
          <div className="bg-white p-6 rounded-lg max-w-md mx-auto mb-8">
            <p className="text-2xl font-bold text-gray-900 mb-2">Early Bird Price</p>
            <p className="text-4xl font-bold text-green-600">₹500</p>
            <p className="text-sm text-gray-600">Complete 60-day program</p>
            <p className="text-xs text-red-600 mt-2">Limited to first 10 registrations</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/register">Register Now - Save ₹100</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;

