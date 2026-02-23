export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export const SERVICES: Service[] = [
    {
        id: 'ortodoncia',
        title: 'Ortodoncia',
        description:
            'Corregimos la posición de tus dientes con las técnicas más avanzadas. Brackets estéticos, metálicos y alineadores invisibles para una sonrisa perfecta.',
        icon: 'GitBranch',
    },
    {
        id: 'endodoncia',
        title: 'Endodoncia',
        description:
            'Tratamientos de conducto con tecnología de última generación. Salvamos tus piezas dentales con procedimientos seguros y prácticamente indoloros.',
        icon: 'Zap',
    },
    {
        id: 'periodoncia',
        title: 'Periodoncia',
        description:
            'Cuidamos la salud de tus encías y tejidos de soporte dental. Tratamientos preventivos y correctivos para mantener una base sólida.',
        icon: 'Shield',
    },
    {
        id: 'estetica',
        title: 'Estética Dental',
        description:
            'Blanqueamiento profesional, carillas de porcelana y diseño de sonrisa personalizado. Transformamos tu sonrisa en tu mejor carta de presentación.',
        icon: 'Sparkles',
    },
    {
        id: 'cirugia',
        title: 'Cirugías e Implantes',
        description:
            'Implantes dentales de titanio y cirugías bucales con máxima precisión. Recuperá la funcionalidad y estética con soluciones permanentes.',
        icon: 'Crosshair',
    },
    {
        id: 'protesis',
        title: 'Prótesis',
        description:
            'Prótesis fijas y removibles diseñadas a medida. Devolvemos la naturalidad a tu sonrisa con materiales de primera calidad.',
        icon: 'Gem',
    },
];
