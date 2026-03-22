import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Palette, CheckCircle } from 'lucide-react'
import TiltCard from '../Components/TiltCard';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '15+', label: 'Happy Clients' },
  { value: '100%', label: 'Job Success' },
];

const facts = [
  'BCA (Bachelor of Computer Applications)',
  'MERN Stack (MongoDB, Express, React, Node)',
  'Responsive & Mobile-First Design',
  'UI/UX Design with Figma',
  'RESTful API Development',
  'Version Control with Git & GitHub',
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className=" py-10 relative text-white font-Outfit" ref={ref}>
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16">

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20 group">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-[#171721] border border-[#171721] hover:border-[#ff811a]/25 duration-300 transition-colors group"
            >
              <p className="font-syne font-bold text-3xl sm:text-4xl gradient-text mb-1">{s.value}</p>
              <p className="text-sm text-[#75758a] hover:text-white hover:border-[#ff811a]/30 transition-colors duration-300">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-[#f68b43] font-syne text-sm tracking-[0.2em] uppercase mb-3 font-semibold">About Me</p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Passionate about<br />
              <span className="gradient-text">building the web</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Hi! I'm <span className="text-foreground font-semibold">Gitesh Kumar</span>, a passionate Full Stack Web Developer
              and Designer. I completed my BCA (Bachelor of Computer Applications) and have since
              been working with modern web technologies to build impactful digital products.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I specialize in the MERN stack — building everything from sleek frontends to
              robust backend APIs. I combine technical skills with a strong sense of design
              to deliver complete, polished web solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle size={15} className="text-[#f68b43] shrink-0" />
                  {fact}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {[
              { icon: GraduationCap, color: 'text-[#f68b43]', bg: 'bg-[#f68b43]/10', title: 'BCA Graduate', desc: 'Strong CS fundamentals and problem-solving skills.' },
              { icon: Code2, color: 'text-[#5121a5]', bg: 'bg-[#5121a5]/10', title: 'MERN Developer', desc: 'End-to-end web apps with modern JavaScript.' },
              { icon: Palette, color: 'text-orange-400', bg: 'bg-orange-400/10', title: 'Web Designer', desc: 'Pixel-perfect UI/UX with Figma and CSS mastery.' },
              { icon: Briefcase, color: 'text-emerald-400', bg: 'bg-emerald-400/10', title: 'Freelancer', desc: 'Delivered 20+ projects to satisfied clients.' },
            ].map((card, i) => (
              <TiltCard key={i} className="p-6 bg-[#171721]" glowColor={`hsla(${i * 60 + 27}, 80%, 60%, 0.12)`}>
                <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                  <card.icon className={card.color} size={22} />
                </div>
                <h3 className="font-syne font-semibold text-base text-foreground mb-1.5">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}