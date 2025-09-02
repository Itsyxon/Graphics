'use client'
import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
}

export default function ParticlesBackground() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: (Math.random() - 0.5) * 0.2
        }));
        setParticles(newParticles);

        const interval = setInterval(() => {
            setParticles(prev => prev.map(p => ({
                ...p,
                x: (p.x + p.speedX + 100) % 100,
                y: (p.y + p.speedY + 100) % 100
            })));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-blue-100 opacity-100"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                    }}
                />
            ))}
        </div>
    );
}