export interface TeamMember {
    id: string;
    name: string;
    role: string;
    specialty: string;
    bio: string;
    image: string;
    whatsappPhone?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 'maria-ines',
        name: 'Dra. María Inés',
        role: 'Directora Clínica y Especialista en Periodoncia',
        specialty: 'Periodoncia',
        bio: 'Líder y fundadora de nuestro centro, coordina la visión integral de la clínica. Como especialista en Periodoncia, se enfoca en la salud de los tejidos de soporte, asegurando que cada tratamiento tenga una base sólida y duradera. La importancia de tu salud gingival está a su cargo.',
        image: '/team/maria-ines.jpg',
        whatsappPhone: '',
    },
    {
        id: 'pablo',
        name: 'Dr. Pablo',
        role: 'Odontología General, Cirugía e Implantología',
        specialty: 'Cirugía e Implantología',
        bio: 'Con la trayectoria más extensa de nuestro equipo, aporta la experiencia y el conocimiento clínico que nos avalan. Es experto en rehabilitaciones complejas y procedimientos quirúrgicos, combinando una técnica impecable con la seguridad que solo brindan los años de dedicación a la salud de sus pacientes.',
        image: '/team/pablo.jpg',
        whatsappPhone: '',
    },
    {
        id: 'julieta',
        name: 'Dra. Julieta',
        role: 'Especialista en Endodoncia (Universidad Maimónides)',
        specialty: 'Endodoncia',
        bio: 'Formada con excelencia académica en la Universidad Maimónides, es la encargada de preservar la salud interna de las piezas dentales. Su especialización en tratamientos de conducto permite salvar dientes que de otro modo se perderían, trabajando con precisión, última tecnología y priorizando siempre el bienestar del paciente.',
        image: '/team/julieta.jpg',
        whatsappPhone: '5492235401347',
    },
    {
        id: 'juan-pablo',
        name: 'Dr. Juan Pablo',
        role: 'Especialista en Ortodoncia y Estética Dental',
        specialty: 'Ortodoncia y Estética',
        bio: 'Es el responsable de diseñar sonrisas alineadas y funcionales. Lidera nuestra área de ortodoncia, especializándose en el uso de alineadores invisibles de última generación. Su enfoque combina la tecnología digital con la estética para lograr resultados rápidos y sumamente estéticos.',
        image: '/team/juan-pablo.jpg',
        whatsappPhone: '5492235803538',
    },
    {
        id: 'augusto',
        name: 'Dr. Augusto',
        role: 'Odontología General e Implantología',
        specialty: 'Implantología',
        bio: 'Aporta dinamismo y una visión actualizada a la atención odontológica integral. Actualmente se encuentra profundizando su formación en implantología en la Universidad Católica Argentina, sumando nuevas técnicas y herramientas para la colocación de implantes y cirugía dental.',
        image: '/team/augusto.jpg',
        whatsappPhone: '5492235290107',
    },
];
