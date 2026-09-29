import { Link } from 'react-router-dom';
import { Mail, Heart, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import './Footer.css';

const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/coaching', label: 'Coaching' },
  { to: '/programs', label: 'Programs' },
  { to: '/success-stories', label: 'Success Stories' },
  { to: '/resources', label: 'Free Resources' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Built From Within Coaching Home">
              <div className="footer__logo-monogram">
                <span className="monogram-b">B</span>
                <span className="monogram-w">W</span>
              </div>
              <div className="footer__logo-meta">
                <span className="footer__logo-serif">BUILT FROM WITHIN</span>
                <span className="footer__logo-sub">COACHING</span>
              </div>
            </Link>
            <p className="footer__tagline">
              Built from within. Proven by action.
            </p>
            {/* Social */}
            <div className="footer__social">
              <a
                href="https://www.instagram.com/rachelaccadia/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Follow Rachel on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="mailto:hello@builtfromwithin.com"
                className="footer__social-link"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer__links-section">
            <h4 className="footer__heading">Explore</h4>
            <ul className="footer__links">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">
                    {label}
                    <ArrowUpRight size={12} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__newsletter">
            <h4 className="footer__heading">Join the Community</h4>
            <p className="footer__newsletter-desc">
              Get free tips, recipes, and workout ideas straight to your inbox.
            </p>
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="footer__input"
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn btn-primary btn-sm footer__submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Built From Within Coaching. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <Heart size={12} className="footer__heart" /> for strong women everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
