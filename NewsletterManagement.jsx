import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const NewsletterManagement = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Newsletter Management</CardTitle>
          <CardDescription>Create and send newsletters to subscribers</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Newsletter management functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterManagement;

