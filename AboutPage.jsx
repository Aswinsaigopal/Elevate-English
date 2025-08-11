import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Award, BookOpen, Star, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Goal-Oriented Learning",
      description: "Every lesson is designed with your career advancement in mind"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Personalized Approach",
      description: "Tailored instruction that adapts to your learning style and pace"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Industry Expertise",
      description: "Real-world insights from experienced IT professionals"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Practical Learning",
      description: "Focus on skills you'll actually use in your professional life"
    }
  ];

  const achievements = [
    "5+ Years of IT Industry Experience",
    "Business Analyst & Domain Expert",
    "Placement Faculty with Proven Track Record",
    "Hundreds of Successful Students Placed",
    "Specialized in Professional Communication",
    "Expert in Interview Preparation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Elevate English</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empowering professionals with the communication skills they need to succeed in today's competitive job market
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Elevate English, we believe that effective communication is the key to unlocking career opportunities. 
                Our mission is to bridge the gap between academic English and professional communication skills that 
                employers actually value.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We understand the challenges faced by job seekers in today's competitive market. That's why we've 
                designed our courses to focus on practical, real-world communication skills that make an immediate 
                impact on your professional success.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">Trusted by 500+ Students</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Industry-focused curriculum</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Experienced IT professional instructor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Flexible online learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Personalized feedback and support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Proven placement success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our teaching methodology and student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Expert Instructor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from an industry professional with real-world experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 p-8 rounded-lg">
              <div className="text-center">
                <div className="w-48 h-48 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-24 w-24 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600 mb-4">IT Industry Professional & Placement Expert</p>
                <div className="flex justify-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Aswin Saigopal</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our expert instructor, Aswin Saigopal, brings over 5 years of proven experience in the IT industry 
                as an ERP & Digital Transformation Leader, Business Analyst, and Functional Consultant. Currently 
                serving as Sr. Implementation & Support Lead at ApexSoftNet, he leads digital transformation projects 
                and delivers scalable ERP solutions.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Background & Teaching Experience:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "5+ years in ERP implementation and business analysis",
                  "Sr. Implementation & Support Lead at ApexSoftNet",
                  "Former Assistant Professor at GHRIETN",
                  "Talent Acquisition Consultant with interview expertise",
                  "Certified Scrum Fundamentals and Six Sigma Yellow Belt",
                  "Expert in Power BI, SQL, Excel, and cloud solutions"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Why Aswin is the Perfect Instructor</h4>
                <p className="text-gray-700">
                  "With my unique combination of technical expertise in IT, teaching experience as an Assistant Professor, 
                  and hands-on experience in talent acquisition and interviews, I understand exactly what employers look for. 
                  I've conducted preliminary interviews, provided feedback to management, and helped students integrate 
                  professional knowledge. My goal is to bridge the gap between academic learning and real-world professional 
                  communication skills that will make you stand out in your career."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

