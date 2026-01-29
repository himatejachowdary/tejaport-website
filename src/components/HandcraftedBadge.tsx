import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const HandcraftedBadge: React.FC = () => {
    return (
        <div className="handcrafted-badge">
            <div className="badge-inner">
                <div className="badge-glow"></div>
                <div className="badge-content">
                    <Code2 className="badge-icon code-icon" size={16} />
                    <span className="badge-text">
                        Handcrafted with
                    </span>
                    <Heart className="badge-icon heart-icon" size={14} />
                    <span className="badge-text">
                        by Human Code
                    </span>
                </div>
                <div className="badge-shimmer"></div>
            </div>
        </div>
    );
};

export default HandcraftedBadge;
