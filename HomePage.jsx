import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Users, User, FileText, Star, ArrowRight, QrCode } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <MessageCircle className="h-12 w-12 text-blue-600" />,
      title: "Communication English Classes",
      description: "Build confidence and fluency for both professional and everyday conversations."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Mock Interviews",
      description: "Practice with realistic scenarios and receive constructive feedback to ace your next interview."
    },
    {
      icon: <User className="h-12 w-12 text-blue-600" />,
      title: "Personalized 1:1 Sessions",
      description: "Get tailored guidance and support to address your specific learning needs."
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Resume Building",
      description: "Craft a standout resume that highlights your strengths and gets you noticed."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Elevate Your Career with Professional{' '}
              <span className="text-blue-600">English Communication Skills!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Ready to land your dream job? Join our online classes designed to give you the competitive edge you need. 
              We'll help you master the communication skills that employers are looking for, all from the comfort of your own home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Link to="/register">Register Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link to="/contact">Book Free Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive English communication training designed to boost your professional success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Your Instructor</h2>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Aswin Saigopal</h3>
              <p className="text-lg text-gray-700 mb-6">
                ERP & Digital Transformation Leader with over 5 years of proven experience in the IT industry. 
                Currently Sr. Implementation & Support Lead at ApexSoftNet, Aswin brings a unique combination of 
                technical expertise, teaching experience as an Assistant Professor, and hands-on interview experience 
                as a Talent Acquisition Consultant. He'll share real-world insights and practical strategies to help you succeed.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">5+ Years Experience</span>
              </div>
              <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link to="/about">Learn More About Our Instructor <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                  <User className="h-32 w-32 text-blue-600" />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">Aswin Saigopal</h3>
                  <p className="text-gray-600">ERP & Digital Transformation Leader</p>
                  <p className="text-sm text-gray-500 mt-1">Sr. Implementation & Support Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Classes are held online.</h2>
          <p className="text-xl text-blue-100 mb-12">Join from anywhere, anytime</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>60-day comprehensive batch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Regular price: ₹600</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span className="font-semibold text-yellow-300">Early Bird Offer: ₹500 (First 10 registrations)</span>
                </div>
              </div>
              <Button asChild size="lg" className="mt-8 bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/register">Register Online</Link>
              </Button>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <QrCode className="h-32 w-32 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-center font-medium">QR Code</p>
                <p className="text-gray-500 text-sm text-center mt-2">Scan to register instantly</p>
              </div>
              <p className="text-white mt-4 font-medium">Scan the QR code to register today!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't Wait - Transform Your Career Today!</h2>
          <p className="text-xl text-gray-300 mb-8">Join hundreds of successful students who have elevated their careers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/register">Start Your Journey</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/success-stories">Read Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

