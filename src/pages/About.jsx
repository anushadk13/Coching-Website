import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Trophy, Heart, Smile } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import './About.css';
import aboutMain from '../assets/images/768258135_18373281028229891_8035218790077861210_n.jpeg';
import gallery1 from '../assets/images/Pro_day/img1.jpg';
import gallery2 from '../assets/images/Pro_day/img2.jpg';
import gallery3 from '../assets/images/Pro_day/img3.jpg';
import gallery4 from '../assets/images/Pro_day/img4.jpg';
import gallery5 from '../assets/images/Pro_day/img5.jpg';
import gallery6 from '../assets/images/Pro_day/img6.jpg';
import gallery7 from '../assets/images/Pro_day/img7.jpg';
import gallery8 from '../assets/images/Pro_day/img8.jpg';
import gallery9 from '../assets/images/Pro_day/img9.jpg';

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9,
];

export default function About() {
  return (
    <PageWrapper>
      {/* Intro Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="section-tag">The Story Behind the Vision</span>
          <h1 className="about-title">
            Built from <span className="font-script">within</span>.<br />
            Proven by action.
          </h1>
          <p className="about-subtitle">
            We believe fitness is about more than aesthetics. It's about building a body and mind that allow you to show up fully in your life.
          </p>
        </div>
      </section>

      {/* Meet Rachel Details */}
      <section className="about-story">
        <div className="container story-inner">
          <div className="story-content">
            <span className="section-tag">Meet Your Coach</span>
            <h2 className="story-heading">Hey, I’m Rachel 👋🏼</h2>
            <div className="divider divider--left"></div>
            
            <div className="story-text">
              <p>
                I didn’t start my fitness journey knowing exactly what I was doing. Like many women, I felt overwhelmed by conflicting advice, strict diets, and rules that didn't fit real life.
              </p>
              <p>
                I’ve tried the fads, overcomplicated things, and learnt plenty of lessons the hard way along the journey.
              </p>
              <p className="story-highlight">
                Somewhere between starting as a complete beginner and becoming a certified coach and competitive athlete, my reason for training changed.
              </p>
              <p>
                It stopped being only about changing how I looked or chasing a number on a scale. It became about who I was becoming—stronger, more resilient, and more confident in my own skin.
              </p>
              <p>
                And that is exactly what **Built From Within Coaching** is about. I wanted to build a coaching practice for women who want to feel capable and empowered, without extreme rules or making fitness their entire identity.
              </p>
            </div>
          </div>

          <div className="story-visual">
            <div className="about-image-frame">
              <img 
                src={aboutMain} 
                alt="Rachel smiling in light gym setting" 
                className="about-image"
              />
              <div className="about-image-overlay">
                <span>Proven by Action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Core Beliefs</span>
            <h2 className="section-heading">How We Do Things Differently</h2>
            <p className="section-subheading">
              We skip the quick fixes and restrictive guidelines in favor of a warm, sustainable approach that creates real change.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card card">
              <div className="value-icon-box">
                <Smile className="value-icon" />
              </div>
              <h3>Progress Over Perfection</h3>
              <p>Small, consistent changes build massive results over time. We celebrate the wins that happen away from the gym just as much as those inside it.</p>
            </div>

            <div className="value-card card">
              <div className="value-icon-box">
                <Sparkles className="value-icon" />
              </div>
              <h3>Grounded in Strength</h3>
              <p>Training should make you feel capable and powerful. We build your routine around solid strength foundations that support daily energy and longevity.</p>
            </div>

            <div className="value-card card">
              <div className="value-icon-box">
                <Heart className="value-icon" />
              </div>
              <h3>No Extremes, Ever</h3>
              <p>You shouldn't have to sacrifice your social life, favorite foods, or sanity to feel good. We build habits that fit your actual schedule and preferences.</p>
            </div>

            <div className="value-card card">
              <div className="value-icon-box">
                <Trophy className="value-icon" />
              </div>
              <h3>Empowerment through Education</h3>
              <p>Our goal is to teach you how to train and nourish your body so you can take control of your long-term wellness with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="about-gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Life in Action</span>
            <h2 className="section-heading">Behind the Coaching</h2>
            <p className="section-subheading">
              Glimpses of daily training, learning, and putting our core values into practice.
            </p>
          </div>
          
          <div className="gallery-scroller">
            <div className="gallery-track">
              {[...galleryImages, ...galleryImages].map((src, index) => (
                <div className="gallery-item" key={index}>
                  <img
                    src={src}
                    alt="Rachel coaching, training, and on stage at Pro Day"
                    className="gallery-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-cta">
        <div className="container about-cta-inner">
          <h2>Ready to start your journey?</h2>
          <p>
            Let's chat about your goals and how we can build a sustainable routine that makes you feel strong and capable.
          </p>
          <div className="about-cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Send an Enquiry
            </Link>
            <Link to="/coaching" className="btn btn-secondary btn-lg">
              Explore Coaching Options <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
