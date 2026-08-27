import { Link } from 'react-router-dom';
import { Dumbbell, Salad, Brain, Heart, Sparkles, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import './Home.css';
import heroImage from '../assets/images/SnapInsta.to_580783422_18537820486027705_5275162506935862360_n.jpg';
import coachImage from '../assets/images/768258135_18373281028229891_8035218790077861210_n.jpeg';

// Content Pillars
const pillars = [
  {
    icon: <Dumbbell className="pillar-icon" />,
    title: 'Training',
    tagline: 'Build strength',
    description: 'Get stronger and feel capable with programs designed for real life, focusing on athletic movement and long-term joint health.',
  },
  {
    icon: <Salad className="pillar-icon" />,
    title: 'Nutrition',
    tagline: 'Fuel your body',
    description: 'Simple, realistic nutrition guidance to fuel your performance and daily energy—without restrictive rules or food guilt.',
  },
  {
    icon: <Brain className="pillar-icon" />,
    title: 'Mindset',
    tagline: 'Build self-belief',
    description: 'Reshape your relationship with training and yourself. Shift the focus from how you look to who you are becoming.',
  },
  {
    icon: <Heart className="pillar-icon" />,
    title: 'Sustainable Habits',
    tagline: 'Create lasting change',
    description: 'Ditch the extremes and quick fixes. Establish routines that fit seamlessly into your schedule and support a vibrant life.',
  },
];

// Core Messaging
const coreMessaging = [
  { text: 'Progress over perfection.' },
  { text: 'Build strength from the inside out.' },
  { text: 'Create habits you can actually sustain.' },
  { text: 'Fuel your body rather than punish it.' },
  { text: 'Build confidence through action.' },
  { text: 'Become stronger — physically and mentally.' },
];

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="section-tag">Built From Within Coaching</span>
            <h1 className="hero-title">
              Build <span className="font-script">strength</span>.<br />
              Build confidence.<br />
              Build yourself.
            </h1>
            <p className="hero-description">
              Coaching for women who want to feel stronger, more confident and more capable — without extremes, quick fixes or having to make fitness their entire life.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book Your Free Discovery Call
              </Link>
            </div>
            <div className="hero-subtag">
              <span className="hero-subtag-text">Built from within. Proven by action.</span>
              <svg className="hand-drawn-heart" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 50,35 C 50,35 37,17 22,28 C 7,39 12,68 50,88 C 88,68 93,39 78,28 C 63,17 50,35 50,35 Z" />
              </svg>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              {/* Using a premium placeholder matching the brand guidelines (natural light, authentic) */}
              <img 
                src={heroImage} 
                alt="Rachel training in natural light" 
                className="hero-image"
              />
              <div className="hero-badge">
                <Sparkles size={16} className="badge-icon" />
                <span>Strong, soft & grounded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Rachel Section */}
      <section className="home-coach">
        <div className="container coach-inner">
          <div className="coach-visual">
            <div className="coach-image-frame">
              <img 
                src={coachImage} 
                alt="Coach Rachel Accadia" 
                className="coach-image"
              />
              <div className="coach-image-backdrop"></div>
            </div>
          </div>

          <div className="coach-content">
            <span className="section-tag">Meet Your Coach</span>
            <h2 className="section-heading">Hey, I’m Rachel 👋🏼</h2>
            <div className="divider divider--left"></div>
            
            <div className="coach-bio">
              <p>I didn’t start fitness knowing exactly what I was doing either.</p>
              <p>I’ve tried the fads, overcomplicated things and learnt plenty of lessons along the way.</p>
              <p>Somewhere between starting as a complete beginner and becoming a coach and athlete, my reason for training changed.</p>
              <p className="highlight-text">It stopped being only about changing how I looked.</p>
              <p className="highlight-text-large">It became about who I was <span className="font-script">becoming</span>.</p>
              <p>And that’s exactly what Built From Within is about.</p>
            </div>

            <Link to="/about" className="btn btn-secondary btn-lg coach-action">
              More About Rachel <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Content Pillars Section */}
      <section className="home-pillars">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Coaching Focus</span>
            <h2 className="section-heading">The Pillars of Built From Within</h2>
            <p className="section-subheading">
              Our holistic coaching method balances physical strength with mental resilience to help you thrive in real life.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card card">
                <div className="pillar-header">
                  <div className="pillar-icon-wrapper">
                    {pillar.icon}
                  </div>
                  <span className="pillar-tagline">{pillar.tagline}</span>
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Messaging / Principles Section */}
      <section className="home-principles">
        <div className="container principles-inner">
          <div className="principles-content">
            <span className="section-tag">Our Philosophy</span>
            <h2 className="section-heading">Grounded in Action</h2>
            <p className="principles-intro">
              We focus on building strength that carries over into how you show up in your work, relationships, and daily life.
            </p>

            <div className="principles-grid">
              {coreMessaging.map((message, idx) => (
                <div key={idx} className="principle-item">
                  <svg className="principle-heart" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 50,35 C 50,35 37,17 22,28 C 7,39 12,68 50,88 C 88,68 93,39 78,28 C 63,17 50,35 50,35 Z" />
                  </svg>
                  <span>{message.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="principles-quote-box">
            <div className="quote-badge">BFW Design Check</div>
            <p className="quote-text">
              "You are becoming everything you didn't think was possible."
            </p>
            <span className="quote-author font-script">Rachel</span>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="home-cta-banner">
        <div className="container cta-banner-inner">
          <h2>Ready to build a stronger version of yourself?</h2>
          <p>Book a free 15-minute discovery call to see how we can build confidence and strength together.</p>
          <Link to="/contact" className="btn btn-white btn-lg">
            Book Your Free Call
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
