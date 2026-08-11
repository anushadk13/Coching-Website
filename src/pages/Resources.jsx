import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Dumbbell, Salad, Apple, Clipboard, FileText, CheckCircle, Mail } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import './Resources.css';

const resourcesData = [
  {
    id: 1,
    title: 'Beginner Gym Guide',
    icon: <Dumbbell size={32} />,
    type: 'PDF',
    description: 'A complete guide to walking into any gym with confidence.',
    downloads: '2,400+',
    color: 'var(--color-sage)'
  },
  {
    id: 2,
    title: 'High Protein Meal Guide',
    icon: <Salad size={32} />,
    type: 'PDF',
    description: '30+ high-protein meals to fuel your transformation.',
    downloads: '1,850+',
    color: 'var(--color-blush)'
  },
  {
    id: 3,
    title: 'Grocery List',
    icon: <Apple size={32} />,
    type: 'PDF',
    description: 'A clean, simple grocery list to fill your fridge right.',
    downloads: '3,200+',
    color: 'var(--color-beige)'
  },
  {
    id: 4,
    title: 'Habit Tracker',
    icon: <Clipboard size={32} />,
    type: 'PDF',
    description: 'Track your daily habits and watch your consistency grow.',
    downloads: '4,100+',
    color: 'var(--color-cream)'
  },
  {
    id: 5,
    title: 'Workout Planner',
    icon: <FileText size={32} />,
    type: 'PDF',
    description: 'Plan your week and crush your fitness goals.',
    downloads: '1,200+',
    color: 'var(--color-sage-dark)'
  }
];

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleDownloadClick = (resource) => {
    setSelectedResource(resource);
    setIsSubmitted(false);
    setEmail('');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setSelectedResource(null);
      }, 3000);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    }
  };

  return (
    <PageWrapper>
      <div className="resources-page">
        {/* Hero Section */}
        <section className="resources-hero">
          <div className="container">
            <motion.div 
              className="resources-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag light">Free Downloads</span>
              <h1>Free Resources to Kickstart Your Journey</h1>
              <p>Everything you need to start building sustainable habits, crushing your workouts, and fueling your body.</p>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="section resources-grid-section">
          <div className="container">
            <div className="resources-grid">
              {resourcesData.map((resource, index) => (
                <motion.div 
                  key={resource.id} 
                  className={`resource-card ${index > 2 ? 'centered-row' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="resource-icon-container" style={{ backgroundColor: resource.color }}>
                    {resource.icon}
                  </div>
                  <div className="resource-content">
                    <div className="resource-badges">
                      <span className="badge">{resource.type}</span>
                      <span className="badge free">Free</span>
                    </div>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <div className="resource-meta">
                      <Download size={16} />
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <button 
                      className="btn btn-primary w-100"
                      onClick={() => handleDownloadClick(resource)}
                    >
                      Get Free Access
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section newsletter-section">
          <div className="container">
            <motion.div 
              className="newsletter-container"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="newsletter-content">
                <h2>Get New Resources Every Month</h2>
                <p>Join our community of over 5,000 women receiving exclusive weekly tips, free meal plans, and mindset coaching straight to their inbox.</p>
              </div>
              <div className="newsletter-form-container">
                {newsletterSubmitted ? (
                  <div className="success-message">
                    <CheckCircle className="success-icon" />
                    <p>You're in! Check your inbox soon.</p>
                  </div>
                ) : (
                  <form className="newsletter-form inline-form" onSubmit={handleNewsletterSubmit}>
                    <div className="input-group">
                      <Mail className="input-icon" size={20} />
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required 
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                  </form>
                )}
                <p className="privacy-note">No spam. Unsubscribe anytime.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Email Capture Modal */}
        {selectedResource && (
          <div className="modal-overlay" onClick={() => setSelectedResource(null)}>
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedResource(null)}>&times;</button>
              
              {!isSubmitted ? (
                <>
                  <div className="modal-header">
                    <div className="modal-icon" style={{ backgroundColor: selectedResource.color }}>
                      {selectedResource.icon}
                    </div>
                    <h3>Get the {selectedResource.title}</h3>
                    <p>Enter your email below and we'll send it straight to your inbox.</p>
                  </div>
                  <form onSubmit={handleEmailSubmit} className="modal-form">
                    <input 
                      type="email" 
                      placeholder="Your best email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      className="modal-input"
                    />
                    <button type="submit" className="btn btn-primary w-100">Send to My Inbox</button>
                  </form>
                  <p className="privacy-note mt-3 text-center">We respect your privacy. Unsubscribe anytime.</p>
                </>
              ) : (
                <div className="modal-success">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                  >
                    <CheckCircle size={64} className="success-icon-large" />
                  </motion.div>
                  <h3>It's on the way!</h3>
                  <p>Check your inbox for the {selectedResource.title}.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Resources;
