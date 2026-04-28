interface SectionDividerProps {
    /** Color of the wave fill (should match the NEXT section's background) */
    fillColor?: string;
    /** Background color of the divider wrapper (should match the PREVIOUS section's background) */
    bgColor?: string;
    /** Whether to flip (for top-of-section placement) */
    flip?: boolean;
    /** Additional className */
    className?: string;
}

export default function SectionDivider({
    fillColor = '#F8FAFB',
    bgColor = 'transparent',
    flip = false,
    className = '',
}: SectionDividerProps) {
    return (
        <div
            className={`section-divider w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
            style={{
                backgroundColor: bgColor,
                marginTop: '-2px',
                marginBottom: '-2px',
                position: 'relative',
                zIndex: 2,
            }}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 1440 80"
                xmlns="http://www.w3.org/2000/svg"
                className="section-divider-svg"
                style={{ width: '100%', display: 'block' }}
                preserveAspectRatio="none"
            >
                {/* Full background rect matching previous section */}
                <rect x="0" y="0" width="1440" height="80" fill={bgColor} />
                {/* Wave fill matching next section, painted on top */}
                <path
                    d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
                    fill={fillColor}
                />
            </svg>

            <style>{`
                .section-divider-svg {
                    height: 80px;
                }
                @media (max-width: 768px) {
                    .section-divider-svg {
                        height: 45px;
                    }
                }
                @media (max-width: 480px) {
                    .section-divider-svg {
                        height: 32px;
                    }
                }
            `}</style>
        </div>
    );
}
