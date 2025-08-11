import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, TrendingUp, Users, Award, Target } from 'lucide-react';

const SuccessStoriesPage = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "TCS",
      story: "The personalized 1:1 sessions were a game-changer for me. My instructor quickly identified my weak spots in communication, and the focused practice helped me express my ideas clearly and confidently during my interview with a top MNC. The mock interviews prepared me for every possible scenario. I got the job within two weeks of completing the course!",
      rating: 5,
      course: "Complete Package"
    },
    {
      name: "Rohan Mehta",
      role: "Business Analyst",
      company: "Infosys",
      story: "I was struggling to get interview calls despite having good technical skills. The Resume Building service completely transformed my CV. It looked so much more professional and highlighted my skills in the best way possible. Within a week of updating my resume, I had three interview invitations. The communication classes also helped me ace those interviews!",
      rating: 5,
      course: "Resume Building + Communication Classes"
    },
    {
      name: "Anjali Desai",
      role: "Project Manager",
      company: "Wipro",
      story: "The mock interviews were incredibly helpful and realistic. The feedback was direct, constructive, and focused on the exact type of questions I would face in real interviews. I felt so prepared and confident on the actual interview day. The instructor's industry experience really showed in the quality of preparation. I highly recommend this to anyone who gets nervous before interviews.",
      rating: 5,
      course: "Mock Interviews"
    },
    {
      name: "Arjun Patel",
      role: "Data Analyst",
      company: "Accenture",
      story: "As someone who was not confident in English communication, this course was exactly what I needed. The communication classes helped me build my vocabulary and speak more fluently. The instructor was very patient and provided excellent guidance. Now I can participate confidently in meetings and presentations. My career has taken a significant leap forward!",
      rating: 5,
      course: "Communication English Classes"
    },
    {
      name: "Sneha Reddy",
      role: "UI/UX Designer",
      company: "HCL Technologies",
      story: "The complete package was worth every penny. From improving my English communication to building a professional resume and practicing interviews - everything was covered perfectly. The instructor's real-world insights from the IT industry made all the difference. I landed my dream job as a UI/UX Designer within a month of completing the course.",
      rating: 5,
      course: "Complete Package"
    },
    {
      name: "Vikram Singh",
      role: "Software Developer",
      company: "Cognizant",
      story: "I had been unemployed for 6 months before joining this course. The combination of communication training and interview preparation gave me the confidence I was lacking. The mock interviews were particularly valuable - they helped me overcome my nervousness and speak clearly about my technical skills. Got placed within 3 weeks of course completion!",
      rating: 5,
      course: "Complete Package"
    },
    {
      name: "Kavya Nair",
      role: "Quality Analyst",
      company: "Tech Mahindra",
      story: "The personalized approach of this course is what sets it apart. My instructor understood my specific challenges with English communication and created a customized learning plan for me. The 1:1 sessions were incredibly effective. I went from being hesitant to speak in English to confidently leading team meetings. Highly recommended!",
      rating: 5,
      course: "Personalized 1:1 Sessions"
    },
    {
      name: "Rahul Kumar",
      role: "System Administrator",
      company: "IBM",
      story: "The course content is very practical and industry-focused. Every lesson was directly applicable to real workplace scenarios. The instructor's experience in the IT industry really shows in the quality of training. The resume building workshop helped me showcase my skills effectively, and the interview preparation was spot-on. Excellent value for money!",
      rating: 5,
      course: "Complete Package"
    }
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "500+",
      label: "Students Trained",
      description: "Successfully completed our programs"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      number: "85%",
      label: "Placement Rate",
      description: "Students placed within 3 months"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      number: "4.9/5",
      label: "Average Rating",
      description: "Based on student feedback"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      number: "95%",
      label: "Success Rate",
      description: "Students achieve their goals"
    }
  ];

  const companies = [
    "TCS", "Infosys", "Wipro", "HCL Technologies", "Tech Mahindra", 
    "Accenture", "Cognizant", "IBM", "Capgemini", "L&T Infotech"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Success Stories</span> That Inspire
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real stories from real students who transformed their careers with Elevate English
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">{stat.number}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-700">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from students who have successfully transformed their careers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">{testimonial.name}</CardTitle>
                    <CardDescription className="text-lg">
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.course}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.story}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Students Work At
            </h2>
            <p className="text-xl text-gray-600">
              Top companies where our graduates have been successfully placed
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300">
                <p className="font-semibold text-gray-800">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful students who have transformed their careers with our proven methodology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/register" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Journey Today
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Talk to Our Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;

