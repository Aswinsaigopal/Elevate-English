from flask import Blueprint, request, jsonify, session
from werkzeug.security import generate_password_hash
from datetime import datetime
from src.models.admin import db, Admin, BlogPost, Newsletter, CourseAnnouncement, WebsiteContent

admin_bp = Blueprint('admin', __name__)

# Authentication routes
@admin_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return jsonify({'error': 'Username and password are required'}), 400

        admin = Admin.query.filter_by(username=username).first()
        
        if not admin or not admin.check_password(password):
            return jsonify({'error': 'Invalid credentials'}), 401

        if not admin.is_active:
            return jsonify({'error': 'Account is deactivated'}), 401

        # Update last login
        admin.last_login = datetime.utcnow()
        db.session.commit()

        # Store admin info in session
        session['admin_id'] = admin.id
        session['admin_username'] = admin.username

        return jsonify({
            'message': 'Login successful',
            'admin': admin.to_dict()
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@admin_bp.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'message': 'Logout successful'}), 200

@admin_bp.route('/change-password', methods=['POST'])
def change_password():
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        data = request.get_json()
        current_password = data.get('current_password')
        new_password = data.get('new_password')

        if not current_password or not new_password:
            return jsonify({'error': 'Current and new passwords are required'}), 400

        admin = Admin.query.get(session['admin_id'])
        if not admin.check_password(current_password):
            return jsonify({'error': 'Current password is incorrect'}), 400

        admin.set_password(new_password)
        admin.must_change_password = False
        db.session.commit()

        return jsonify({'message': 'Password changed successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@admin_bp.route('/profile', methods=['GET'])
def get_profile():
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        admin = Admin.query.get(session['admin_id'])
        return jsonify({'admin': admin.to_dict()}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Blog management routes
@admin_bp.route('/blog-posts', methods=['GET'])
def get_blog_posts():
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        posts = BlogPost.query.order_by(BlogPost.created_at.desc()).all()
        return jsonify({'posts': [post.to_dict() for post in posts]}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@admin_bp.route('/blog-posts', methods=['POST'])
def create_blog_post():
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        data = request.get_json()
        
        post = BlogPost(
            title=data.get('title'),
            content=data.get('content'),
            excerpt=data.get('excerpt'),
            category=data.get('category'),
            tags=','.join(data.get('tags', [])),
            read_time=data.get('read_time'),
            is_featured=data.get('is_featured', False),
            is_published=data.get('is_published', True)
        )

        db.session.add(post)
        db.session.commit()

        return jsonify({'message': 'Blog post created successfully', 'post': post.to_dict()}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@admin_bp.route('/blog-posts/<int:post_id>', methods=['PUT'])
def update_blog_post(post_id):
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        post = BlogPost.query.get_or_404(post_id)
        data = request.get_json()

        post.title = data.get('title', post.title)
        post.content = data.get('content', post.content)
        post.excerpt = data.get('excerpt', post.excerpt)
        post.category = data.get('category', post.category)
        post.tags = ','.join(data.get('tags', [])) if data.get('tags') else post.tags
        post.read_time = data.get('read_time', post.read_time)
        post.is_featured = data.get('is_featured', post.is_featured)
        post.is_published = data.get('is_published', post.is_published)
        post.updated_at = datetime.utcnow()

        db.session.commit()

        return jsonify({'message': 'Blog post updated successfully', 'post': post.to_dict()}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@admin_bp.route('/blog-posts/<int:post_id>', methods=['DELETE'])
def delete_blog_post(post_id):
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        post = BlogPost.query.get_or_404(post_id)
        db.session.delete(post)
        db.session.commit()

        return jsonify({'message': 'Blog post deleted successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Newsletter management routes
@admin_bp.route('/newsletters', methods=['GET'])
def get_newsletters():
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        newsletters = Newsletter.query.order_by(Newsletter.created_at.desc()).all()
        return jsonify({'newsletters': [newsletter.to_dict() for newsletter in newsletters]}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@admin_bp.route('/newsletters', methods=['POST'])
def create_newsletter():
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        data = request.get_json()
        
        newsletter = Newsletter(
            title=data.get('title'),
            content=data.get('content')
        )

        db.session.add(newsletter)
        db.session.commit()

        return jsonify({'message': 'Newsletter created successfully', 'newsletter': newsletter.to_dict()}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Course announcement routes
@admin_bp.route('/course-announcements', methods=['GET'])
def get_course_announcements():
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        announcements = CourseAnnouncement.query.order_by(CourseAnnouncement.created_at.desc()).all()
        return jsonify({'announcements': [announcement.to_dict() for announcement in announcements]}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@admin_bp.route('/course-announcements', methods=['POST'])
def create_course_announcement():
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        data = request.get_json()
        
        announcement = CourseAnnouncement(
            title=data.get('title'),
            description=data.get('description'),
            registration_link=data.get('registration_link'),
            start_date=datetime.fromisoformat(data.get('start_date')) if data.get('start_date') else None,
            end_date=datetime.fromisoformat(data.get('end_date')) if data.get('end_date') else None,
            price=data.get('price'),
            early_bird_price=data.get('early_bird_price'),
            early_bird_deadline=datetime.fromisoformat(data.get('early_bird_deadline')) if data.get('early_bird_deadline') else None,
            is_active=data.get('is_active', True)
        )

        db.session.add(announcement)
        db.session.commit()

        return jsonify({'message': 'Course announcement created successfully', 'announcement': announcement.to_dict()}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@admin_bp.route('/course-announcements/<int:announcement_id>', methods=['PUT'])
def update_course_announcement(announcement_id):
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        announcement = CourseAnnouncement.query.get_or_404(announcement_id)
        data = request.get_json()

        announcement.title = data.get('title', announcement.title)
        announcement.description = data.get('description', announcement.description)
        announcement.registration_link = data.get('registration_link', announcement.registration_link)
        announcement.price = data.get('price', announcement.price)
        announcement.early_bird_price = data.get('early_bird_price', announcement.early_bird_price)
        announcement.is_active = data.get('is_active', announcement.is_active)
        
        if data.get('start_date'):
            announcement.start_date = datetime.fromisoformat(data.get('start_date'))
        if data.get('end_date'):
            announcement.end_date = datetime.fromisoformat(data.get('end_date'))
        if data.get('early_bird_deadline'):
            announcement.early_bird_deadline = datetime.fromisoformat(data.get('early_bird_deadline'))

        announcement.updated_at = datetime.utcnow()
        db.session.commit()

        return jsonify({'message': 'Course announcement updated successfully', 'announcement': announcement.to_dict()}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Website content management routes
@admin_bp.route('/website-content', methods=['GET'])
def get_website_content():
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        content = WebsiteContent.query.all()
        content_dict = {}
        
        for item in content:
            if item.section not in content_dict:
                content_dict[item.section] = {}
            content_dict[item.section][item.key] = item.value

        return jsonify({'content': content_dict}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@admin_bp.route('/website-content', methods=['POST'])
def update_website_content():
    try:
        if 'admin_id' not in session:
            return jsonify({'error': 'Not authenticated'}), 401

        data = request.get_json()
        section = data.get('section')
        key = data.get('key')
        value = data.get('value')

        if not section or not key or value is None:
            return jsonify({'error': 'Section, key, and value are required'}), 400

        content = WebsiteContent.query.filter_by(section=section, key=key).first()
        
        if content:
            content.value = value
            content.updated_at = datetime.utcnow()
        else:
            content = WebsiteContent(section=section, key=key, value=value)
            db.session.add(content)

        db.session.commit()

        return jsonify({'message': 'Website content updated successfully', 'content': content.to_dict()}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

