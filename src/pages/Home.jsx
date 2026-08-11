import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import './Home.css';

const benefits = [
  {
    title: 'Confidence-Based Coaching',
    description: 'Build a stronger mindset while creating sustainable fitness and nutrition habits that feel empowering—not extreme.',
  },
  {
    title: 'Designed for Busy Women',
    description: 'Programs built around real life, so you can make progress without sacrificing family, work, or energy.',
  },
  {
    title: 'Strength + Wellness',
    description: 'Focus on strength, mobility, and nutrition for long-term results that support both body and mind.',
  },
];

const approach = [
  {
    step: '01',
    title: 'Clarity Call',
    description: 'We start with a free conversation to understand your goals, preferences, and current habits.',
  },
  {
    step: '02',
    title: 'Personalized Plan',
    description: 'Receive a coaching plan that fits your schedule and supports sustainable progress.',
  },
  {
    step: '03',
    title: 'Guided Support',
    description: 'Stay accountable with coaching, mindset tools, and weekly check-ins that keep you moving.',
  },
  {
    step: '04',
    title: 'Results You Keep',
    description: 'Build confidence, strength, and routines that last beyond the first 30 days.',
  },
];

export default function Home() {
  return (
    <PageWrapper>
      <section className="home-hero">
        <div className="container hero-inner">
          <div>
            <span className="section-tag">Built From Within Coaching</span>
            <h1>Get stronger, feel confident, and build habits that last.</h1>
            <p>
              A modern coaching experience for women who want sustainable results without restrictive diets or burnout.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Call
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                Learn More
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h3>What you can expect</h3>
            <p>
              Personalized strength plans, simple nutrition guidance, and mindset support so you can feel empowered every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="home-benefits">
        <div className="container">
          <div className="section-title">
            <span className="section-tag">Why choose us</span>
            <h2>Coaching that feels supportive, flexible, and real.</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map((item) => (
              <div key={item.title} className="benefit-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-approach">
        <div className="container">
          <div className="section-title">
            <span className="section-tag">How it works</span>
            <h2>Your path to consistent progress in 4 steps.</h2>
          </div>
          <div className="approach-list">
            {approach.map((item) => (
              <div key={item.step} className="approach-step">
                <div className="step-number">{item.step}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
