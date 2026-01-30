import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaShieldAlt, FaUserGraduate, FaExternalLinkAlt } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

const certifications = [
  {
    name: 'CPTS',
    fullName: 'Certified Penetration Testing Specialist',
    issuer: 'Hack The Box',
    date: '2024',
    icon: FaShieldAlt,
    color: 'from-emerald-500 to-cyan-500',
    description: 'Advanced penetration testing certification covering enterprise security assessments.',
    credential: 'HTB-CPTS-2024',
  },
  {
    name: 'PJPT',
    fullName: 'Practical Junior Penetration Tester',
    issuer: 'TCM Security',
    date: '2023',
    icon: FaShieldAlt,
    color: 'from-blue-500 to-violet-500',
    description: 'Hands-on certification for practical penetration testing skills.',
    credential: 'TCM-PJPT-2023',
  },
  {
    name: 'CEH',
    fullName: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    date: '2023',
    icon: FaUserGraduate,
    color: 'from-red-500 to-orange-500',
    description: 'Industry-recognized certification for ethical hacking methodologies.',
    credential: 'ECC-CEH-2023',
  },
  {
    name: 'PT1',
    fullName: 'Penetration Testing Level 1',
    issuer: 'INE Security',
    date: '2022',
    icon: FaCertificate,
    color: 'from-purple-500 to-pink-500',
    description: 'Foundation certification for web application penetration testing.',
    credential: 'INE-PT1-2022',
  },
  {
    name: 'Google Cybersecurity',
    fullName: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    date: '2022',
    icon: SiGoogle,
    color: 'from-blue-400 to-green-400',
    description: 'Comprehensive cybersecurity fundamentals and incident response.',
    credential: 'GOOGLE-CYBER-2022',
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
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card p-6 relative overflow-hidden"
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
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  {cert.issuer}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label={`View ${cert.name} credential`}
                >
                  <FaExternalLinkAlt className="text-sm" />
                </motion.button>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${cert.color}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
