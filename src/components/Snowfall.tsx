import React, { useEffect, useState } from 'react';

interface Snowflake {
    id: number;
    x: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
    drift: number;
}

const Snowfall: React.FC = () => {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        // Generate random snowflakes
        const flakes: Snowflake[] = [];
        const flakeCount = 50; // Number of snowflakes

        for (let i = 0; i < flakeCount; i++) {
            flakes.push({
                id: i,
                x: Math.random() * 100, // Random horizontal position (%)
                size: Math.random() * 8 + 3, // Size between 3-11px
                duration: Math.random() * 8 + 8, // Fall duration 8-16s
                delay: Math.random() * 10, // Start delay 0-10s
                opacity: Math.random() * 0.6 + 0.3, // Opacity 0.3-0.9
                drift: Math.random() * 30 - 15, // Horizontal drift -15 to 15px
            });
        }

        setSnowflakes(flakes);
    }, []);

    return (
        <div className="snowfall-container" aria-hidden="true">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: `${flake.x}%`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        animationDuration: `${flake.duration}s`,
                        animationDelay: `${flake.delay}s`,
                        opacity: flake.opacity,
                        '--drift': `${flake.drift}px`,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
};

export default Snowfall;
