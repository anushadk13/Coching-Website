import { Link } from 'react-router-dom';
import { Dumbbell, Salad, Brain, Heart, Leaf, Flower2, ArrowRight, ArrowUpRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import './Home.css';
import heroImage from '../assets/images/imag1/663188792_18366890119202641_5831454967479031907_n.jpg';
import coachImage from '../assets/images/768258135_18373281028229891_8035218790077861210_n.jpeg';
import program1Image from '../assets/images/625320424_18346431100229891_5400802394696119463_n.jpg';
import program3Image from '../assets/images/599794776_18340503151229891_3736775543797698400_n.jpg';

// Hero Feature Strip
const heroFeatures = [
  { icon: <Dumbbell />, title: 'Strength', desc: 'Training made simple' },
  { icon: <Leaf />, title: 'Balanced Lifestyle', desc: 'Realistic & sustainable' },
  { icon: <Heart />, title: 'Confidence', desc: 'Inside & out' },
  { icon: <Flower2 />, title: 'Long-Term Results', desc: 'No extreme diets' },
];

// Programs Preview
const programsPreview = [
  {
    image: program1Image,
    title: '1:1 Coaching',
    desc: 'Personalised guidance, accountability and support to help you reach your goals.',
    to: '/coaching',
  },
  {
    image: coachImage,
    title: 'Nutrition Support',
    desc: 'Balanced, flexible nutrition without food rules or guilt.',
    to: '/coaching',
  },
  {
    image: program3Image,
    position: 'center 20%',
    title: 'Mindset & Lifestyle',
    desc: 'Build habits, confidence and a positive relationship with yourself.',
    to: '/coaching',
  },
];

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
        <div className="container hero-grid">
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
                Send an Enquiry <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-avatars">
                <span className="hero-trust-avatar hero-trust-avatar--1" />
                <span className="hero-trust-avatar hero-trust-avatar--2" />
                <span className="hero-trust-avatar hero-trust-avatar--3" />
              </div>
              <p className="hero-trust-text">
                Helping women <strong>build a stronger</strong>, more confident version of themselves.
              </p>
            </div>
          </div>

          <div className="hero-photo-card">
            <img
              src={heroImage}
              alt="Rachel stretching in golden natural light"
              className="hero-photo-img"
            />
            <div className="hero-decor">
              <span className="hero-decor-script font-script">Stronger</span>
              <span className="hero-decor-script font-script">Softer</span>
              <span className="hero-decor-script font-script">More You</span>
              <svg className="hero-decor-heart" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 50,35 C 50,35 37,17 22,28 C 7,39 12,68 50,88 C 88,68 93,39 78,28 C 63,17 50,35 50,35 Z" />
              </svg>
              <div className="hero-decor-list">
                <span>Fitness</span>
                <span>Mindset</span>
                <span>Sustainable Habits</span>
                <span>A Happier You</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="hero-features-inner">
            {heroFeatures.map((feature, idx) => (
              <div key={idx} className="hero-feature">
                <span className="hero-feature-icon">{feature.icon}</span>
                <div>
                  <span className="hero-feature-title">{feature.title}</span>
                  <span className="hero-feature-desc">{feature.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="home-programs-preview">
        <div className="container">
          <div className="programs-preview-header">
            <div>
              <span className="section-tag">Our Programs</span>
              <h2 className="section-heading">Coaching that fits your life</h2>
            </div>
            <Link to="/programs" className="programs-preview-link">
              View All Programs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="programs-preview-grid">
            {programsPreview.map((program, idx) => (
              <Link
                to={program.to}
                key={idx}
                className={`program-card ${program.image ? '' : 'program-card--solid'}`}
                style={program.image ? { backgroundImage: `url(${program.image})`, backgroundPosition: program.position || 'center' } : undefined}
              >
                <div className="program-card-overlay" />
                <div className="program-card-body">
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>
                </div>
                <span className="program-card-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            ))}
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
                alt="Coach Rachel Accadia in a sunlit home studio"
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
          <p>Send an enquiry to see how we can build confidence and strength together.</p>
          <Link to="/contact" className="btn btn-white btn-lg">
            Send an Enquiry
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
