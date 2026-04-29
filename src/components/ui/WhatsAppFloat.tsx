import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../../constants/navigation';

export default function WhatsAppFloat() {
    return (
        <motion.a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: 'spring', stiffness: 200 }}
            aria-label="Contactar por WhatsApp"
            className="whatsapp-float"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 50,
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            whileHover={{ scale: 1.1, boxShadow: '0 6px 28px rgba(37, 211, 102, 0.55)' }}
            whileTap={{ scale: 0.95 }}
        >
            {/* WhatsApp SVG icon */}
            <svg
                viewBox="0 0 32 32"
                fill="white"
                style={{ width: '2rem', height: '2rem' }}
            >
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.064-1.952A15.9 15.9 0 0016.004 32C24.828 32 32 24.824 32 16S24.828 0 16.004 0zm9.332 22.608c-.392 1.108-1.94 2.028-3.196 2.296-.86.18-1.984.324-5.764-1.24-4.836-2-7.944-6.9-8.184-7.22-.232-.32-1.94-2.584-1.94-4.928 0-2.344 1.228-3.496 1.664-3.972.392-.432 1.036-.628 1.652-.628.2 0 .38.012.54.02.476.02.712.048 1.028.792.392.932 1.348 3.276 1.464 3.516.12.24.24.552.076.872-.156.328-.236.528-.468.812-.232.284-.488.632-.696.848-.232.24-.476.5-.204.98.272.476 1.212 2 2.604 3.24 1.784 1.592 3.284 2.084 3.752 2.316.468.232.744.196 1.016-.12.28-.316 1.188-1.38 1.504-1.856.316-.476.632-.392 1.064-.236.436.156 2.776 1.308 3.252 1.548.476.24.792.36.908.556.116.2.116 1.108-.276 2.216z" />
            </svg>

            {/* Pulse ring animation */}
            <span 
                className="whatsapp-pulse-ring"
                style={{
                    position: 'absolute',
                    inset: '-4px',
                    borderRadius: '50%',
                    border: '2px solid rgba(37, 211, 102, 0.4)',
                    animation: 'whatsapp-pulse 2s ease-out infinite',
                }} 
            />

            <style>{`
        @keyframes whatsapp-pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        body.menu-open .whatsapp-float {
            display: none !important;
        }
        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 1rem !important;
            right: 1rem !important;
            width: 2.75rem !important;
            height: 2.75rem !important;
          }
          .whatsapp-float svg {
            width: 1.5rem !important;
            height: 1.5rem !important;
          }
          .whatsapp-pulse-ring {
            display: none !important;
          }
        }
      `}</style>
        </motion.a>
    );
}
