import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TiltCard({ children, className = '', glowColor = 'hsla(186, 100%, 50%, 0.15)' }) {
    const cardRef = useRef(null);
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
    const [shinePosition, setShinePosition] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        setTransform({ rotateX, rotateY });
        setShinePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    };

    const handleMouseLeave = () => {
        setTransform({ rotateX: 0, rotateY: 0 });
        setIsHovering(false);
    };

    return (
        <div className="perspective-container">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={handleMouseLeave}
                animate={{
                    rotateX: transform.rotateX,
                    rotateY: transform.rotateY,
                    scale: isHovering ? 1.02 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`tilt-card relative overflow-hidden rounded-2xl bg-card glow-border ${className}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Shine overlay */}
                <div
                    className="card-shine"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        background: `radial-gradient(circle at ${shinePosition.x}% ${shinePosition.y}%, ${glowColor}, transparent 60%)`,
                    }}
                />
                {/* Border glow */}
                <div
                    className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        boxShadow: `0 0 30px ${glowColor}, inset 0 0 30px ${glowColor}`,
                    }}
                />
                <div style={{ transform: 'translateZ(20px)' }} className="relative z-10">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}