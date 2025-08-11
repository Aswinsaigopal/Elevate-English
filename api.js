const API_BASE_URL = '/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // Include cookies for session management
      ...options,
    };

    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }

    const response = await fetch(url, config);
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Network error' }));
      throw new Error(error.error || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Auth endpoints
  async login(credentials) {
    return this.request('/admin/login', {
      method: 'POST',
      body: credentials,
    });
  }

  async logout() {
    return this.request('/admin/logout', {
      method: 'POST',
    });
  }

  async changePassword(passwordData) {
    return this.request('/admin/change-password', {
      method: 'POST',
      body: passwordData,
    });
  }

  async getProfile() {
    return this.request('/admin/profile');
  }

  // Blog endpoints
  async getBlogPosts() {
    return this.request('/admin/blog-posts');
  }

  async createBlogPost(postData) {
    return this.request('/admin/blog-posts', {
      method: 'POST',
      body: postData,
    });
  }

  async updateBlogPost(postId, postData) {
    return this.request(`/admin/blog-posts/${postId}`, {
      method: 'PUT',
      body: postData,
    });
  }

  async deleteBlogPost(postId) {
    return this.request(`/admin/blog-posts/${postId}`, {
      method: 'DELETE',
    });
  }

  // Newsletter endpoints
  async getNewsletters() {
    return this.request('/admin/newsletters');
  }

  async createNewsletter(newsletterData) {
    return this.request('/admin/newsletters', {
      method: 'POST',
      body: newsletterData,
    });
  }

  // Course announcement endpoints
  async getCourseAnnouncements() {
    return this.request('/admin/course-announcements');
  }

  async createCourseAnnouncement(announcementData) {
    return this.request('/admin/course-announcements', {
      method: 'POST',
      body: announcementData,
    });
  }

  async updateCourseAnnouncement(announcementId, announcementData) {
    return this.request(`/admin/course-announcements/${announcementId}`, {
      method: 'PUT',
      body: announcementData,
    });
  }

  // Website content endpoints
  async getWebsiteContent() {
    return this.request('/admin/website-content');
  }

  async updateWebsiteContent(contentData) {
    return this.request('/admin/website-content', {
      method: 'POST',
      body: contentData,
    });
  }
}

export const authService = new ApiService();
export const blogService = new ApiService();
export const newsletterService = new ApiService();
export const courseService = new ApiService();
export const websiteService = new ApiService();

