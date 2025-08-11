import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronUp, Search, HelpCircle, Clock, Users, CreditCard, BookOpen, MessageCircle } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    {
      id: 'course-details',
      title: 'Course Details',
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      faqs: [
        {
          id: 1,
          question: "How long is the complete course program?",
          answer: "Our comprehensive English communication course is a 60-day program designed to provide thorough training in all aspects of professional communication. The program includes regular classes, practice sessions, mock interviews, and personalized feedback."
        },
        {
          id: 2,
          question: "What topics are covered in the course?",
          answer: "The course covers four main areas: Communication English Classes (vocabulary, grammar, presentation skills), Mock Interviews (industry-specific scenarios, feedback), Personalized 1:1 Sessions (customized learning), and Resume Building (ATS-friendly formatting, professional templates). Each area is designed to enhance your professional communication skills."
        },
        {
          id: 3,
          question: "Are the classes conducted online or offline?",
          answer: "All our classes are conducted online via video conferencing platforms. This allows you to learn from the comfort of your home and provides flexibility in scheduling. You'll need a stable internet connection and a device with camera and microphone capabilities."
        },
        {
          id: 4,
          question: "What is the class schedule and timing?",
          answer: "We offer flexible scheduling to accommodate working professionals and students. Classes are typically held in the evening hours (6 PM - 9 PM IST) on weekdays, with additional weekend sessions available. The exact schedule is finalized based on batch preferences and instructor availability."
        },
        {
          id: 5,
          question: "How many students are there in each batch?",
          answer: "We maintain small batch sizes of 8-12 students to ensure personalized attention and maximum interaction. This allows our instructor to provide individual feedback and address specific learning needs of each student."
        }
      ]
    },
    {
      id: 'instructor-qualifications',
      title: 'Instructor & Qualifications',
      icon: <Users className="h-5 w-5 text-green-600" />,
      faqs: [
        {
          id: 6,
          question: "What are the instructor's qualifications?",
          answer: "Our expert faculty has over 5 years of proven experience in the IT industry, having worked as a Business Analyst, Domain Expert, and Placement Faculty. They bring real-world insights and practical strategies from their professional experience in top IT companies."
        },
        {
          id: 7,
          question: "Does the instructor have teaching experience?",
          answer: "Yes, our instructor has extensive experience as a Placement Faculty, having successfully trained and placed hundreds of students in leading IT companies. They understand the specific communication challenges faced by job seekers and tailor the training accordingly."
        },
        {
          id: 8,
          question: "Will I get personalized feedback?",
          answer: "Absolutely! Our course includes personalized 1:1 sessions where you'll receive individual attention and customized feedback. The instructor will identify your specific areas for improvement and provide targeted guidance to help you progress faster."
        },
        {
          id: 9,
          question: "What makes this course different from others?",
          answer: "Our course is designed by an industry professional who understands what employers actually look for. Unlike generic English courses, we focus on practical, workplace-relevant communication skills. The combination of group classes, mock interviews, and personalized sessions ensures comprehensive development."
        }
      ]
    },
    {
      id: 'pricing-payment',
      title: 'Pricing & Payment',
      icon: <CreditCard className="h-5 w-5 text-purple-600" />,
      faqs: [
        {
          id: 10,
          question: "What is the course fee?",
          answer: "The regular course fee is ₹600 for the complete 60-day program. However, we're currently offering an early bird discount of ₹100 for the first 10 registrations, bringing the price down to ₹500."
        },
        {
          id: 11,
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including UPI, net banking, debit/credit cards, and digital wallets. Payment details and instructions will be provided after you submit the registration form."
        },
        {
          id: 12,
          question: "Is there any installment option available?",
          answer: "Currently, we require full payment at the time of registration to secure your spot in the batch. However, given the affordable pricing and comprehensive nature of the course, most students find it to be excellent value for money."
        },
        {
          id: 13,
          question: "What is included in the course fee?",
          answer: "The course fee includes all four components: Communication English Classes, Mock Interview sessions, Personalized 1:1 sessions, Resume Building workshops, course materials, practice exercises, and a certificate of completion. There are no hidden charges."
        },
        {
          id: 14,
          question: "Do you offer any refund policy?",
          answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course quality. Refund requests must be made within the first week of course commencement with valid reasons. Terms and conditions apply."
        }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical & Support',
      icon: <HelpCircle className="h-5 w-5 text-orange-600" />,
      faqs: [
        {
          id: 15,
          question: "What technical requirements do I need?",
          answer: "You'll need a computer or smartphone with a stable internet connection, camera, and microphone. We recommend using a laptop or desktop for the best experience. Popular browsers like Chrome, Firefox, or Safari work well with our video conferencing platform."
        },
        {
          id: 16,
          question: "What if I miss a class?",
          answer: "All classes are recorded and made available to students for review. If you miss a live session, you can catch up by watching the recording. Additionally, you can schedule a makeup session with the instructor if needed."
        },
        {
          id: 17,
          question: "How do I access the course materials?",
          answer: "Course materials, recordings, and practice exercises are shared through our online learning platform. You'll receive access credentials after registration. Materials remain accessible throughout the course duration and for 30 days after completion."
        },
        {
          id: 18,
          question: "What if I face technical issues during class?",
          answer: "We provide technical support during class hours. Our support team can help you troubleshoot common issues like audio/video problems or connectivity issues. We also provide a backup communication channel for emergencies."
        },
        {
          id: 19,
          question: "Can I get additional practice sessions?",
          answer: "Yes, if you need extra practice, you can request additional 1:1 sessions with the instructor. These may be available at a nominal additional cost, depending on your specific needs and the instructor's availability."
        }
      ]
    },
    {
      id: 'career-placement',
      title: 'Career & Placement',
      icon: <Clock className="h-5 w-5 text-red-600" />,
      faqs: [
        {
          id: 20,
          question: "Do you provide job placement assistance?",
          answer: "While we don't guarantee job placements, our course is specifically designed to improve your employability. Our instructor's background as a Placement Faculty means you'll receive valuable insights about what employers look for and how to present yourself effectively."
        },
        {
          id: 21,
          question: "Will I receive a certificate after completion?",
          answer: "Yes, you'll receive a certificate of completion after successfully finishing the 60-day program. This certificate validates your training in professional English communication skills and can be added to your resume and LinkedIn profile."
        },
        {
          id: 22,
          question: "How will this course help in my job interviews?",
          answer: "The course includes dedicated mock interview sessions with realistic scenarios and constructive feedback. You'll practice answering common interview questions, improve your confidence, and learn how to articulate your thoughts clearly and professionally."
        },
        {
          id: 23,
          question: "Can this course help with my current job performance?",
          answer: "Absolutely! The communication skills you'll learn are directly applicable to your current workplace. You'll improve your email writing, presentation skills, meeting participation, and overall professional communication, which can lead to better performance reviews and career advancement."
        },
        {
          id: 24,
          question: "What is the success rate of your students?",
          answer: "We have an 85% placement rate, with most students finding new opportunities or advancing in their current roles within 3 months of course completion. Our focus on practical, industry-relevant skills contributes to this high success rate."
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({ ...faq, category: category.title }))
  );

  const filteredFaqs = searchTerm 
    ? allFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our English communication courses, pricing, and more
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {searchTerm ? (
          /* Search Results */
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Search Results for "{searchTerm}" ({filteredFaqs.length} found)
            </h2>
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <Card key={faq.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader
                      className="cursor-pointer"
                      onClick={() => toggleItem(`search-${faq.id}`)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg font-semibold text-left">
                            {faq.question}
                          </CardTitle>
                          <CardDescription className="text-sm text-blue-600 mt-1">
                            Category: {faq.category}
                          </CardDescription>
                        </div>
                        {openItems[`search-${faq.id}`] ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </CardHeader>
                    {openItems[`search-${faq.id}`] && (
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-8">
                  <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">
                    Try searching with different keywords or browse the categories below.
                  </p>
                  <Button onClick={() => setSearchTerm('')} variant="outline">
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          /* Category View */
          <div className="space-y-8">
            {faqCategories.map((category) => (
              <div key={category.id}>
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.faqs.map((faq) => (
                    <Card key={faq.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader
                        className="cursor-pointer"
                        onClick={() => toggleItem(faq.id)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-semibold text-left">
                            {faq.question}
                          </CardTitle>
                          {openItems[faq.id] ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </CardHeader>
                      {openItems[faq.id] && (
                        <CardContent>
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-blue-900">
                Still Have Questions?
              </CardTitle>
              <CardDescription className="text-blue-700 text-lg">
                Can't find what you're looking for? We're here to help!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Us
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <a href="/register">
                    Register Now
                  </a>
                </Button>
              </div>
              <p className="text-sm text-blue-600 mt-4">
                Response time: Within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

