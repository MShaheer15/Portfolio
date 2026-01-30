import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaShieldAlt, FaHeart } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com/in/shaheer-siddiqui', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/shaheer-siddiqui', label: 'GitHub' },
  { icon: FaTwitter, href: 'https://twitter.com/shaheer_sec', label: 'Twitter' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <FaShieldAlt className="text-2xl text-primary" />
            <span className="font-bold text-xl gradient-text">
              Shaheer<span className="font-mono">Sec</span>
            </span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="text-lg" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Shaheer Siddiqui. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
              Built with <FaHeart className="text-primary text-[10px]" /> and a passion for security
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
