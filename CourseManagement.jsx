import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CourseManagement = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Course Announcements</CardTitle>
          <CardDescription>Announce new courses and registration links</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Course management functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseManagement;

