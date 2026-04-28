// Gallery image data
// Photos that are NOT individual professional headshots

import imgSecretarias from '../assets/profesionales/DSC_1413.jpg';
import imgGrupal1 from '../assets/profesionales/DSC_1443.jpg';
import imgGrupal2 from '../assets/profesionales/DSC_1456.jpg';
import imgGrupal3 from '../assets/profesionales/DSC_1471.jpg';
import imgConsultorio1 from '../assets/profesionales/DSC_1493.jpg';
import imgConsultorio2 from '../assets/profesionales/DSC_1541.jpg';
import imgDuo from '../assets/profesionales/DSC_1552.jpg';
import imgAccion from '../assets/profesionales/DSC_1560.jpg';

export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    span?: 'wide' | 'tall';  // for bento grid sizing
    objectPosition?: string; // custom crop position
}

export const GALLERY_IMAGES: GalleryImage[] = [
    {
        id: 'secretarias',
        src: imgSecretarias,
        alt: 'Nuestro equipo de recepción',
        objectPosition: '40% center',
    },
    {
        id: 'en-accion',
        src: imgAccion,
        alt: 'Seguimiento clínico personalizado',
        span: 'tall',
    },
    {
        id: 'duo-profesional',
        src: imgDuo,
        alt: 'Dr. Augusto y Dra. Julieta Dominguez',
    },
    {
        id: 'grupal-1',
        src: imgGrupal1,
        alt: 'Dedicación en cada procedimiento',
    },
    {
        id: 'consultorio-1',
        src: imgConsultorio1,
        alt: 'Tecnología al servicio de tu salud',
        span: 'tall',
    },
    {
        id: 'grupal-2',
        src: imgGrupal2,
        alt: 'Atención cercana y personalizada',
    },
    // {
    //     id: 'consultorio-2',
    //     src: imgConsultorio2,
    //     alt: 'Instalaciones del consultorio',
    // },
    // {
    //     id: 'grupal-3',
    //     src: imgGrupal3,
    //     alt: 'Equipo de trabajo',
    //     span: 'wide',
    // },
];
