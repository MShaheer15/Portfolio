import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaShieldAlt, FaUserGraduate, FaExternalLinkAlt } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

const certifications = [
  {
    name: 'PEH / PT1',
    fullName: 'Practical Ethical Hacking',
    issuer: 'TCM Security',
    date: '2023',
    icon: FaShieldAlt,
    color: 'from-emerald-500 to-cyan-500',
    description: 'Foundation certification for practical ethical hacking and penetration testing workflows.',
    url: 'https://assets.tryhackme.com/certification-certificate/68a67af01974073c398f57d0.pdf',
  },
  {
    name: 'Google Cybersecurity',
    fullName: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    date: '2023',
    icon: SiGoogle,
    color: 'from-blue-400 to-green-400',
    description: 'Comprehensive cybersecurity fundamentals and incident response.',
    url: 'https://coursera.org/share/2f0dba77aad98670d6aae83350dd01d8',
  },
  {
    name: 'CPTS',
    fullName: 'Certified Penetration Testing Specialist',
    issuer: 'Hack The Box Academy',
    date: '2024',
    icon: FaShieldAlt,
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced penetration testing certification covering enterprise security assessments.',
    url: 'https://academy.hackthebox.com/achievement/badge/d9637574-b22e-11f0-9254-bea50ffe6cb4',
  },
  {
    name: 'CWES',
    fullName: 'Certified Web Exploitation Specialist',
    issuer: 'Hack The Box Academy',
    date: '2024',
    icon: FaCertificate,
    color: 'from-orange-500 to-red-500',
    description: 'Advanced web application exploitation and bug bounty methodologies.',
    url: 'https://academy.hackthebox.com/achievement/badge/bd9f6fbc-3288-11f0-bcfd-bea50ffe6cb4',
  },
  {
    name: 'PJPT',
    fullName: 'Practical Junior Penetration Tester',
    issuer: 'TCM Security',
    date: '2023',
    icon: FaShieldAlt,
    color: 'from-blue-500 to-violet-500',
    description: 'Hands-on certification for practical penetration testing skills.',
    url: 'https://certified.tcm-sec.com/e2a74e55-7a5d-4a1d-b1a0-6c8682fcf4da#acc.fUFVDwko',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Credentials
          </span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            Industry-recognized certifications validating expertise in penetration testing and cybersecurity.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card p-6 relative overflow-hidden block cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}
              />

              {/* Badge */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}
                >
                  <cert.icon className="text-2xl text-white" />
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {cert.date}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl text-foreground mb-1">
                {cert.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">
                {cert.fullName}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {cert.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                <span className="text-xs text-muted-foreground">
                  {cert.issuer}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:text-primary/80 transition-colors font-medium">
                  View Credential <FaExternalLinkAlt className="text-xs group-hover:-mt-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${cert.color}`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
