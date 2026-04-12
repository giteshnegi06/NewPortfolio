import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import TiltCard from '../Components/TiltCard';

const projects = [
    {
        title: 'Wedding Portfolio',
        desc: 'Full-stack Wedding Portfolio, with Animations and Reasponsive Design.',
        tags: ['React', 'Tailwind Css', 'Vercal', 'HTML'],
        image: 'https://res.cloudinary.com/dh52la71p/image/upload/v1774193767/Screenshot_2026-03-08_124644_yo4ppn.png',
        accent: '#f97316',
        featured: true,
        links: [
            { icon: Github, url: "https://github.com/giteshnegi06", label: "GitHub" },
            { icon: ExternalLink, url: "https://mahak-seven.vercel.app/", label: "Live Demo" }
        ]
    },
    {
        title: 'Sahil Hair Salon Portfolio',
        desc: 'Premium portfolio showcasing modern web solutions and smooth, user-focused design.',
        tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        image: 'https://res.cloudinary.com/dh52la71p/image/upload/v1775977447/Screenshot_2026-04-12_114943_ctneth.png',
        accent: '#22c55e',
        featured: true,
         links: [
            { icon: Github, url: "https://github.com/giteshnegi06", label: "GitHub" },
            { icon: ExternalLink, url: "https://sahil-hair.vercel.app/", label: "Live Demo" }
        ]
    },
    {
        title: 'SNKR Base E-commerce Platform',
        desc: 'Modern sneaker store with clean UI and smooth user experience.',
        tags: ['JavaScript', 'HTML', 'Tailwind CSS', 'Vercel'],
        image: 'https://res.cloudinary.com/dh52la71p/image/upload/v1774193747/Screenshot_2025-11-01_005307_r0faf8.png',
        accent: '#a855f7',
         links: [
            { icon: Github, url: "https://github.com/giteshnegi06", label: "GitHub" },
            { icon: ExternalLink, url: "https://snkr-base.vercel.app/", label: "Live Demo" }
        ]
    },
    {
        title: 'Udemy Landing Page Clone',
        desc: 'Udemy clone with clean UI and smooth learning experience.',
        tags: ['React', 'Tailwind CSS', 'Vercel'],
        image: 'https://res.cloudinary.com/dh52la71p/image/upload/v1774193755/Screenshot_2025-11-01_005404_zilqt3.png',
        accent: '#00d4ff',
         links: [
            { icon: Github, url: "https://github.com/giteshnegi06", label: "GitHub" },
            { icon: ExternalLink, url: "https://udemy-liard.vercel.app/", label: "Live Demo" }
        ]
    },
    {
        title: 'Restaurant Booking System',
        desc: 'Reservation system with table booking, menu browsing, and integrated payment processing.',
        tags: ['MERN', 'Stripe', 'JWT'],
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
        accent: '#eab308',
         links: [
            { icon: Github, url: "https://github.com/giteshnegi06", label: "GitHub" },
            { icon: ExternalLink, url: "https://mahak-seven.vercel.app/", label: "Live Demo" }
        ]
    },
    {
        title: 'Portfolio Website',
        desc: 'Modern portfolio with 3D animations, glassmorphism, and smooth scroll interactions.',
        tags: ['React', 'Framer Motion', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        accent: '#ec4899',
         links: [
            { icon: Github, url: "https://github.com/giteshnegi06", label: "GitHub" },
            { icon: ExternalLink, url: "https://mahak-seven.vercel.app/", label: "Live Demo" }
        ]
    },
];

export default function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [filter, setFilter] = useState('All');

    const filters = ['All', 'React', 'MERN', 'Next.js'];
    const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));

    return (
        <section id="projects" className="py-24 lg:py-32 relative font-Outfit" ref={ref}>
            <div className="section-divider" />
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[#ff811a] font-syne text-sm tracking-[0.2em] uppercase mb-3 font-semibold">My Work</p>
                        <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                    </motion.div>

                    {/* Filter tabs */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 }}
                        className="flex gap-2 flex-wrap"
                    >
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === f
                                    ? 'bg-[#ff811a] text-black shadow-[0_0_20px_hsla(27,100%,55%,0.3)]'
                                    : 'bg-[#171721] text-[#75758a] hover:text-white border border-[#1b1b27]'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <TiltCard
                                className={`overflow-hidden group h-full grad-border ${project.featured ? 'ring-1 ring-[#ff811a]/20' : ''}`}
                                glowColor={`${project.accent}18`}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#0e0e11]/90 via-[#0e0e11]/20 to-transparent" />
                                    {project.featured && (
                                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#ff811a] text-black">
                                            Featured
                                        </div>
                                    )}
                                    {/* Action buttons */}
                                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        {(project.links || []).map((item, j) => {
                                            const Icon = item.icon;
                                            return (
                                                <a
                                                    key={j}
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 rounded-2xl glass border border-white/10 flex items-center justify-center text-foreground hover:text-[#ff811a] cursor-pointer transition-colors"
                                                >
                                                    <Icon size={13} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-syne font-bold text-base text-foreground">{project.title}</h3>
                                        <ArrowUpRight
                                            size={16}
                                            className="text-[#75758a] group-hover:text-[#ff811a] transition-colors shrink-0 mt-0.5"
                                        />
                                    </div>
                                    <p className="text-sm text-[#75758a] mb-4 leading-relaxed">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs rounded-xl bg-[#171721] text-[#75758a] border border-[#1b1b27]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}