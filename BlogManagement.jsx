import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BlogManagement = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Blog Management</CardTitle>
          <CardDescription>Manage your blog posts and articles</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Blog management functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogManagement;

