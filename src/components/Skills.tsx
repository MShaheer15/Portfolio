import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaShieldAlt, FaBug, FaTools, FaLinux, FaCode, FaServer, 
  FaNetworkWired, FaLock, FaDatabase, FaTerminal 
} from 'react-icons/fa';
import { SiKalilinux, SiBurpsuite, SiWireshark, SiPython } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Penetration Testing',
    icon: FaShieldAlt,
    skills: [
      { name: 'Web Application Testing', level: 90 },
      { name: 'Network Penetration Testing', level: 85 },
      { name: 'API Security Testing', level: 88 },
      { name: 'Wireless Security', level: 75 },
      { name: 'Privilege Escalation', level: 82 },
      { name: 'Post-Exploitation', level: 78 },
    ],
  },
  {
    title: 'Vulnerability & Exploitation',
    icon: FaBug,
    skills: [
      { name: 'OWASP Top 10', level: 95 },
      { name: 'SQL Injection', level: 92 },
      { name: 'XSS (Cross-Site Scripting)', level: 90 },
      { name: 'CSRF', level: 85 },
      { name: 'SSRF', level: 80 },
      { name: 'File Inclusion (LFI/RFI)', level: 82 },
    ],
  },
  {
    title: 'Security Tools',
    icon: FaTools,
    tools: [
      { name: 'Burp Suite', icon: SiBurpsuite },
      { name: 'Metasploit', icon: FaTerminal },
      { name: 'Nmap', icon: FaNetworkWired },
      { name: 'SQLmap', icon: FaDatabase },
      { name: 'Nessus', icon: FaShieldAlt },
      { name: 'Wireshark', icon: SiWireshark },
      { name: 'Hydra', icon: FaLock },
      { name: 'Gobuster', icon: FaServer },
      { name: 'Nikto', icon: FaBug },
    ],
  },
  {
    title: 'Operating Systems',
    icon: FaLinux,
    tools: [
      { name: 'Kali Linux', icon: SiKalilinux },
      { name: 'Ubuntu', icon: FaLinux },
      { name: 'Windows', icon: FaServer },
      { name: 'Active Directory', icon: FaNetworkWired },
    ],
  },
  {
    title: 'Scripting & Web',
    icon: FaCode,
    tools: [
      { name: 'Python', icon: SiPython },
      { name: 'Bash', icon: FaTerminal },
      { name: 'JavaScript', icon: FaCode },
      { name: 'HTML/CSS', icon: FaCode },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-mono text-primary">{level}%</span>
      </div>
      <div className="progress-bar-bg">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const ToolTag = ({ name, icon: Icon, delay }: { name: string; icon: React.ElementType; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="skill-tag inline-flex items-center gap-2 cursor-default"
    >
      <Icon className="text-primary" />
      <span>{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Technical Arsenal
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            A comprehensive toolkit for identifying and exploiting vulnerabilities across diverse systems and applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === index
                  ? 'bg-primary text-primary-foreground cyber-glow'
                  : 'bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon className="text-lg" />
              <span className="hidden sm:inline">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-8">
              {(() => {
                const Icon = skillCategories[activeCategory].icon;
                return <Icon className="text-2xl text-primary" />;
              })()}
              <h3 className="text-xl font-bold text-foreground">
                {skillCategories[activeCategory].title}
              </h3>
            </div>

            {'skills' in skillCategories[activeCategory] ? (
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {skillCategories[activeCategory].skills?.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {skillCategories[activeCategory].tools?.map((tool, index) => (
                  <ToolTag
                    key={tool.name}
                    name={tool.name}
                    icon={tool.icon}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
