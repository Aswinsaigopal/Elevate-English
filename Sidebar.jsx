import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Mail, 
  GraduationCap, 
  Settings,
  Globe
} from 'lucide-react';
import logo from '../assets/logo.png';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: '/',
      icon: LayoutDashboard,
      label: 'Dashboard',
      description: 'Overview and statistics'
    },
    {
      path: '/website-content',
      icon: Globe,
      label: 'Website Content',
      description: 'Manage website UI and content'
    },
    {
      path: '/blog',
      icon: FileText,
      label: 'Blog Posts',
      description: 'Create and edit blog articles'
    },
    {
      path: '/newsletter',
      icon: Mail,
      label: 'Newsletter',
      description: 'Send newsletters to subscribers'
    },
    {
      path: '/courses',
      icon: GraduationCap,
      label: 'Course Announcements',
      description: 'Announce new courses and registration'
    }
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Elevate English" className="h-10 w-auto" />
          <div>
            <h1 className="text-lg font-bold text-gray-900">Elevate English</h1>
            <p className="text-sm text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-blue-700' : 'text-gray-400'}`} />
                  <div className="flex-1">
                    <div className={`font-medium ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Elevate English Admin Panel
          </p>
          <p className="text-xs text-gray-400">
            v1.0.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

