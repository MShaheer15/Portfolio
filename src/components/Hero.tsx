import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaShieldAlt, FaTerminal } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import TypewriterText from './TypewriterText';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        {/* Terminal-style intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-secondary/50 border border-border backdrop-blur-sm"
        >
          <FaTerminal className="text-primary text-sm" />
          <span className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">root@security</span>:~$ ./whoami
          </span>
        </motion.div>

        {/* Name with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold min-h-[1.5em] flex items-center justify-center">
            <span className="gradient-text cyber-glow-text">
              <TypewriterText texts={[
                "I'm Shaheer Siddiqui",
                "I'm a Bug Bounty Hunter",
                "I'm a Penetration Tester"
              ]} />
            </span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <FaShieldAlt className="text-primary text-xl md:text-2xl" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
            Penetration Tester <span className="text-muted-foreground">/</span>{' '}
            <span className="text-primary">Cybersecurity Specialist</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
        >
          Breaking systems to make them stronger. Specialized in uncovering vulnerabilities
          before the bad actors do.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://drive.google.com/file/d/16ItczBJZ2lm6qjb1pDtRXKFRKTsv8JTz/view?usp=sharing"
            download
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all cyber-glow hover:shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDownload className="group-hover:animate-bounce" />
            Download Resume
          </motion.a>
          <motion.button
            onClick={handleScrollToContact}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary/80 backdrop-blur-sm text-foreground font-semibold border border-border hover:border-primary/50 transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaEnvelope className="text-primary" />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={handleScrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiChevronDown className="text-3xl" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
