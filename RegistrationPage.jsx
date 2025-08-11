import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Users, Star, Zap } from 'lucide-react';

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Register for <span className="text-blue-600">Elevate English</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Take the first step towards transforming your career with professional English communication skills
            </p>
            
            {/* Early Bird Offer Banner */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="h-6 w-6" />
                <span className="font-bold text-lg">LIMITED TIME OFFER!</span>
                <Zap className="h-6 w-6" />
              </div>
              <p className="text-lg">First 10 registrations get ₹100 OFF - Pay only ₹500 instead of ₹600!</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Registration Form</CardTitle>
                <CardDescription className="text-center">
                  Fill out the form below to secure your spot in our next batch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfbHbxQg97r8VY-7Rh7hHWhy0vC0UchifuMJqRhiNZ-pNcHCQ/viewform?embedded=true" 
                    width="100%" 
                    height="1094" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                    className="rounded-lg"
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with Course Info */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <div className="text-center">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    EARLY BIRD SPECIAL
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-700">Save ₹100!</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <p className="text-gray-600 mb-1">Regular Price</p>
                  <p className="text-2xl text-gray-400 line-through">₹600</p>
                </div>
                <div className="mb-4">
                  <p className="text-green-600 font-medium mb-1">Your Price</p>
                  <p className="text-4xl font-bold text-green-600">₹500</p>
                </div>
                <p className="text-sm text-red-600 font-medium">
                  Only for the first 10 registrations!
                </p>
              </CardContent>
            </Card>

            {/* Course Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>What's Included</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Communication English Classes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Mock Interview Sessions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Personalized 1:1 Sessions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Resume Building Workshop</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">60-day comprehensive program</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Expert instructor guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Course Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Course Schedule</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Duration:</p>
                    <p className="text-gray-600">60 days comprehensive program</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Format:</p>
                    <p className="text-gray-600">Online classes via video conferencing</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Schedule:</p>
                    <p className="text-gray-600">Flexible timings to suit your availability</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Class Size:</p>
                    <p className="text-gray-600">Small batches for personalized attention</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructor Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Your Instructor</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  <p className="font-medium text-gray-900">Expert Faculty</p>
                  <p className="text-gray-600">5+ years IT industry experience</p>
                  <p className="text-gray-600">Business Analyst & Domain Expert</p>
                  <p className="text-gray-600">Proven placement track record</p>
                  <div className="flex text-yellow-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  <p className="text-gray-600">
                    If you have any questions about the registration process or course details, 
                    feel free to contact us.
                  </p>
                  <p className="font-medium text-blue-600">
                    We're here to help you succeed!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

