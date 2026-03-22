import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TiltCard from '../Components/TiltCard';

const techStack = [
    { name: 'React.js', icon: '⚛️', level: 90, cat: 'Frontend' },
    { name: 'Node.js', icon: '🟢', level: 85, cat: 'Backend' },
    { name: 'MongoDB', icon: '🍃', level: 80, cat: 'Database' },
    { name: 'Express.js', icon: '🚂', level: 85, cat: 'Backend' },
    { name: 'Next.js', icon: '▲', level: 78, cat: 'Frontend' },
    { name: 'TypeScript', icon: '🔷', level: 74, cat: 'Language' },
    { name: 'Tailwind CSS', icon: '🎨', level: 95, cat: 'Frontend' },
    { name: 'Figma', icon: '🖌️', level: 82, cat: 'Design' },
    { name: 'Git & GitHub', icon: '🐙', level: 90, cat: 'Tools' },
    { name: 'REST APIs', icon: '🔗', level: 88, cat: 'Backend' },
    { name: 'JavaScript', icon: '🟡', level: 92, cat: 'Language' },
    { name: 'HTML / CSS', icon: '🌐', level: 96, cat: 'Frontend' },
];

const categories = [
    { label: 'Frontend', color: '#00d4ff' },
    { label: 'Backend', color: '#a855f7' },
    { label: 'Design', color: '#f97316' },
    { label: 'Tools', color: '#22c55e' },
    { label: 'Database', color: '#eab308' },
    { label: 'Language', color: '#ec4899' },
];

export default function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="skills" className="py-24 lg:py-32 relative font-Outfit" ref={ref}>
            <div className="section-divider" />
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <p className="text-[#f68b43] font-syne text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Tech Stack</p>
                    <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                </motion.div>

                {/* Category legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-3 mb-10"
                >
                    {categories.map((c) => (
                        <span key={c.label} className="flex items-center gap-1.5 text-xs text-[#75758a] px-3 py-1.5 rounded-full bg-[#17171c] border border-[#1b1b21]">
                            <span className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                            {c.label}
                        </span>
                    ))}
                </motion.div>

                {/* Skill grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {techStack.map((skill, i) => {
                        const catColor = categories.find(c => c.label === skill.cat)?.color || '#ffffff';
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                <TiltCard
                                    className="p-5 grad-border h-full bg-[#0f0f15]"
                                    glowColor={`${catColor}22`}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{skill.icon}</span>
                                            <div>
                                                <p className="font-syne font-semibold text-sm text-foreground">{skill.name}</p>
                                                <p className="text-xs" style={{ color: catColor }}>{skill.cat}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-bold text-[#75758a]">{skill.level}%</span>
                                    </div>
                                    {/* Progress bar */}
                                    <div className="h-1.5 rounded-full bg-[#17171c] overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1.2, delay: i * 0.05, ease: 'easeOut' }}
                                            className="h-full rounded-full"
                                            style={{ background: `linear-gradient(90deg, ${catColor}99, ${catColor})` }}
                                        />
                                    </div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}