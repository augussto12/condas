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
            className={`section-divider w-full overflow-hidden leading-none flex flex-col ${flip ? 'rotate-180' : ''} ${className}`}
            style={{
                position: 'relative',
                zIndex: 10,
                backgroundColor: bgColor,
                marginTop: '-1px',
                marginBottom: '-1px',
            }}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 1440 80"
                xmlns="http://www.w3.org/2000/svg"
                className="section-divider-svg block w-full"
                preserveAspectRatio="none"
                style={{ shapeRendering: 'geometricPrecision' }}
            >
                {/* No <rect> needed, wrapper background handles the top part */}
                <path
                    d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
                    fill={fillColor}
                />
            </svg>
            
            {/* 2px strip to guarantee no subpixel gaps at the very bottom overlapping the next section */}
            <div style={{ height: '2px', backgroundColor: fillColor, width: '100%' }} />

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
