import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap, FaFlag } from 'react-icons/fa';

const experiences = [
  {
    type: 'work',
    title: 'Junior Penetration Tester',
    organization: 'SecureNet Solutions',
    period: '2023 - Present',
    description: 'Conducting web application and network penetration tests for enterprise clients.',
    highlights: [
      'Performed 50+ security assessments identifying critical vulnerabilities',
      'Specialized in OWASP Top 10 web application testing',
      'Developed custom automation scripts for reconnaissance',
      'Created detailed technical reports for stakeholders',
    ],
  },
  {
    type: 'work',
    title: 'Cybersecurity Intern',
    organization: 'TechDefend Corp',
    period: '2022 - 2023',
    description: 'Assisted senior security analysts with vulnerability assessments and security audits.',
    highlights: [
      'Performed vulnerability scanning using Nessus and OpenVAS',
      'Assisted in incident response investigations',
      'Documented security policies and procedures',
      'Participated in red team exercises',
    ],
  },
  {
    type: 'education',
    title: 'HTB Pro Labs & CTF Experience',
    organization: 'Hack The Box',
    period: '2021 - Present',
    description: 'Continuous hands-on training through realistic penetration testing labs.',
    highlights: [
      'Completed Dante, Offshore, and RastaLabs pro environments',
      'Top 5% ranking on Hack The Box platform',
      '200+ machines pwned with detailed writeups',
      'Active participation in CTF competitions',
    ],
  },
  {
    type: 'education',
    title: 'Freelance Security Researcher',
    organization: 'Bug Bounty Programs',
    period: '2021 - Present',
    description: 'Active participant in bug bounty programs on major platforms.',
    highlights: [
      'Discovered and responsibly disclosed 15+ vulnerabilities',
      'Focus on API security and authentication flaws',
      'HackerOne and Bugcrowd contributor',
      'Specializing in web application security testing',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Journey
          </span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            A track record of hands-on security work, continuous learning, and real-world vulnerability discovery.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? 'md:pr-[50%] md:text-right'
                  : 'md:pl-[50%] md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className="timeline-dot"
                style={{ top: '24px' }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
              />

              {/* Card */}
              <motion.div
                className="glass-card p-6 ml-10 md:ml-0 md:mr-8"
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {exp.type === 'work' ? (
                      <FaBriefcase className="text-xl text-primary" />
                    ) : (
                      <FaGraduationCap className="text-xl text-primary" />
                    )}
                  </div>
                  <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                    <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className={`flex items-start gap-2 text-sm text-muted-foreground ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <FaFlag className="text-primary text-xs mt-1.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
