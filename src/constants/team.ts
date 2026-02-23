export interface TeamMember {
    id: string;
    name: string;
    role: string;
    specialty: string;
    bio: string;
    image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 'maria-ines',
        name: 'Dra. María Inés',
        role: 'Directora',
        specialty: 'Ortodoncia & Estética',
        bio: 'Con más de 20 años de experiencia, lidera el equipo con pasión por la excelencia y la innovación en odontología.',
        image: '/team/maria-ines.jpg',
    },
    {
        id: 'pablo',
        name: 'Dr. Pablo',
        role: 'Odontólogo',
        specialty: 'Implantología & Cirugía',
        bio: 'Especialista en implantes y cirugía oral avanzada. Formado en las mejores escuelas de odontología del país.',
        image: '/team/pablo.jpg',
    },
    {
        id: 'julieta',
        name: 'Dra. Julieta',
        role: 'Odontóloga',
        specialty: 'Endodoncia',
        bio: 'Experta en tratamientos de conducto con tecnología de punta. Su dedicación garantiza resultados excepcionales.',
        image: '/team/julieta.jpg',
    },
    {
        id: 'juan-pablo',
        name: 'Dr. Juan Pablo',
        role: 'Odontólogo',
        specialty: 'Periodoncia',
        bio: 'Especialista en salud gingival y regeneración ósea. Comprometido con la salud integral de cada paciente.',
        image: '/team/juan-pablo.jpg',
    },
    {
        id: 'augusto',
        name: 'Dr. Augusto',
        role: 'Odontólogo',
        specialty: 'Prótesis & Rehabilitación',
        bio: 'Maestro en rehabilitación oral y prótesis de alta complejidad. Devuelve sonrisas con precisión artesanal.',
        image: '/team/augusto.jpg',
    },
];
