import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Mail, 
  GraduationCap, 
  Globe,
  TrendingUp,
  Users,
  Calendar,
  Activity
} from 'lucide-react';
import { blogService, newsletterService, courseService } from '../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    blogPosts: 0,
    newsletters: 0,
    courseAnnouncements: 0,
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [blogResponse, newsletterResponse, courseResponse] = await Promise.all([
        blogService.getBlogPosts(),
        newsletterService.getNewsletters(),
        courseService.getCourseAnnouncements()
      ]);

      setStats({
        blogPosts: blogResponse.posts?.length || 0,
        newsletters: newsletterResponse.newsletters?.length || 0,
        courseAnnouncements: courseResponse.announcements?.length || 0,
        recentActivity: [
          ...blogResponse.posts?.slice(0, 3).map(post => ({
            type: 'blog',
            title: post.title,
            date: post.created_at
          })) || [],
          ...newsletterResponse.newsletters?.slice(0, 2).map(newsletter => ({
            type: 'newsletter',
            title: newsletter.title,
            date: newsletter.created_at
          })) || [],
          ...courseResponse.announcements?.slice(0, 2).map(announcement => ({
            type: 'course',
            title: announcement.title,
            date: announcement.created_at
          })) || []
        ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5)
      });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Blog Posts',
      value: stats.blogPosts,
      description: 'Published articles',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Newsletters',
      value: stats.newsletters,
      description: 'Email campaigns',
      icon: Mail,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Course Announcements',
      value: stats.courseAnnouncements,
      description: 'Active announcements',
      icon: GraduationCap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Website Sections',
      value: 8,
      description: 'Manageable sections',
      icon: Globe,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'blog':
        return <FileText className="h-4 w-4 text-blue-600" />;
      case 'newsletter':
        return <Mail className="h-4 w-4 text-green-600" />;
      case 'course':
        return <GraduationCap className="h-4 w-4 text-purple-600" />;
      default:
        return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getActivityBadge = (type) => {
    switch (type) {
      case 'blog':
        return <Badge variant="secondary" className="bg-blue-50 text-blue-700">Blog</Badge>;
      case 'newsletter':
        return <Badge variant="secondary" className="bg-green-50 text-green-700">Newsletter</Badge>;
      case 'course':
        return <Badge variant="secondary" className="bg-purple-50 text-purple-700">Course</Badge>;
      default:
        return <Badge variant="secondary">Activity</Badge>;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-20 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-blue-100">
          Manage your Elevate English website content from this central hub
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>
              Latest updates across your content
            </CardDescription>
          </CardHeader>
          <CardContent>
            {stats.recentActivity.length > 0 ? (
              <div className="space-y-4">
                {stats.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{formatDate(activity.date)}</p>
                    </div>
                    {getActivityBadge(activity.type)}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No recent activity</p>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Quick Actions</span>
            </CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Create New Blog Post</p>
                    <p className="text-sm text-gray-500">Write and publish a new article</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Send Newsletter</p>
                    <p className="text-sm text-gray-500">Create and send email campaign</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Announce New Course</p>
                    <p className="text-sm text-gray-500">Add course registration details</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Update Website Content</p>
                    <p className="text-sm text-gray-500">Modify homepage and sections</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

