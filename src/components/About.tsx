import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaShieldAlt, FaBug, FaUserSecret, FaLock } from 'react-icons/fa';

const highlights = [
  {
    icon: FaShieldAlt,
    title: 'Offensive Security',
    description: 'Expert in penetration testing and vulnerability assessment',
  },
  {
    icon: FaBug,
    title: 'Bug Hunter',
    description: 'Skilled at finding and exploiting security flaws',
  },
  {
    icon: FaUserSecret,
    title: 'Ethical Hacker',
    description: 'Committed to responsible disclosure practices',
  },
  {
    icon: FaLock,
    title: 'Security Advocate',
    description: 'Helping organizations strengthen their defenses',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            About Me
          </span>
          <h2 className="section-title">
            Securing the Digital <span className="gradient-text">Frontier</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="terminal-style mb-6">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 text-xs text-muted-foreground">about.txt</span>
              </div>
              <p className="leading-relaxed">
                <span className="text-primary">$</span> cat about.txt
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a dedicated <span className="text-foreground font-medium">Penetration Tester</span> with 
                a passion for offensive security and ethical hacking. My mission is to identify and 
                exploit vulnerabilities in systems, networks, and applications before malicious actors can.
              </p>
              <p className="leading-relaxed">
                With hands-on experience in web application security, network penetration testing, and 
                vulnerability assessment, I help organizations understand their security posture and 
                implement effective countermeasures. I specialize in the OWASP Top 10, API security 
                testing, and privilege escalation techniques.
              </p>
              <p className="leading-relaxed">
                When I'm not hunting for bugs, I'm continuously expanding my knowledge through 
                CTF competitions, security research, and staying current with the latest attack 
                techniques and defense strategies.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-2xl text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
