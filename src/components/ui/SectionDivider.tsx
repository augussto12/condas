interface SectionDividerProps {
    /** Color of the wave fill (should match the NEXT section's background) */
    fillColor?: string;
    /** Whether to flip (for top-of-section placement) */
    flip?: boolean;
    /** Additional className */
    className?: string;
}

export default function SectionDivider({
    fillColor = '#F8FAFB',
    flip = false,
    className = '',
}: SectionDividerProps) {
    return (
        <div
            className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 1440 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '80px', display: 'block' }}
                preserveAspectRatio="none"
            >
                <path
                    d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
                    fill={fillColor}
                />
            </svg>
        </div>
    );
}
