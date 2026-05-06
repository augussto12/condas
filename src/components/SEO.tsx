import { Helmet } from 'react-helmet-async'

const seoData = {
  nombre: 'Consultorios Condas',
  descripcion:
    'Centro odontológico en Mar del Plata. Endodoncia, implantología oral, periodoncia, ortodoncia, odontopediatría y más. Más de 20 años transformando sonrisas.',
  url: 'https://consultorioscondas.com',
  telefono: '+542235313208',
  direccion: 'Rivadavia 2456 3° E',
  codigoPostal: 'B7600',
  ciudad: 'Mar del Plata',
  provincia: 'Buenos Aires',
  pais: 'AR',
  coordenadas: {
    latitud: -38.001076,
    longitud: -57.5461,
  },
  horarios: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  keywords:
    'odontólogo Mar del Plata, dentista Mar del Plata, consultorio odontológico MDP, endodoncia, implantes dentales, ortodoncia Mar del Plata, odontopediatría',
  ogImage: 'https://consultorioscondas.com/og-image.png',
  sameAs: [
    'https://www.instagram.com/consultorioscondas/',
    'https://www.facebook.com/condasconsultoriodental/',
  ],
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: seoData.nombre,
  description: seoData.descripcion,
  url: seoData.url,
  telephone: seoData.telefono,
  address: {
    '@type': 'PostalAddress',
    streetAddress: seoData.direccion,
    addressLocality: seoData.ciudad,
    addressRegion: seoData.provincia,
    postalCode: seoData.codigoPostal,
    addressCountry: seoData.pais,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: seoData.coordenadas.latitud,
    longitude: seoData.coordenadas.longitud,
  },
  openingHoursSpecification: seoData.horarios.map((horario) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: horario.dayOfWeek,
    opens: horario.opens,
    closes: horario.closes,
  })),
  priceRange: '$$',
  image: seoData.ogImage,
  sameAs: seoData.sameAs,
}

export default function SEO() {
  return (
    <Helmet>
      <html lang="es-AR" />
      <title>Consultorios Condas — Centro Odontológico Mar del Plata</title>
      <meta name="description" content={seoData.descripcion} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seoData.url} />

      <meta
        property="og:title"
        content="Consultorios Condas — Centro Odontológico Mar del Plata"
      />
      <meta property="og:description" content={seoData.descripcion} />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:image" content={seoData.ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Consultorios Condas — Centro Odontológico Mar del Plata"
      />
      <meta name="twitter:description" content={seoData.descripcion} />
      <meta name="twitter:image" content={seoData.ogImage} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
