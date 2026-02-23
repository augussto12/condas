export interface Testimonial {
    id: string;
    name: string;
    text: string;
    rating: number;
    treatment: string;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Carolina M.',
        text: 'Excelente atención desde el primer momento. El tratamiento de ortodoncia superó todas mis expectativas. Hoy sonrío con total confianza.',
        rating: 5,
        treatment: 'Ortodoncia',
    },
    {
        id: '2',
        name: 'Martín R.',
        text: 'Los implantes que me realizó el Dr. Pablo cambiaron mi vida. Profesionalismo y calidez humana en cada visita.',
        rating: 5,
        treatment: 'Implantes',
    },
    {
        id: '3',
        name: 'Lucía G.',
        text: 'El blanqueamiento dental quedó increíble. El equipo es muy cálido y te hace sentir como en casa. Totalmente recomendable.',
        rating: 5,
        treatment: 'Estética Dental',
    },
    {
        id: '4',
        name: 'Fernando D.',
        text: 'La Dra. Julieta me salvó una muela que daba por perdida. Un tratamiento de conducto impecable y sin dolor.',
        rating: 5,
        treatment: 'Endodoncia',
    },
    {
        id: '5',
        name: 'Valeria S.',
        text: 'Llevé a toda mi familia y todos quedamos encantados. Atención personalizada y un consultorio de primer nivel.',
        rating: 5,
        treatment: 'Odontología General',
    },
];
