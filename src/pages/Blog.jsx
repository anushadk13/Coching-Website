import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  User,
  Dumbbell,
  Flame,
  Brain,
  Salad,
  Heart,
  TrendingUp,
  Mail,
  Apple,
} from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: '5 Beginner Gym Tips That Changed Everything',
    category: 'Workouts',
    date: 'July 2026',
    excerpt: 'Feeling intimidated by the weights section? Here are five practical tips to build confidence and start your journey.',
    author: 'Coach Sarah',
    readTime: '5 min read',
    icon: <Dumbbell size={48} />,
    gradient: 'linear-gradient(135deg, var(--color-sage-dark), var(--color-sage))'
  },
  {
    id: 2,
    title: 'The Truth About Fat Loss (No, It\'s Not Cardio)',
    category: 'Nutrition',
    date: 'July 2026',
    excerpt: 'Stop running endlessly on the treadmill. Discover the real science behind sustainable fat loss and body composition.',
    author: 'Coach Sarah',
    readTime: '6 min read',
    icon: <Flame size={48} />,
    gradient: 'linear-gradient(135deg, #e8b4a6, var(--color-blush))'
  },
  {
    id: 3,
    title: 'How I Built Confidence Walking Into the Gym',
    category: 'Mindset',
    date: 'June 2026',
    excerpt: 'Gym anxiety is real. I share my personal story of overcoming fear and how you can reclaim your space in the gym.',
    author: 'Coach Sarah',
    readTime: '7 min read',
    icon: <Brain size={48} />,
    gradient: 'linear-gradient(135deg, var(--color-charcoal), #4a4a4a)'
  },
  {
    id: 4,
    title: 'High Protein Pasta Bake (Under 500 Calories)',
    category: 'Recipes',
    date: 'June 2026',
    excerpt: 'Comfort food doesn\'t have to derail your goals. This cheesy, high-protein pasta bake will become a weekly staple.',
    author: 'Coach Sarah',
    readTime: '4 min read',
    icon: <Salad size={48} />,
    gradient: 'linear-gradient(135deg, #e8c99e, var(--color-beige))'
  },
  {
    id: 5,
    title: 'Why Motivation Fades (And What to Do About It)',
    category: 'Motivation',
    date: 'May 2026',
    excerpt: 'Motivation is a feeling, but discipline is an action. Learn how to build systems that keep you going when motivation drops.',
    author: 'Coach Sarah',
    readTime: '5 min read',
    icon: <Heart size={48} />,
    gradient: 'linear-gradient(135deg, #4d6842, var(--color-sage-dark))'
  },
  {
    id: 6,
    title: 'The Beginner\'s Guide to Progressive Overload',
    category: 'Workouts',
    date: 'May 2026',
    excerpt: 'If you want to see changes, you need to challenge your body. Here is how to implement progressive overload simply.',
    author: 'Coach Sarah',
    readTime: '8 min read',
    icon: <TrendingUp size={48} />,
    gradient: 'linear-gradient(135deg, #5b7c88, var(--color-sage))'
  },
  {
    id: 7,
    title: 'How to Build a Sustainable Morning Routine',
    category: 'Mindset',
    date: 'April 2026',
    excerpt: 'You don\'t need to wake up at 4 AM to be successful. Create a morning routine that actually works for your lifestyle.',
    author: 'Coach Sarah',
    readTime: '5 min read',
    icon: <Clock size={48} />,
    gradient: 'linear-gradient(135deg, #eaddcc, var(--color-cream))'
  },
  {
    id: 8,
    title: 'Simple Meal Prep for Busy Women',
    category: 'Recipes',
    date: 'April 2026',
    excerpt: 'Spend less time in the kitchen and more time enjoying life with these efficient meal prep strategies.',
    author: 'Coach Sarah',
    readTime: '6 min read',
    icon: <Apple size={48} />,
    gradient: 'linear-gradient(135deg, #f2dbd3, var(--color-blush))'
  },
  {
    id: 9,
    title: 'Strength vs Cardio: What\'s Best for Fat Loss?',
    category: 'Workouts',
    date: 'March 2026',
    excerpt: 'The ultimate debate settled. We break down the pros and cons of each and how to structure your weekly routine.',
    author: 'Coach Sarah',
    readTime: '7 min read',
    icon: <Dumbbell size={48} />,
    gradient: 'linear-gradient(135deg, #3a3a3a, var(--color-sage-dark))'
  }
];

const categories = ['All', 'Workouts', 'Nutrition', 'Mindset', 'Recipes', 'Motivation'];

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [email, setEmail] = useState('');

  const filteredPosts = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <PageWrapper>
      <div className="blog-page">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="container">
            <motion.div 
              className="blog-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Tips, Recipes & Motivation</h1>
              <p>Actionable advice to help you build strength, fuel your body, and transform your mindset.</p>
            </motion.div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="blog-main-section">
          <div className="container">
            {/* Filters */}
            <div className="blog-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <motion.div layout className="blog-grid">
              <AnimatePresence>
                {filteredPosts.map((post) => (
                  <motion.article 
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="blog-card"
                  >
                    <div 
                      className="blog-card-image" 
                      style={{ background: post.gradient }}
                    >
                      <div className="blog-card-icon">
                        {post.icon}
                      </div>
                      <span className="blog-category-badge">{post.category}</span>
                    </div>
                    
                    <div className="blog-card-content">
                      <div className="blog-meta-top">
                        <span className="blog-date">{post.date}</span>
                      </div>
                      
                      <h3>{post.title}</h3>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      
                      <div className="blog-meta-bottom">
                        <div className="blog-author">
                          <div className="author-avatar">
                            <User size={14} />
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <div className="blog-read-time">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Link to={`/blog/${post.id}`} className="read-more-btn">
                        Read More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="blog-newsletter-cta">
          <div className="container">
            <motion.div 
              className="cta-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Never Miss a Post</h2>
              <p>Get the latest tips, recipes, and motivation delivered to your inbox every week.</p>
              
              <form onSubmit={handleSubscribe} className="cta-form">
                <div className="input-with-icon">
                  <Mail size={20} className="icon" />
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Blog;
