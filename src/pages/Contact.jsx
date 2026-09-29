import { useState } from 'react';
import { Mail, Clock, CheckCircle2, Send } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import InstagramIcon from '../components/InstagramIcon';
import './Contact.css';

const interestOptions = [
  '1:1 Online Coaching',
  'Nutrition Coaching',
  'Group Program',
  'Not sure yet — general enquiry',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  interest: interestOptions[0],
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <section className="page-section contact-hero">
        <div className="container">
          <span className="section-tag">Let's Build This Together</span>
          <h1>Get In Touch</h1>
          <p>
            Ready to feel stronger and more confident? Tell me a bit about yourself and your goals, and I'll get back to you within 24–48 hours.
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="container contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-card card">
              <h3>Reach Out Directly</h3>
              <ul className="contact-info-list">
                <li>
                  <a href="mailto:hello@builtfromwithin.com" className="contact-info-link">
                    <span className="contact-info-icon"><Mail size={18} /></span>
                    <div>
                      <span className="contact-info-label">Email</span>
                      <span className="contact-info-value">hello@builtfromwithin.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rachelaccadia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-link"
                  >
                    <span className="contact-info-icon"><InstagramIcon size={18} /></span>
                    <div>
                      <span className="contact-info-label">Instagram</span>
                      <span className="contact-info-value">@rachelaccadia</span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="contact-info-link contact-info-link--static">
                    <span className="contact-info-icon"><Clock size={18} /></span>
                    <div>
                      <span className="contact-info-label">Response Time</span>
                      <span className="contact-info-value">Within 24–48 hours</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success card">
                <CheckCircle2 size={40} className="contact-success-icon" />
                <h3>Thank you, {form.name.split(' ')[0] || 'there'}!</h3>
                <p>
                  Your enquiry has been received. I'll be in touch within 24–48 hours to chat about your goals.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h3 className="contact-form-title">Enquiry / Interest Form</h3>

                <div className="form-row">
                  <label className="form-field">
                    <span className="form-label">Full Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </label>

                  <label className="form-field">
                    <span className="form-label">Email Address</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label className="form-field">
                    <span className="form-label">Phone (optional)</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </label>

                  <label className="form-field">
                    <span className="form-label">I'm Interested In</span>
                    <select name="interest" value={form.interest} onChange={handleChange}>
                      {interestOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="form-field">
                  <span className="form-label">Tell Me About Your Goals</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share a bit about what you're looking to achieve..."
                  />
                </label>

                <button type="submit" className="btn btn-primary btn-lg contact-submit">
                  Send Enquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
