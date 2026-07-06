export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export const SERVICES: Service[] = [
    {
        id: 'endodoncia',
        title: 'Endodoncia',
        description:
            'Tratamientos de conducto con tecnología de última generación. Salvamos tus piezas dentales con procedimientos seguros.',
        icon: 'Zap',
    },
    {
        id: 'periodoncia',
        title: 'Periodoncia',
        description:
            'Cuidamos la salud de tus encías y tejidos de soporte dental. Tratamientos preventivos para que puedas conservar tus piezas dentales.',
        icon: 'Shield',
    },
    {
        id: 'cirugia',
        title: 'Cirugía',
        description:
            'Cirugías bucales de baja y mediana complejidad.',
        icon: 'Crosshair',
    },
    {
        id: 'implantologia',
        title: 'Implantología Oral',
        description:
            'Planificación digital de cada paciente y colocación de implantes de ultima tecnologia.',
        icon: 'Anchor',
    },
    {
        id: 'protesis',
        title: 'Prótesis',
        description:
            'Prótesis fijas y removibles diseñadas a medida. Devolvemos la naturalidad a tu sonrisa con materiales de primera calidad.',
        icon: 'Gem',
    },
    {
        id: 'estetica',
        title: 'Estética Dental',
        description:
            'Blanqueamiento profesional, carillas de porcelana y diseño de sonrisa personalizado. Transformamos tu sonrisa en tu mejor carta de presentación.',
        icon: 'Sparkles',
    },
    {
        id: 'ortodoncia',
        title: 'Ortodoncia y Ortopedia',
        description:
            'Corregimos la posición de tus dientes y los maxilares con las técnicas más avanzadas. Brackets estéticos, metálicos y alineadores invisibles.',
        icon: 'GitBranch',
    },
    {
        id: 'odontopediatria',
        title: 'Odontopediatría',
        description:
            'Atención dedicada para los más pequeños en un ambiente cálido y amigable. Cuidamos la salud bucal de tus hijos desde temprana edad.',
        icon: 'Baby',
    },
];
