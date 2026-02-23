import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Phone, MapPin, CheckCircle, Send } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Input from '../ui/Input';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import { SERVICES } from '../../constants/services';
import { CONTACT_INFO } from '../../constants/navigation';

interface AppointmentFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    message: string;
}

function useAppointmentSubmit() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const submit = async (data: AppointmentFormData) => {
        setIsSubmitting(true);
        console.log('Appointment data:', data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return { submit, isSubmitting, isSuccess };
}

const contactItems = [
    { icon: Phone, label: 'Teléfono', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
    { icon: MapPin, label: 'Dirección', value: CONTACT_INFO.address, href: undefined },
    { icon: Clock, label: 'Horarios', value: 'Lun - Vie: 9:00 - 20:00', href: undefined },
    { icon: Calendar, label: 'Sábados', value: '9:00 - 13:00', href: undefined },
];

export default function Appointment() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AppointmentFormData>();
    const { submit, isSubmitting, isSuccess } = useAppointmentSubmit();

    const onSubmit = async (data: AppointmentFormData) => {
        await submit(data);
        reset();
    };

    return (
        <section id="turnos" style={{
            paddingTop: '8rem', paddingBottom: '8rem',
            background: 'linear-gradient(180deg, #ffffff 0%, #F2F8F8 50%, #F0F4F8 100%)',
        }}>
            <div style={{ maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center' }}>
                <SectionHeading
                    label="Turnos"
                    title="Reservá tu turno"
                    subtitle="Completá el formulario y nos pondremos en contacto para confirmar tu cita."
                />

                {/* Contact info cards — centered row */}
                <div className="grid grid-cols-2 md:grid-cols-4"
                    style={{ gap: '1.25rem', marginBottom: '4rem' }}>
                    {contactItems.map((item, i) => (
                        <AnimatedSection key={item.label} delay={i * 0.1}>
                            <div className="bg-surface rounded-2xl border border-surface-dark h-full"
                                style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <div className="rounded-xl bg-accent/10 flex items-center justify-center"
                                    style={{ width: '3rem', height: '3rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem' }}>
                                    <item.icon size={20} className="text-accent" />
                                </div>
                                <p className="text-text-light" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                                    {item.label}
                                </p>
                                {item.href ? (
                                    <a href={item.href} className="text-primary hover:text-accent transition-colors"
                                        style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-primary" style={{ fontWeight: 500, fontSize: '0.875rem' }}>{item.value}</p>
                                )}
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Form in centered card */}
                <AnimatedSection>
                    <div className="bg-surface rounded-3xl border border-surface-dark"
                        style={{ padding: '3rem', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 0' }}
                                >
                                    <div className="bg-green-100 rounded-full flex items-center justify-center"
                                        style={{ width: '6rem', height: '6rem', marginBottom: '2rem' }}>
                                        <CheckCircle size={48} className="text-green-500" />
                                    </div>
                                    <h3 className="font-serif text-primary" style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                                        ¡Turno solicitado!
                                    </h3>
                                    <p className="text-text-secondary" style={{ fontSize: '1.125rem', maxWidth: '24rem' }}>
                                        Nos pondremos en contacto para confirmar tu cita. ¡Gracias!
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit(onSubmit)}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
                                >
                                    <h3 className="font-serif text-primary" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>
                                        Datos para tu turno
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1.5rem' }}>
                                        <Input
                                            label="Nombre completo"
                                            placeholder="Tu nombre"
                                            error={errors.name?.message}
                                            {...register('name', { required: 'El nombre es requerido' })}
                                        />
                                        <Input
                                            label="Email"
                                            type="email"
                                            placeholder="tu@email.com"
                                            error={errors.email?.message}
                                            {...register('email', {
                                                required: 'El email es requerido',
                                                pattern: { value: /^\S+@\S+$/, message: 'Email inválido' },
                                            })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1.5rem' }}>
                                        <Input
                                            label="Teléfono"
                                            type="tel"
                                            placeholder="+54 223 XXX XXXX"
                                            error={errors.phone?.message}
                                            {...register('phone', { required: 'El teléfono es requerido' })}
                                        />
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label className="text-text-secondary" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                                                Servicio
                                            </label>
                                            <select
                                                className="bg-white border border-surface-dark text-text-primary
                          focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 cursor-pointer"
                                                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontSize: '1rem' }}
                                                {...register('service', { required: 'Seleccioná un servicio' })}
                                            >
                                                <option value="">Seleccionar servicio</option>
                                                {SERVICES.map((s) => (
                                                    <option key={s.id} value={s.id}>
                                                        {s.title}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.service && (
                                                <p style={{ fontSize: '0.875rem', color: '#ef4444' }}>{errors.service.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <Input
                                        label="Fecha preferida"
                                        type="date"
                                        error={errors.date?.message}
                                        {...register('date', { required: 'Seleccioná una fecha' })}
                                    />

                                    <Input
                                        as="textarea"
                                        label="Mensaje (opcional)"
                                        placeholder="Contanos brevemente el motivo de tu consulta..."
                                        {...register('message')}
                                    />

                                    <div style={{ paddingTop: '1rem', textAlign: 'center' }}>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                        style={{ width: '1.25rem', height: '1.25rem' }} />
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    Solicitar Turno
                                                </>
                                            )}
                                        </Button>
                                    </div>

                                    {/* WhatsApp alternative */}
                                    <div className="border-t border-surface-dark" style={{ textAlign: 'center', paddingTop: '1rem' }}>
                                        <p className="text-text-light" style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>¿Preferís contacto directo?</p>
                                        <a
                                            href={CONTACT_INFO.whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent hover:text-accent-dark transition-colors"
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.875rem' }}
                                        >
                                            <Phone size={16} />
                                            Escribinos por WhatsApp
                                        </a>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
